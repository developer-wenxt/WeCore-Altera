const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

console.log('========================================');
console.log('  Building Node.js 22 SEA Executable...');
console.log('========================================\n');

// 1. Clean dist folder
console.log('1. Cleaning dist/ folder...');
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });

// 2. Bundle the application code 
console.log('\n2. Bundling application code with esbuild...');
try {
  // Bundle all code into the executable, except native addons like oracledb
  // We redefine the CommonJS `require` variable so SEA can load external native node_modules
  const banner = "require = require('node:module').createRequire(process.execPath);";
  
  execSync(`npx esbuild server.js --bundle --platform=node --external:oracledb --external:sequelize --external:pg --external:sqlite3 --external:mysql2 --external:mariadb --external:tedious --banner:js="${banner}" --outfile=dist/bundle.js`, { 
    cwd: ROOT, 
    stdio: 'inherit' 
  });
} catch (err) {
  console.error('Failed to bundle with esbuild:', err.message);
  process.exit(1);
}

// 3. Create SEA config
console.log('\n3. Creating SEA config...');
const seaConfig = {
  main: 'bundle.js',
  output: 'sea-prep.blob',
  disableExperimentalSEAWarning: true
};
fs.writeFileSync(path.join(DIST, 'sea-config.json'), JSON.stringify(seaConfig, null, 2));

// 4. Generate the SEA blob
console.log('\n4. Generating SEA blob...');
try {
  execSync('node --experimental-sea-config sea-config.json', { 
    cwd: DIST, 
    stdio: 'inherit' 
  });
} catch (err) {
  console.error('Failed to generate SEA blob:', err.message);
  process.exit(1);
}

// 5. Copy the Node executable
console.log('\n5. Copying node executable...');
const exeExt = process.platform === 'win32' ? '.exe' : '';
const exeName = `wecore-altera${exeExt}`;
const destExe = path.join(DIST, exeName);
fs.copyFileSync(process.execPath, destExe);

// Remove signature on Windows before injecting (often required for postject to work correctly on signed node.exe)
if (process.platform === 'win32') {
  try {
    // If signtool is installed, we would run: signtool remove /s destExe
    // For now we will rely on postject overwriting the signature space.
  } catch(e) {}
}

// 6. Inject the blob into the executable
console.log('\n6. Injecting blob into executable via postject...');
try {
  // We use npx postject to inject the blob into the copied node binary
  execSync(`npx postject ${exeName} NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 ${process.platform === 'darwin' ? '--macho-segment-name NODE_SEA' : ''}`, { 
    cwd: DIST, 
    stdio: 'inherit' 
  });
} catch (err) {
  console.error('Failed to inject blob:', err.message);
  process.exit(1);
}

// 7. Copy required runtime files (node_modules will be installed via package.json)
console.log('\n7. Copying runtime dependencies...');
fs.copyFileSync(path.join(ROOT, 'package.json'), path.join(DIST, 'package.json'));
fs.copyFileSync(path.join(ROOT, 'package-lock.json'), path.join(DIST, 'package-lock.json'));
if (fs.existsSync(path.join(ROOT, '.env'))) {
  fs.copyFileSync(path.join(ROOT, '.env'), path.join(DIST, '.env'));
}

// Dynamically discover and copy any Oracle Instant Client directories (supporting lower versions like instantclient_11_2)
fs.readdirSync(ROOT).forEach(item => {
  if (item.startsWith('instantclient_')) {
    const icSrc = path.join(ROOT, item);
    if (fs.statSync(icSrc).isDirectory()) {
      console.log(`   Copying Oracle Instant Client (${item})...`);
      fs.cpSync(icSrc, path.join(DIST, item), { recursive: true });
    }
  }
});

// Modify package.json in dist for production
const pkgPath = path.join(DIST, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
delete pkg.devDependencies;
pkg.scripts = { start: `.${path.sep}${exeName}` };
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// 8. Cleanup temporary SEA files
console.log('\n8. Cleaning up temporary files...');
fs.unlinkSync(path.join(DIST, 'bundle.js'));
fs.unlinkSync(path.join(DIST, 'sea-config.json'));
fs.unlinkSync(path.join(DIST, 'sea-prep.blob'));

console.log(`\n========================================`);
console.log(`  ✅ SEA Build complete!`);
console.log(`  Executable: dist/${exeName}`);
console.log(`========================================`);
console.log(`\nNext steps for production deployment:`);
console.log(`  1. cd dist`);
console.log(`  2. npm ci --omit=dev    # Install native Node.js dependencies`);
console.log(`  3. .\\${exeName}       # Run the standalone executable`);

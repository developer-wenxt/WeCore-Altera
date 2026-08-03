# syntax=docker/dockerfile:1

# ----- Build Stage -----
FROM node:18-bullseye-slim AS build
WORKDIR /app

# Install dependencies (production only for clean runtime image)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# ----- Production Stage -----
FROM node:18-bullseye-slim AS runtime
WORKDIR /app

# Install required Oracle Instant Client dependencies (libaio1) and tools
RUN apt-get update && \
    apt-get install -y libaio1 wget unzip && \
    rm -rf /var/lib/apt/lists/*

# Copy application from build stage
COPY --from=build /app /app

# Install Linux Oracle Instant Client 11.2.0.4.0 (supports Oracle DB 9.2, 10.1, 10.2, 11.1, 11.2)
RUN rm -rf /app/instantclient_* && \
    wget https://download.oracle.com/otn_software/linux/instantclient/11204/instantclient-basiclite-linux-x86-64-11.2.0.4.0.zip && \
    unzip instantclient-basiclite-linux-x86-64-11.2.0.4.0.zip -d /app && \
    rm instantclient-basiclite-linux-x86-64-11.2.0.4.0.zip && \
    ln -s /app/instantclient_11_2/libclntsh.so.11.1 /app/instantclient_11_2/libclntsh.so && \
    (ln -s /usr/lib/x86_64-linux-gnu/libnsl.so.2 /usr/lib/x86_64-linux-gnu/libnsl.so.1 || true) && \
    mkdir -p /app/instantclient_11_2/network/admin && \
    echo "SQLNET.ALLOWED_LOGON_VERSION_CLIENT = 8" > /app/instantclient_11_2/network/admin/sqlnet.ora && \
    echo "SQLNET.ALLOWED_LOGON_VERSION_SERVER = 8" >> /app/instantclient_11_2/network/admin/sqlnet.ora && \
    test -f /app/instantclient_11_2/libclntsh.so

# Use the built-in node user for security
RUN chown -R node:node /app
USER node

# Expose the application port
EXPOSE 5001
ENV PORT=5001

ENV NODE_ENV=production
# Set library path and TNS admin for Oracle Client 11g and older
ENV LD_LIBRARY_PATH=/app/instantclient_11_2
ENV TNS_ADMIN=/app/instantclient_11_2/network/admin

# Start the application
CMD ["node", "server.js"]
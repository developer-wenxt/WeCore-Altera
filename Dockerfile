# syntax=docker/dockerfile:1

# ----- Build Stage -----
FROM node:18-slim AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# ----- Production Stage -----
FROM node:18-slim AS runtime
WORKDIR /app

# Install required Oracle Instant Client dependencies (libaio1) and tools
RUN apt-get update && \
    apt-get install -y libaio1 wget unzip && \
    rm -rf /var/lib/apt/lists/*

# Copy application from build stage
COPY --from=build /app /app

# Replace the Windows instantclient with the Linux version
RUN rm -rf /app/instantclient_19_22 && \
    wget https://download.oracle.com/otn_software/linux/instantclient/1922000/instantclient-basiclite-linux.x64-19.22.0.0.0dbru.zip && \
    (unzip instantclient-basiclite-linux.x64-19.22.0.0.0dbru.zip -d /app || true) && \
    rm instantclient-basiclite-linux.x64-19.22.0.0.0dbru.zip && \
    test -f /app/instantclient_19_22/libclntsh.so.19.1

# Use the built-in node user for security
RUN chown -R node:node /app
USER node

# Expose the application port
EXPOSE 5001

ENV NODE_ENV=production
# Set library path for Oracle Client
ENV LD_LIBRARY_PATH=/app/instantclient_19_22

# Start the application
CMD ["node", "server.js"]
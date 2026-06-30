# syntax=docker/dockerfile:1

# ----- Build Stage -----
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# ----- Production Stage -----
FROM node:18-alpine AS runtime
WORKDIR /app

# Copy only production dependencies from build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .

# Use a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port (adjust if your server uses a different port)
EXPOSE 3000

ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]

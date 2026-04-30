# ─── Stage 1: Builder ───────────────────────────────────────────────
FROM node:20.19.1-alpine3.21 AS builder

RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

WORKDIR /app

# Copiar archivos de configuración del monorepo
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY turbo.json ./
COPY pnpm-lock.yaml ./

# Copiar package.json de cada paquete
COPY packages/shared/package.json ./packages/shared/
COPY apps/frontend/package.json ./apps/frontend/

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el código fuente
COPY packages/shared ./packages/shared
COPY apps/frontend ./apps/frontend

# Buildear shared primero
RUN pnpm --filter @job-portal/shared build

# Build del frontend
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN pnpm --filter @job-portal/frontend build

# ─── Stage 2: Runner ────────────────────────────────────────────────
# nginx-unprivileged: runs as non-root uid 101, listens on 8080
FROM nginxinc/nginx-unprivileged:1.28-alpine AS runner

COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html

COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

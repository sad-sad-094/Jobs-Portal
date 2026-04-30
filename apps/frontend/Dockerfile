# ─── Stage 1: Builder ───────────────────────────────────────────────
FROM node:20-alpine AS builder

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
FROM nginx:alpine AS runner

# Copiar el build estático al directorio de Nginx
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html

# Copiar configuración de Nginx
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

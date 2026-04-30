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
COPY apps/backend/package.json ./apps/backend/

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el código fuente
COPY packages/shared ./packages/shared
COPY apps/backend ./apps/backend

# Buildear shared primero
RUN pnpm --filter @job-portal/shared build

# Generar el cliente de Prisma
RUN pnpm --filter @job-portal/backend db:generate

# Compilar el backend
RUN pnpm --filter @job-portal/backend build

# ─── Stage 2: Runner ────────────────────────────────────────────────
FROM node:20.19.1-alpine3.21 AS runner

# tini: proper PID 1 init — forwards signals to Node, reaps zombies
RUN apk add --no-cache tini

RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

WORKDIR /app

COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/packages/shared/package.json ./packages/shared/
COPY --from=builder /app/apps/backend/package.json ./apps/backend/

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma
COPY --from=builder /app/apps/backend/prisma.config.ts ./apps/backend/prisma.config.ts

# Transfer ownership to the built-in non-root node user
RUN chown -R node:node /app

USER node

WORKDIR /app/apps/backend

ENV NODE_ENV=production
ENV BACKEND_PORT=8080

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:8080/api/health || exit 1

ENTRYPOINT ["/sbin/tini", "--"]
# Seed removed: run once manually or via a migration job, not on every container start
CMD ["sh", "-c", "DATABASE_URL=$DATABASE_URL npx prisma migrate deploy --schema=./prisma/schema.prisma && node dist/server.js"]

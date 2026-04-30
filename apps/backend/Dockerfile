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
FROM node:20-alpine AS runner

RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

WORKDIR /app

COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/packages/shared/package.json ./packages/shared/
COPY --from=builder /app/apps/backend/package.json ./apps/backend/

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/src/generated ./apps/backend/src/generated
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma
COPY --from=builder /app/apps/backend/prisma.config.ts ./apps/backend/prisma.config.ts

# Transfer ownership to the built-in non-root node user
RUN chown -R node:node /app

USER node

WORKDIR /app/apps/backend

EXPOSE 8080

CMD ["sh", "-c", "pnpm exec prisma migrate deploy && node dist/db/seed.js && node dist/server.js"]

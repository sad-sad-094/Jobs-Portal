# Jobs Portal

Full stack monorepo for a job search portal built with TypeScript across the entire stack.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Monorepo** | pnpm Workspaces + Turborepo |
| **Frontend** | React, Vite, Tailwind CSS v4, TanStack Router, TanStack Query, Zustand |
| **Backend** | Express, Zod |
| **Database** | PostgreSQL, Prisma 7 |
| **Language** | TypeScript (shared across all packages) |
| **Formatting** | Prettier |

## Project Structure

```
job-portal/
├── apps/
│   ├── backend/              Express REST API
│   └── frontend/             React SPA
├── packages/
│   └── shared/               Shared TypeScript types
├── turbo.json                Turborepo task configuration
├── pnpm-workspace.yaml       Workspace definition
├── .prettierrc               Shared formatting rules
└── package.json              Root scripts and dev dependencies
```

## Packages

| Package | Description |
|---------|-------------|
| `@job-portal/backend` | REST API with Express, Prisma and Zod validation |
| `@job-portal/frontend` | React SPA with TanStack Router and Query |
| `@job-portal/shared` | TypeScript interfaces shared between apps |

## Prerequisites

- Node.js >= 18
- pnpm
- PostgreSQL

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd job-portal
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Each app has a `.env.example` file. Copy and fill in your values:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

### 4. Set up the database

Follow the database setup instructions in the [backend README](apps/backend/README.md).

### 5. Run the project

```bash
pnpm dev
```

This starts both the backend and frontend simultaneously via Turborepo.

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:8080 |

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build shared package first, then all apps in parallel |
| `pnpm format` | Format all files across the monorepo |
| `pnpm format:check` | Verify formatting without modifying files |

## App-Specific Documentation

- [Backend README](apps/backend/README.md) — API endpoints, database setup, architecture
- [Frontend README](apps/frontend/README.md) — Pages, components, state management

## Shared Package

The `@job-portal/shared` package contains TypeScript interfaces used by both apps. Any change to a model is validated at compile time across the entire monorepo.

```typescript
import type { Job, Role, Application } from '@job-portal/shared';
```

To rebuild after changes:

```bash
pnpm --filter @job-portal/shared build
```
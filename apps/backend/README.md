# @job-portal/backend

REST API for the Jobs Portal built with Express, TypeScript and Prisma ORM.

## Tech Stack

- **Runtime:** Node.js + TypeScript
- **Framework:** Express
- **ORM:** Prisma 7
- **Database:** PostgreSQL
- **Validation:** Zod

## Prerequisites

- Node.js >= 18
- pnpm
- PostgreSQL

## Setup

### 1. Environment Variables

Copy the `.env.example` file and fill in your own values:

```bash
cp .env.example .env
```

The `.env.example` file contains the required variables:

```env
BACKEND_PORT=
DATABASE_URL=
```

### 2. Database

Create a PostgreSQL database and user with the necessary permissions. Make sure the user has `CREATEDB` privileges (required by Prisma for migrations) and `ALL` permissions on the `public` schema.

### 3. Install Dependencies

From the monorepo root:

```bash
pnpm install
```

### 4. Run Migrations

```bash
pnpm --filter @job-portal/backend db:generate
pnpm --filter @job-portal/backend db:migrate
```

### 5. Seed the Database

```bash
pnpm --filter @job-portal/backend db:seed
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm start` | Run compiled production build |
| `pnpm db:generate` | Generate Prisma client from schema |
| `pnpm db:migrate` | Apply pending database migrations |
| `pnpm db:seed` | Populate database with initial data |
| `pnpm db:studio` | Open Prisma Studio for visual DB exploration |

## API Endpoints

### Health Check

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Server health check |

### Roles

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/roles` | List all available roles |

### Jobs

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/jobs` | List jobs with optional filters |
| GET | `/api/jobs/:id` | Get job detail by ID |

**Available query filters for `GET /api/jobs`:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `search` | string | Search by title, company or description |
| `modality` | string | Filter by `remote`, `onsite` or `hybrid` |
| `experience` | string | Filter by `junior`, `mid`, `semi-senior` or `senior` |

### Applications

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/applications` | Apply to a job |
| GET | `/api/applications` | List applications by user |

**POST body for `/api/applications`:**

```json
{
  "jobId": "job-1",
  "userId": "user-001",
  "applicantName": "Sebastian",
  "applicantEmail": "sebastian@email.com",
  "coverLetter": "Optional cover letter..."
}
```

**GET query params for `/api/applications`:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | Filter applications by user ID |

## Project Structure

```
src/
├── controllers/        # Request handlers
├── services/           # Business logic with Prisma queries
├── routes/             # Endpoint definitions
├── schemas/            # Zod validation schemas
├── middlewares/         # Error handling and request validation
├── db/                 # Database client and seed script
├── generated/prisma/   # Auto-generated Prisma client (gitignored)
└── app.ts              # Express app entry point
```

## Architecture

```
Request → Routes → Validate (Zod) → Controllers → Services → Prisma → PostgreSQL
```

Each layer has a single responsibility:

- **Routes** define endpoints and connect middleware to controllers
- **Schemas** define validation rules with Zod
- **Middlewares** validate requests and handle errors globally
- **Controllers** parse validated input and return HTTP responses
- **Services** contain business logic and database queries

# Moratuwa AI Design Study Platform

Phase 1 foundation for a Next.js 15 research platform supporting the MBA study on AI-generated design visualization for Sri Lankan customized micro-scale home decor businesses.

## Stack

- Next.js 15 App Router, TypeScript strict mode
- Tailwind CSS with shadcn/ui-style primitives
- Prisma ORM with PostgreSQL
- Auth.js v5 credentials auth with bcrypt and roles
- next-intl for English, Sinhala, and Tamil routing

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Start PostgreSQL and update `DATABASE_URL`.

4. Generate Prisma client and run migrations:

   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. Seed initial users:

   ```bash
   npm run prisma:seed
   ```

6. Run locally:

   ```bash
   npm run dev
   ```

Seed credentials:

- Researcher: `researcher@example.com` / `Password123!`
- Supervisor: `supervisor@example.com` / `Password123!`

## Phase 1 Scope

This phase sets up the application shell, locale routing, database schema, authentication model, role helpers, and seed scaffolding. Later phases add the public site, onboarding, AI studio, customer feedback, questionnaire builder, interviews, analytics, exports, and security hardening.

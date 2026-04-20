# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### ImageToText.fun OCR Platform (`artifacts/imagetotext`)
- **Type**: react-vite (frontend-only, no backend)
- **Preview path**: `/`
- **Purpose**: High-authority multi-page OCR utility platform
- **OCR**: Tesseract.js (100% client-side, no server uploads)
- **PDF export**: jsPDF
- **Routing**: wouter
- **Animations**: framer-motion
- **Features**:
  - Universal OCR engine with drag-and-drop, URL input, clipboard paste
  - 50+ language support
  - 15+ dedicated tool pages (JPG to Word, Handwriting OCR, Receipt to Excel, etc.)
  - Blog library (15+ articles), Wiki hub (10 terms), Changelog
  - Mega-menu navigation + fat 5-column footer
  - Legal pages: Privacy, Terms, Disclaimer, Contact
  - SEO-optimized with unique titles/meta on every page

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

# Copilot instructions

- Single source of truth:
    - Skills live in `.github/skills/`.
    - Rules live in `.github/instructions/`.
    - Prompt templates live in `.github/prompts/`.
- Prefer repo-aware changes: update code/content in place, run `yarn build` when changing site/build-related files.
- Contentlayer schema source of truth is `contentlayer.config.ts`.
- Content files live under `content/{type}/**` (blog, projects, experiences, skills, courses, testimonials, services, presentations, publications, pages).
- TypeScript strict mode is enforced – avoid `any` types.
- Path alias `@/*` maps to `src/*` (configured in `tsconfig.json`).
- Always import MUI components directly (no barrel imports) to avoid bundle bloat.
- App Router: prefer Server Components; add `'use client'` only when needed.

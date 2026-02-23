# Agent instructions (source of truth)

This repository centralizes agent guidance in these locations:

- Skills: `.github/skills/`
- Rules/instructions: `.github/instructions/`
- Prompt templates: `.github/prompts/`

## Conventions

- Treat `.github/skills/` as the only source of truth for skills.
- Keep instructions small and composable; prefer adding a new file here instead of growing one mega file.
- Prefer repo-aware changes: update code/content in place, run `yarn build` when changing site/build-related files.
- Contentlayer schema source of truth is `contentlayer.config.ts`.
- Content files live under `content/{type}/**` – see AGENTS.md for the full list.

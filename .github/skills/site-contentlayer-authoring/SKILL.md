---
name: site-contentlayer-authoring
description: "Authoring and maintenance workflow for this repo's Contentlayer2 content (content/*). Use when adding/editing Markdown content (blog, projects, experiences, skills, courses, testimonials, services, presentations, publications); when frontmatter is missing/broken; or when Contentlayer build fails."
---

# site-contentlayer-authoring

Este repositório usa `contentlayer2` para gerar tipos TypeScript a partir de Markdown em `content/`.

## Objetivo

- Criar/atualizar conteúdo Markdown sem quebrar o schema do Contentlayer.
- Manter consistência de frontmatter e URLs computadas.

## Estrutura de conteúdo (i18n)

**Todo** conteúdo usa subpastas de locale. O campo `locale` é **computado automaticamente** a partir
do caminho — **não coloque `locale:` no frontmatter**.

```
content/
├── blog/
│   ├── pt/            ← posts em português
│   └── en/            ← posts em inglês
├── pages/
│   ├── pt/
│   └── en/
├── projects/
│   ├── pt/
│   └── en/
├── experiences/
│   ├── pt/
│   └── en/
├── skills/
│   ├── pt/
│   └── en/
├── courses/
│   ├── pt/
│   └── en/
├── testimonials/
│   ├── pt/
│   └── en/
├── services/
│   ├── pt/
│   └── en/
├── presentations/
│   ├── pt/
│   └── en/
└── publications/
    ├── pt/
    └── en/
```

> **Imagens:** podem ficar na mesma pasta do `.md` (colocation). Use paths relativos
> se colocalizadas, ou `/images/{tipo}/{slug}.png` para imagens em `public/`.

## Quando usar (gatilhos)

- "Adicione um post no blog", "crie um projeto", "inclua uma experiência".
- Erros de build do tipo "missing required field" / "Contentlayer build failed".
- Ajustes em `contentlayer.config.ts` ou nas pastas `content/**`.

## Princípios e regras

### Crítico (não negociar)

- Respeitar campos `required: true` em `contentlayer.config.ts`.
- **Nunca** colocar `locale:` no frontmatter — é computado do caminho.
- Não alterar o schema sem ajustar todos os documentos impactados.
- Manter URLs consistentes com os `computedFields`.

## Cheat sheet: frontmatter por tipo

Fonte: `contentlayer.config.ts`. O `locale` é **sempre computado** do caminho.

### Post (`content/blog/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `date` | date (ISO) | ✓ |
| `author` | string | ✓ |
| `category` | string | ✓ |
| `image` | string | ✓ |
| `draft` | boolean | - |
| `tags` | string[] | - |

URL computada: `/blog/{slug}`

### Page (`content/pages/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `image` | string | ✓ |

URL computada: `/{slug}` (ex.: `pages/pt/about.md` → `/about`)

### Project (`content/projects/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `id` | number | ✓ |
| `title` | string | ✓ |
| `description` | string | ✓ |
| `pin` | boolean | ✓ |
| `image` | string | ✓ |
| `projectUrl` | string | - |
| `repositoryUrl` | string | - |
| `tags` | string[] | - |

### Experience (`content/experiences/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `id` | number | ✓ |
| `title` | string | ✓ |
| `company` | string | ✓ |
| `location` | string | ✓ |
| `description` | string | ✓ |
| `period` | string | ✓ |
| `show` | boolean | ✓ |

### Skill (`content/skills/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `name` | string | ✓ |
| `level` | `basic`/`intermediate`/`advanced`/`expert` | ✓ |
| `firstContact` | number (ano) | ✓ |
| `category` | string | - |
| `icon` | string | - |

### Course (`content/courses/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `name` | string | ✓ |
| `institution` | string | ✓ |
| `completionDate` | date (ISO) | ✓ |
| `workload` | number (horas) | ✓ |
| `courseLink` | string | - |
| `certificateLink` | string | - |

### Testimonial (`content/testimonials/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `name` | string | ✓ |
| `position` | string | ✓ |
| `testimonial` | string | ✓ |
| `image` | string | ✓ |
| `company` | string | - |
| `show` | boolean | - |

### Service (`content/services/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `order` | number | ✓ |
| `title` | string | ✓ |
| `description` | string | ✓ |
| `image` | string | ✓ |
| `icon` | string | ✓ |
| `show` | boolean | - |

### Presentation (`content/presentations/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `date` | date (ISO) | ✓ |
| `event` | string | ✓ |
| `location` | string | - |
| `slidesUrl` | string | - |
| `videoUrl` | string | - |
| `image` | string | - |
| `show` | boolean | - |

### Publication (`content/publications/{locale}/**/*.md`)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `date` | date (ISO) | ✓ |
| `publisher` | string | ✓ |
| `type` | `article`/`book`/`paper`/`tutorial`/`other` | ✓ |
| `url` | string | - |
| `image` | string | - |
| `show` | boolean | - |

## Workflow (faça em ordem)

1. **Identificar tipo e locale** – em qual pasta `content/{tipo}/{locale}/` o arquivo vive.
2. **Criar/editar o Markdown** – garantir todos os campos `required`. **Não** adicionar `locale:`.
3. **Imagens** – podem ficar na mesma pasta do `.md` (colocation).
4. **Validar** – `yarn dev` para watch ou `yarn build` para validação completa.

## Checklist

- [ ] Arquivo na pasta `content/{tipo}/{locale}/` correta.
- [ ] Frontmatter completo, sem campo `locale:` manual.
- [ ] `yarn dev` sobe sem erro de Contentlayer.
- [ ] `yarn build` passa.

## Consulte também

- `site-nextjs-static-export` – build e deploy
- `site-i18n` – roteamento de locale e mensagens de UI

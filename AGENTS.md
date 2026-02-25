# Agent entrypoint

Este repositório é um site de portfólio em Next.js (App Router, TypeScript) com conteúdo em
Markdown gerado via Contentlayer2, publicado como site estático no GitHub Pages.

## Fonte única de verdade para configuração de agentes

- Skills: `.github/skills/`
- Rules/instructions: `.github/instructions/`
- Prompt templates: `.github/prompts/`

Leia `.github/instructions/README.md` antes de qualquer tarefa relevante.

## Comandos principais

| Comando           | Descrição                                             |
| ----------------- | ----------------------------------------------------- |
| `yarn dev`        | Inicia Contentlayer2 watch + Next.js dev (porta 3600) |
| `yarn build`      | Build completo (Contentlayer2 + Next.js + sitemap)    |
| `yarn lint`       | Lint do código em `src/`                              |
| `yarn lint:fix`   | Lint com correção automática                          |
| `yarn format`     | Formata todos os arquivos com Prettier                |
| `yarn format:all` | Formata e corrige lint                                |

## Stack

- **Next.js 16** – App Router, TypeScript strict, `output: 'export'`
- **React 19**
- **MUI 7 + Emotion** – design system
- **Contentlayer2** – conteúdo Markdown → tipos TypeScript
- **next-intl** – i18n (pt padrão, en)
- **next-seo** – SEO e Open Graph
- **next-sitemap** – sitemap.xml e robots.txt (postbuild)
- **lunr** – busca client-side
- **date-fns** – formatação de datas

## Estrutura de diretórios

```
.github/skills/      ← skills de agentes
content/             ← conteúdo Markdown (blog, projetos, experiências…)
public/              ← assets estáticos
src/
├── app/             ← App Router (layouts, pages)
├── components/      ← componentes React
├── config/          ← AppConfig.ts, SeoConfig.ts
├── lib/             ← utilitários de servidor
├── styles/          ← theme.ts (MUI), globals.css
└── utils/           ← utilitários gerais
```

## Skills instaladas

- `site-nextjs-static-export` – build, deploy, GitHub Pages
- `site-contentlayer-authoring` – autoria de conteúdo Markdown
- `site-seo-and-sitemap` – SEO, OG, sitemap
- `site-i18n` – internacionalização com next-intl
- `site-content-image-generation` – geração de imagens de capa
- `web-design-guidelines` – revisão de UI
- `vercel-react-best-practices` – performance React/Next.js
- `vercel-composition-patterns` – padrões de composição React

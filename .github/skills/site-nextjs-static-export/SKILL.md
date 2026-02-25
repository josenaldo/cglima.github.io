---
name: site-nextjs-static-export
description: "Build, troubleshoot, and modernize this repository's Next.js static export pipeline (output: 'export') and GitHub Pages deploy workflow. Use when the user mentions GitHub Pages, static export, the out/ folder, next build errors, basePath/assetPrefix issues, CI workflow fixes, or Contentlayer integration."
---

# site-nextjs-static-export

Workflow e guardrails para build e deploy deste repo como site estático Next.js no GitHub Pages.

## Stack deste projeto

- **Next.js 16** – App Router, TypeScript, `output: 'export'`
- **Contentlayer2** – geração de tipos a partir de Markdown (`content/`)
- **next-intl** – i18n com rotas estáticas (`/pt/…`, `/en/…`)
- **next-sitemap** – geração de `sitemap.xml` e `robots.txt` no postbuild
- **MUI 7 + Emotion** – design system

## Quando usar (gatilhos)

- "O build no GitHub Actions falhou", "GitHub Pages não atualiza", "404 em assets".
- "Quero exportar o site", "preciso do `out/`".
- "O contentlayer não está gerando tipos", "erro de build do Contentlayer".
- Ajustes em `.github/workflows/nextjs.yml`, `next.config.ts`, `.env.*`.

## Princípios e regras

### Crítico (não negociar)

- O build SEMPRE usa `yarn build` (= `contentlayer2 build && next build`), nunca `next build` direto.
- Deploy estático publica o diretório `out/`.
- `NEXT_PUBLIC_SITE_URL` deve estar definido no ambiente de build (local e CI).

### Padrões recomendados

- Validar com `yarn lint` e `yarn build` antes de mexer no workflow.
- `images.unoptimized: true` é necessário para export estático.
- Para "user page" (`cglima.github.io`), `basePath` deve ficar vazio.

## Decision Tree

1. O deploy é "user page" (`cglima.github.io`) ou "project page" (`cglima.github.io/repo`)?
    - User page → `basePath` vazio (padrão atual).
    - Project page → adicionar `basePath` e ajustar links.

2. O erro é no CI ou só em produção?
    - CI → focar em Node/cache/commands/env vars.
    - Produção → focar em `NEXT_PUBLIC_SITE_URL`, caminhos absolutos, sitemap, assets.

## Workflow (faça em ordem)

1. **Reproduzir localmente**: `yarn install && yarn build` – verificar que `out/` é gerado.
2. **Confirmar invariantes**: `next.config.ts` mantém `output: 'export'` e `withContentlayer`.
3. **Ajustar CI**: usar `yarn build` no workflow e publicar `./out`.
4. **Validar**: checar URL final, assets (CSS/JS/imagens), sitemap/robots.

## Checklist

- [ ] `yarn build` gera `out/` sem erros.
- [ ] Workflow publica `./out` com `actions/upload-pages-artifact`.
- [ ] `NEXT_PUBLIC_SITE_URL` está definido no CI.
- [ ] Não há 404 em assets em produção.
- [ ] `sitemap.xml` e `robots.txt` estão no output.

## Consulte também

- `site-contentlayer-authoring` – autoria e schema de conteúdo
- `site-seo-and-sitemap` – SEO e sitemap
- `vercel-react-best-practices` – performance React/Next.js

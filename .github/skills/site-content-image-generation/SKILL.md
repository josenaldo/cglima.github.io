---
name: site-content-image-generation
description: 'Generate cover images for blog posts, projects, pages, and other site content. Use when the user asks to generate, create, or update cover/OG images for content. Saves images near the content file (colocation) or in public/images/{type}/.'
---

# site-content-image-generation

Automatiza a criação de imagens de capa para conteúdos do site, garantindo consistência visual e SEO.

## Objetivo

Gerar imagens (1200×630 px, PNG) para Open Graph, SEO e redes sociais a partir do conteúdo Markdown,
respeitando o padrão visual do projeto (cores, tipografia, branding de `src/styles/theme.ts`).

## Quando usar (gatilhos)

- "Gerar imagem de capa para o post X"
- "Criar imagem OG para o projeto Y"
- "Atualizar imagens de preview do blog"

## Localização das imagens

Este projeto usa **colocation** de imagens:

- Prefira salvar a imagem na **mesma pasta** do arquivo `.md` de referência.
- Alternativa: `public/images/{tipo}/{slug}.png` (ex.: `public/images/blog/meu-post.png`).
- Após salvar, atualizar o campo `image` no frontmatter do documento.

## Fluxo

1. Identificar tipo e slug do conteúdo.
2. Extrair título, resumo e categoria do `.md`.
3. Gerar imagem 1200×630 px com padrão visual do site.
4. Salvar próximo ao conteúdo (colocation) ou em `public/images/{tipo}/{slug}.png`.
5. Atualizar o campo `image` no frontmatter (com confirmação do usuário).
6. Exibir caminho e instruções para revisão.

## Referências visuais

- `src/styles/theme.ts` – cores, fontes, tokens do tema
- `src/config/AppConfig.ts` – nome e identidade do site
- Exemplos em `public/images/` (quando disponíveis)

## Cuidados

- Não sobrescrever imagens existentes sem confirmação do usuário.
- Manter proporção 1200×630 px (padrão OG).
- Verificar que o campo `image` no frontmatter referencia o caminho correto.

## Consulte também

- `site-contentlayer-authoring` – schema e campos de imagem
- `site-seo-and-sitemap` – uso de imagens OG no SEO

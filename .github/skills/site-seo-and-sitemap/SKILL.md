---
name: site-seo-and-sitemap
description: 'Maintain SEO metadata and sitemap/robots generation for this Next.js static site. Use when changing titles/descriptions/OG images, canonical URLs, NEXT_PUBLIC_SITE_URL, next-seo configuration, or when adding sitemap.xml/robots.txt via next-sitemap.'
---

# site-seo-and-sitemap

Guia prático para manter SEO consistente neste site estático com App Router.

## Objetivo

- Garantir metas (title/description/canonical/OG/Twitter) coerentes em todas as páginas.
- Manter sitemap e robots coerentes com a URL pública final.

## Quando usar (gatilhos)

- "Atualize Open Graph", "corrija canonical", "melhore SEO", "adicione sitemap/robots".
- Mudanças em `NEXT_PUBLIC_SITE_URL`, `src/config/SeoConfig.ts`, layouts.
- Problemas em preview/prod: OG com URL errada, canonical vazio.

## Arquivos-chave

| Arquivo                                | Função                              |
| -------------------------------------- | ----------------------------------- |
| `src/config/SeoConfig.ts`              | Defaults globais de SEO             |
| `src/config/AppConfig.ts`              | URL base, nome do site, dono        |
| `next-sitemap.config.js`               | Config do sitemap e robots          |
| `.env.development` / `.env.production` | `NEXT_PUBLIC_SITE_URL` por ambiente |

## Princípios e regras

### Crítico (não negociar)

- `NEXT_PUBLIC_SITE_URL` deve existir no build (local e CI).
- Canonical e OG devem ser URLs absolutas em produção.
- Para export estático, `sitemap.xml` e `robots.txt` precisam estar no `out/`.

### Padrões recomendados

- Centralizar defaults em `SeoConfig.ts`.
- Para páginas específicas, usar o componente `<NextSeo>` do `next-seo`.
- No App Router, usar `generateMetadata()` para metadados dinâmicos.

## Workflow (faça em ordem)

1. **Confirmar URL** – definir/validar `NEXT_PUBLIC_SITE_URL` para cada ambiente.
2. **Revisar defaults** – conferir `SeoConfig.ts`: canonical, OG URL, imagens.
3. **Revisar por página** – garantir `title`, `description`, `image` coerentes.
4. **Sitemap/robots** – `next-sitemap.config.js` já configurado; roda no `postbuild`.
5. **Validar** – `yarn build` e verificar `out/sitemap.xml` e `out/robots.txt`.

## Checklist

- [ ] `NEXT_PUBLIC_SITE_URL` definido para dev e CI.
- [ ] Canonical/OG usam URLs absolutas.
- [ ] Preview (Open Graph) aponta para imagem válida (1200×630).
- [ ] `sitemap.xml` e `robots.txt` gerados em `out/`.

## Consulte também

- `site-nextjs-static-export`
- `web-design-guidelines`

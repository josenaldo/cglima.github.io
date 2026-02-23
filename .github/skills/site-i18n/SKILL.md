---
name: site-i18n
description: "Internationalization (i18n) with next-intl and App Router static export. Use when adding/editing translations, adding a new locale, configuring locale routing, or fixing missing translation keys. This site supports pt (default) and en."
---

# site-i18n

Guia de internacionalização para este projeto Next.js App Router com `next-intl` e export estático.

## Stack de i18n

- **next-intl** – lib de i18n para App Router
- Locales suportados: `pt` (padrão) e `en`
- Estratégia: rotas com prefixo de locale (`/pt/…`, `/en/…`)
- Export estático: usa `generateStaticParams` para gerar todas as rotas

## Estrutura

```
src/
├── app/
│   └── [locale]/           ← segmento dinâmico de locale
│       ├── layout.tsx      ← NextIntlClientProvider + ThemeProvider
│       └── page.tsx
├── i18n/
│   ├── request.ts          ← configuração do next-intl
│   └── routing.ts          ← definição de locales e defaultLocale
└── messages/
    ├── pt.json             ← traduções em português
    └── en.json             ← traduções em inglês
```

## Quando usar (gatilhos)

- "Adicione tradução para X", "a tradução está errada", "adicione suporte a outro idioma".
- Erros do tipo "Missing translation" ou "NEXT_LOCALE not found".
- Ajustes em `src/i18n/routing.ts`, `src/messages/*.json`.

## Princípios e regras

### Crítico (não negociar)

- Toda string visível ao usuário deve usar `useTranslations()` ou `getTranslations()`.
- Nunca hardcode texto em componentes – sempre usar chaves de tradução.
- Ao adicionar uma chave em `pt.json`, adicionar a mesma em `en.json`.

### Padrões recomendados

- Organizar as chaves por namespace/componente: `{ "Home": { "title": "..." } }`.
- Para conteúdo Markdown, o locale é **computado automaticamente do caminho** (`content/{tipo}/{locale}/`). Nunca usar o campo `locale:` no frontmatter — ele não existe no schema.
- Para filtrar conteúdo por locale, usar o campo `locale` computado: `allPosts.filter(p => p.locale === locale)`.
- Para páginas dinâmicas, usar `generateStaticParams` exportando todos os locales.

## Cheat sheet

### Usar traduções em Server Component

```tsx
import { getTranslations } from 'next-intl/server'

export default async function Page() {
    const t = await getTranslations('Home')
    return <h1>{t('title')}</h1>
}
```

### Usar traduções em Client Component

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function MyComponent() {
    const t = useTranslations('Home')
    return <p>{t('description')}</p>
}
```

### Gerar rotas estáticas para todos os locales

```tsx
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}
```

## Workflow (faça em ordem)

1. **Adicionar/editar chave** – atualizar `src/messages/pt.json` e `src/messages/en.json`.
2. **Usar no componente** – via `useTranslations()` (client) ou `getTranslations()` (server).
3. **Validar** – `yarn dev` para verificar sem erros de tradução faltante.
4. **Build** – `yarn build` para confirmar que as rotas estáticas são geradas corretamente.

## Checklist

- [ ] Chave adicionada em todos os arquivos de mensagem (`pt.json`, `en.json`).
- [ ] Componente usa `useTranslations` / `getTranslations` (sem hardcode).
- [ ] `generateStaticParams` exporta todos os locales para páginas dinâmicas.
- [ ] `yarn build` passa sem erros de locale.

## Consulte também

- `site-nextjs-static-export` – build estático e export
- `site-contentlayer-authoring` – estrutura de pastas `{tipo}/{locale}/` e schema

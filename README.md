# Meu Site — Guia Completo

Este é o código-fonte do seu site pessoal e portfólio. Ele funciona como um site estático publicado no **GitHub Pages** e possui um painel de administração (**Sveltia CMS**) para editar conteúdo sem precisar mexer diretamente nos arquivos.

---

## Índice

1. [Pré-requisitos](#1-pré-requisitos)
2. [Baixar o projeto](#2-baixar-o-projeto)
3. [Instalar dependências](#3-instalar-dependências)
4. [Rodar localmente](#4-rodar-localmente)
5. [Editar conteúdo localmente com o CMS](#5-editar-conteúdo-localmente-com-o-cms)
6. [Estrutura de arquivos importantes](#6-estrutura-de-arquivos-importantes)
7. [Personalizar configurações do site](#7-personalizar-configurações-do-site)
8. [Enviar alterações para o GitHub (push)](#8-enviar-alterações-para-o-github-push)
9. [Ativar o GitHub Pages (primeira vez)](#9-ativar-o-github-pages-primeira-vez)
10. [Colocar em produção](#10-colocar-em-produção)
11. [Editar o site em produção pelo CMS](#11-editar-o-site-em-produção-pelo-cms)

---

## 1. Pré-requisitos

Antes de começar, instale os programas abaixo no seu computador. Todos são gratuitos.

### Git
Ferramenta para baixar e enviar o código ao GitHub.

- Acesse https://git-scm.com/downloads
- Baixe a versão para o seu sistema operacional e instale com as opções padrão
- Para verificar se instalou corretamente, abra o terminal e digite:
  ```
  git --version
  ```
  Deve aparecer algo como `git version 2.x.x`

### Node.js (versão 20 ou superior)
Ambiente necessário para rodar o projeto.

- Acesse https://nodejs.org
- Baixe a versão **LTS** (a recomendada) e instale com as opções padrão
- Para verificar:
  ```
  node --version
  ```
  Deve aparecer algo como `v20.x.x` ou superior

### Yarn
Gerenciador de pacotes usado por este projeto.

- Após instalar o Node.js, abra o terminal e execute:
  ```
  npm install -g yarn
  ```
- Para verificar:
  ```
  yarn --version
  ```

### Conta no GitHub
- Acesse https://github.com e crie uma conta gratuita se ainda não tiver
- O repositório deste site deve estar na sua conta

---

## 2. Baixar o projeto

Abra o terminal (no Windows use o **Git Bash** ou o **PowerShell**) e execute:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos valores corretos. Por exemplo:

```bash
git clone https://github.com/cglima/cglima.github.io.git
```

Depois entre na pasta do projeto:

```bash
cd cglima.github.io
```

> **Dica:** Se preferir uma interface visual, você pode usar o [GitHub Desktop](https://desktop.github.com/) para clonar o repositório com alguns cliques.

---

## 3. Instalar dependências

Dentro da pasta do projeto, execute:

```bash
yarn install
```

Isso vai baixar todas as bibliotecas necessárias. Pode demorar alguns minutos na primeira vez.

---

## 4. Rodar localmente

Para ver o site rodando no seu computador:

```bash
yarn dev
```

Aguarde até aparecer a mensagem `Ready in X.Xs`. Depois abra o navegador em:

```
http://localhost:3600
```

O site vai recarregar automaticamente sempre que você salvar um arquivo.

Para parar o servidor, pressione `Ctrl + C` no terminal.

---

## 5. Editar conteúdo localmente com o CMS

O projeto possui um painel de administração visual (Sveltia CMS) que permite criar e editar posts, projetos, experiências e muito mais, sem precisar editar arquivos manualmente.

Para usar o CMS localmente, você precisa de **dois terminais abertos ao mesmo tempo**.

### Terminal 1 — Servidor do site
```bash
yarn dev
```

### Terminal 2 — Proxy do CMS
```bash
yarn cms
```

Aguarde aparecer a mensagem `Proxy server listening on port 8081`.

### Acessar o painel

Abra o navegador em:

```
http://localhost:3600/admin/index.html
```

Na tela de login, clique em **"Local"**. Pronto — você verá o painel com todas as coleções de conteúdo.

> **Importante:** O botão "Local" só aparece quando o `yarn cms` está rodando. Se aparecer só o botão "GitHub", verifique se o Terminal 2 está ativo.

### O que você pode editar pelo CMS

| Seção | O que é |
|---|---|
| Blog | Posts e artigos |
| Projetos | Projetos do portfólio |
| Experiências | Histórico profissional |
| Habilidades | Tecnologias e competências |
| Cursos e Certificações | Cursos realizados |
| Serviços | Serviços que você oferece |
| Depoimentos | Recomendações de colegas |
| Apresentações | Palestras e slides |
| Publicações | Artigos e livros publicados |
| Páginas | Páginas estáticas como "Sobre" |
| Configurações | Dados gerais do site |
| Traduções | Textos da interface (PT e EN) |

---

## 6. Estrutura de arquivos importantes

```
site/
├── config.json          ← configurações gerais do site (nome, cores, redes sociais)
├── messages/
│   ├── pt.json          ← textos da interface em português
│   └── en.json          ← textos da interface em inglês
├── content/
│   ├── blog/            ← posts do blog
│   │   ├── pt/          ← versão em português
│   │   └── en/          ← versão em inglês
│   ├── projects/        ← projetos
│   ├── experiences/     ← experiências profissionais
│   └── ...              ← demais seções
├── images/              ← imagens do site
└── icons/               ← ícones e favicon
```

Os arquivos de conteúdo são escritos em **Markdown** (`.md`), um formato de texto simples. Você pode editá-los diretamente pelo CMS (recomendado) ou por qualquer editor de texto.

---

## 7. Personalizar configurações do site

Abra o arquivo `site/config.json` em um editor de texto. As principais opções são:

```json
{
  "siteName": "Seu Nome",
  "siteUrl": "https://SEU_USUARIO.github.io",
  "owner": {
    "name": "Seu Nome Completo",
    "title": "Sua Profissão",
    "bio": "Um parágrafo sobre você.",
    "email": "seu@email.com",
    "github": "https://github.com/SEU_USUARIO",
    "linkedin": "https://www.linkedin.com/in/SEU_PERFIL/",
    "twitter": "seu_usuario_twitter"
  },
  "theme": {
    "primaryColor": "#8855DF"
  }
}
```

Você também pode editar essas informações pelo CMS: acesse **Configurações** no menu lateral.

### Ativar ou desativar seções do menu

No arquivo `site/config.json`, a propriedade `navigation` controla quais itens aparecem no menu e em que ordem:

```json
"navigation": [
  { "key": "home",      "visible": true  },
  { "key": "blog",      "visible": true  },
  { "key": "projects",  "visible": true  },
  { "key": "skills",    "visible": false }
]
```

Mude `"visible": false` para `"visible": true` para exibir uma seção, e vice-versa.

---

## 8. Enviar alterações para o GitHub (push)

Depois de fazer alterações (seja editando arquivos diretamente ou pelo CMS local), você precisa enviar as mudanças para o GitHub.

### Passo a passo no terminal

```bash
# 1. Ver quais arquivos foram alterados
git status

# 2. Adicionar todos os arquivos alterados
git add .

# 3. Criar um commit descrevendo o que foi feito
git commit -m "descrição do que você alterou"

# 4. Enviar para o GitHub
git push
```

**Exemplo:**
```bash
git add .
git commit -m "feat: adicionar novo post sobre React"
git push
```

> **Atenção:** Na primeira vez que fizer `git push`, o terminal pode pedir seu usuário e senha do GitHub. Use seu e-mail e um **Personal Access Token** (não a senha da conta). Veja como criar um token na seção [Criar Personal Access Token](#criar-personal-access-token).

### Usando GitHub Desktop (alternativa visual)

Se preferir não usar o terminal:

1. Abra o [GitHub Desktop](https://desktop.github.com/)
2. Na aba **Changes**, escreva uma mensagem no campo **Summary**
3. Clique em **Commit to main**
4. Clique em **Push origin**

---

## 9. Ativar o GitHub Pages (primeira vez)

Esta etapa só precisa ser feita **uma única vez**, ao configurar o repositório pela primeira vez.

### Passo a passo

1. Acesse o repositório no GitHub: `https://github.com/SEU_USUARIO/SEU_REPOSITORIO`
2. Clique em **Settings** (Configurações) na barra superior
3. No menu lateral esquerdo, clique em **Pages**
4. Em **Build and deployment**, configure:
   - **Source:** selecione `GitHub Actions`
5. Clique em **Save** (se aparecer)

Pronto. A partir de agora, toda vez que você fizer um `push` para a branch `main`, o site será publicado automaticamente.

> **Nota:** O repositório precisa ser **público** para o GitHub Pages funcionar gratuitamente. Se for privado, é necessário um plano pago do GitHub.

---

## 10. Colocar em produção

"Colocar em produção" significa atualizar o site público com suas alterações.

O processo é simples: **basta fazer um push para a branch `main`**.

```bash
git add .
git commit -m "sua mensagem"
git push
```

Após o push, o GitHub Actions vai:
1. Fazer o build do site automaticamente (leva cerca de 2 a 5 minutos)
2. Publicar o resultado no GitHub Pages

Você pode acompanhar o status do build em:
```
https://github.com/SEU_USUARIO/SEU_REPOSITORIO/actions
```

Quando aparecer um círculo verde ✅, o site já está no ar em `https://SEU_USUARIO.github.io`.

---

## 11. Editar o site em produção pelo CMS

Você pode editar o conteúdo do site diretamente pelo GitHub, sem precisar ter o projeto no seu computador.

### Criar Personal Access Token

Você vai precisar de um token do GitHub para autenticar no CMS. Faça isso **uma vez** e guarde o token em local seguro:

1. Acesse https://github.com/settings/tokens?type=beta
2. Clique em **Generate new token**
3. Dê um nome (ex: `CMS do meu site`)
4. Em **Repository access**, selecione **Only select repositories** e escolha o repositório do site
5. Em **Permissions → Repository permissions**, configure:
   - **Contents:** `Read and Write`
   - **Metadata:** `Read-only` (já vem marcado)
6. Clique em **Generate token**
7. **Copie o token** — ele só aparece uma vez!

### Acessar o CMS em produção

1. Acesse `https://SEU_USUARIO.github.io/admin/`
2. Clique em **"Sign in with GitHub"** ou **"GitHub"**
3. Cole o Personal Access Token quando solicitado
4. Pronto — você está no painel de administração conectado ao GitHub

As alterações feitas pelo CMS em produção são **commitadas diretamente no repositório**, o que dispara automaticamente o build e atualiza o site em poucos minutos.

---

## Resumo rápido

| O que fazer | Como fazer |
|---|---|
| Rodar localmente | `yarn dev` → abrir http://localhost:3600 |
| Editar pelo CMS local | `yarn dev` + `yarn cms` (2 terminais) → http://localhost:3600/admin/index.html |
| Publicar alterações | `git add . && git commit -m "msg" && git push` |
| Ver site publicado | https://SEU_USUARIO.github.io |
| Editar em produção | https://SEU_USUARIO.github.io/admin/ (com token do GitHub) |
| Acompanhar deploy | https://github.com/SEU_USUARIO/SEU_REPOSITORIO/actions |

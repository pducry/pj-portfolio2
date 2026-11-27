# Deploy para GitHub Pages com GitHub Actions

**Data:** 2026-04-22  
**Status:** Aprovado

## Objetivo

Publicar o portfólio no GitHub Pages. A produção deste repositório é `https://pducry.github.io/pj-portfolio2/`. O domínio `pedrojulien.com` não faz parte deste deploy.

## Contexto

- Projeto Next.js 16 com `output: "export"` já configurado em `next.config.ts`
- Build gera pasta `out/` com site estático
- Repositório: `https://github.com/pducry/pj-portfolio2`
- Domínio `pedrojulien.com` (o site editorial no ar hoje não é este repositório; ver estado atual abaixo)

## Estado atual (produção)

O site deste repositório está no ar em GitHub Pages, no path do projeto:

`https://pducry.github.io/pj-portfolio2/`

Exemplo: `https://pducry.github.io/pj-portfolio2/works/`

Configuração que precisa permanecer alinhada a essa URL:

| Arquivo | Estado |
|---------|--------|
| `next.config.ts` | `output: "export"`, `trailingSlash: true`, e em produção `basePath` `/pj-portfolio2` e `assetPrefix` `/pj-portfolio2/` |
| `public/CNAME` | Não existe, e não deve ser criado enquanto a produção for o path acima |
| `.github/workflows/deploy.yml` | Publica `out/` no GitHub Pages a cada push em `main` |

Um arquivo `public/CNAME` com `pedrojulien.com` faria o GitHub Pages assumir o domínio customizado e deixaria de servir o site em `/pj-portfolio2`. Isso só pode ser feito com OK explícito do Pedro. O que seria necessário para o domínio apontar para este build está no final deste documento.

## Arquitetura

### 1. GitHub Actions Workflow

Arquivo: `.github/workflows/deploy.yml`

- **Trigger:** push no branch `main`
- **Steps:**
  1. Checkout do repositório
  2. Setup Node.js 20
  3. `npm ci` — instala dependências
  4. `npm run build` — gera pasta `out/`
  5. Deploy do `out/` para GitHub Pages via action oficial `actions/deploy-pages`

### 2. Path do GitHub Pages

Não há `public/CNAME`. O `basePath` `/pj-portfolio2` faz rotas e assets resolverem em `https://pducry.github.io/pj-portfolio2/`.

### 3. Domínio customizado — não executar sem OK

`pedrojulien.com` e `www.pedrojulien.com` não são este deploy. Em 20 de novembro de 2026 o domínio responde pela Squarespace (título `PJ2025`; `www` em `ext-sq.squarespace.com`). Trocar isso é uma decisão do Pedro, fora deste repositório.

Para o build de `pj-portfolio2` aparecer em `pedrojulien.com`, seria preciso, com o OK dele:

1. Tirar o domínio da Squarespace.
2. No DNS, apontar o apex para os IPs do GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e `www` com `CNAME` para `pducry.github.io`.
3. Em `https://github.com/pducry/pj-portfolio2/settings/pages`, definir o custom domain `pedrojulien.com` (source continua GitHub Actions).
4. Só então criar `public/CNAME` com `pedrojulien.com` e remover `basePath` e `assetPrefix`. Com domínio customizado o GitHub Pages publica o projeto na raiz do domínio, não em `/pj-portfolio2`. Manter o `basePath` atual quebraria os assets em `pedrojulien.com`. Removê-lo antes da troca quebraria `https://pducry.github.io/pj-portfolio2/`.

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `.github/workflows/deploy.yml` | Criar |
| `public/CNAME` | Não criar enquanto a produção for `pducry.github.io/pj-portfolio2` |

## O que NÃO muda no deploy atual

- `next.config.ts` — `output: "export"`, `images.unoptimized: true`, e `basePath` `/pj-portfolio2` em produção
- `.github/workflows/deploy.yml` — já publica no GitHub Pages
- `public/CNAME` — continua ausente
- `package.json` — scripts existentes são suficientes

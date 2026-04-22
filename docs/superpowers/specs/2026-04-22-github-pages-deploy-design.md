# Deploy para GitHub Pages com GitHub Actions

**Data:** 2026-04-22  
**Status:** Aprovado

## Objetivo

Migrar a hospedagem do portfólio de Vercel para GitHub Pages, mantendo o domínio customizado `pedrojulien.com`.

## Contexto

- Projeto Next.js 16 com `output: "export"` já configurado em `next.config.ts`
- Build gera pasta `out/` com site estático
- Repositório: `https://github.com/pducry/pj-portfolio`
- Domínio atual: `pedrojulien.com` (registrado via Vercel)

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

### 2. Domínio Customizado

Arquivo: `public/CNAME`  
Conteúdo: `pedrojulien.com`

O arquivo `CNAME` fica em `public/` para ser copiado automaticamente para `out/` no build, garantindo que o GitHub Pages reconheça o domínio a cada deploy.

### 3. Configuração Manual (pós-deploy)

O usuário precisará fazer duas configurações externas:

**GitHub — Settings → Pages:**
- Source: **GitHub Actions**
- Custom domain: `pedrojulien.com`

**DNS do domínio:**
- 4 registros `A` apontando para os IPs do GitHub Pages:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- 1 registro `CNAME` para `www` → `pducry.github.io`

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `.github/workflows/deploy.yml` | Criar |
| `public/CNAME` | Criar |

## O que NÃO muda

- `next.config.ts` — já tem `output: "export"` e `images.unoptimized: true`
- Código do projeto — nenhuma alteração necessária
- `package.json` — scripts existentes são suficientes

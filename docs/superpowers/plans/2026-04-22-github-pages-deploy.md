# GitHub Pages Deploy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar hospedagem do portfólio de Vercel para GitHub Pages, com deploy automático via GitHub Actions e domínio customizado `pedrojulien.com`.

**Architecture:** Um workflow GitHub Actions faz build do Next.js estático e publica o `out/` no GitHub Pages a cada push no `main`. Um arquivo `CNAME` em `public/` garante que o domínio customizado seja preservado a cada deploy.

**Tech Stack:** Next.js 16 (static export), GitHub Actions, GitHub Pages

---

## File Structure

| Arquivo | Ação | Responsabilidade |
|---------|------|-----------------|
| `.github/workflows/deploy.yml` | Criar | Pipeline CI/CD: build + deploy para GitHub Pages |
| `public/CNAME` | Criar | Domínio customizado persistido no build |

---

### Task 1: Criar arquivo CNAME

**Files:**
- Create: `public/CNAME`

- [ ] **Step 1: Criar o arquivo**

Conteúdo exato (sem espaços, sem quebra de linha extra):

```
pedrojulien.com
```

Caminho: `public/CNAME`

- [ ] **Step 2: Verificar que o build inclui o arquivo**

```bash
npm run build
```

Verificar que `out/CNAME` existe:

```bash
ls out/CNAME
```

Saída esperada: `out/CNAME`

- [ ] **Step 3: Commit**

```bash
git add public/CNAME
git commit -m "feat: add CNAME for custom domain pedrojulien.com"
```

---

### Task 2: Criar GitHub Actions workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Criar diretório e arquivo**

```bash
mkdir -p .github/workflows
```

Criar `.github/workflows/deploy.yml` com o conteúdo abaixo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verificar sintaxe YAML**

```bash
npx js-yaml .github/workflows/deploy.yml
```

Saída esperada: objeto JSON sem erros (ou sem output de erro)

- [ ] **Step 3: Commit e push**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions workflow for GitHub Pages deploy"
git push origin main
```

---

### Task 3: Ativar GitHub Pages no repositório (manual)

Esta task requer ações no navegador — não pode ser automatizada.

- [ ] **Step 1: Acessar Settings do repositório**

Ir para: `https://github.com/pducry/pj-portfolio/settings/pages`

- [ ] **Step 2: Configurar Source**

Em **Build and deployment → Source**, selecionar **GitHub Actions**

- [ ] **Step 3: Verificar que o workflow rodou com sucesso**

Ir para: `https://github.com/pducry/pj-portfolio/actions`

Aguardar o workflow "Deploy to GitHub Pages" completar (verde).

- [ ] **Step 4: Verificar URL do GitHub Pages**

Após deploy, o site estará disponível em:
`https://pducry.github.io/pj-portfolio`

---

### Task 4: Atualizar DNS para pedrojulien.com (manual)

Esta task requer acesso ao painel do registrador do domínio.

- [ ] **Step 1: Acessar painel DNS do domínio**

O domínio `pedrojulien.com` foi registrado via Vercel. Acessar:
`https://vercel.com/dashboard/domains`

- [ ] **Step 2: Remover registros DNS atuais do Vercel**

Remover os registros A e CNAME que apontam para Vercel.

- [ ] **Step 3: Adicionar registros A do GitHub Pages**

Criar 4 registros `A` para o apex (`@`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

- [ ] **Step 4: Adicionar registro CNAME para www**

Criar registro `CNAME`:
```
www → pducry.github.io
```

- [ ] **Step 5: Configurar domínio no GitHub Pages**

Ir para: `https://github.com/pducry/pj-portfolio/settings/pages`

No campo **Custom domain**, digitar `pedrojulien.com` e salvar.

Aguardar verificação DNS (pode levar até 24h, geralmente minutos).

- [ ] **Step 6: Verificar site no domínio customizado**

Acessar `https://pedrojulien.com` e confirmar que o site carrega corretamente.

---

## Notas

- O domínio `goforacle.com` também está no Vercel — não alterar seus DNS, apenas os de `pedrojulien.com`
- Vercel pode ser desconectado do projeto `pj-portfolio` após confirmar que GitHub Pages está funcionando
- O workflow inclui `workflow_dispatch` para permitir deploy manual pela UI do GitHub

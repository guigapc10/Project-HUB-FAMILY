# HUB Família

Painel familiar com dados demonstrativos. A aplicação foi preparada para evoluir para uma arquitetura multi-família, com isolamento de dados por família quando a camada de backend for definida.

## Desenvolvimento

- Requisitos: Node.js 20+
- Instale dependências com `npm install`
- Inicie o ambiente com `npm run dev`
- Gere a versão de produção com `npm run build` (saída em `dist`)

## Cloudflare Pages

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

A aplicação atual usa somente dados fictícios no cliente. Não há conexão ao Supabase e nenhum segredo é necessário para esta demonstração. Pife aparece como atalho planejado e ainda não implementado.
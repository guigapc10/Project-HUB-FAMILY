# HUB Família

Painel familiar com dados demonstrativos. A aplicação foi preparada para evoluir para uma arquitetura multi-família, com isolamento de dados por família quando a camada de backend for definida.

## Desenvolvimento

- Requisitos: Node.js 20+
- Instale dependências com `npm install`
- Inicie o ambiente com `npm run dev`
- Gere a versão de produção com `npm run build` (saída em `dist`)

## Cloudflare Workers Builds

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Diretório de arquivos estáticos: `./dist`, definido em `wrangler.jsonc`

No fluxo Workers, o diretório de assets fica na configuração Wrangler; os campos Framework preset e Build output directory do Pages não são usados.

A aplicação usa somente dados fictícios no cliente. Não há conexão ao Supabase e nenhum segredo é necessário para esta demonstração. A tela de Pife é apenas conceitual; o jogo não foi implementado.

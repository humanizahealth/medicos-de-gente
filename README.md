# Médicos de Gente → Humaniza Health

Landing pública de transição do antigo projeto Médicos de Gente para a Humaniza Health.

## Papel

Este repositório guarda o site estático que explica a evolução: o cuidado nascido no território virou uma healthtech. A página não vende consulta, não agenda atendimento, não oferece WhatsApp e não funciona como checkout da IRIS.

## Stack

- Vite + React + TypeScript
- Tailwind CSS como camada utilitária
- CSS autoral em `src/styles.css`
- Framer Motion para motion e revelações
- Lucide React para ícones
- Deploy estático via Vercel, com saída em `dist/`

## Estrutura principal

- `src/App.tsx`: composição das seções.
- `src/components/`: componentes visuais da landing.
- `src/content/site.ts`: copy, navegação, links e blocos editoriais.
- `src/styles.css`: tokens, tema, layout e estados responsivos.
- `public/assets/mdg/`: imagens otimizadas da landing.
- `public/termos-uso.html` e `public/politica-privacidade.html`: páginas legais provisórias.

## Como rodar

```bash
npm ci
npm run dev
```

## Validação

Antes de abrir PR ou publicar:

```bash
npm run typecheck
npm run lint
npm run build
```

Para validação visual:

```bash
npm run preview
```

Validar desktop e mobile reais, especialmente `1440x1000`, `1280x800`, `430x932` e `390x844`.

## Contexto operacional

Leia também:

- `AGENTS.md`
- `CLAUDE.md`
- `MEMORY.md`
- `HANDOFF.md`

Para trabalho institucional, a Humaniza OS mantém contexto compartilhável. Para código e deploy, este repositório e o GitHub são a fonte operacional.

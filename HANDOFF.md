# HANDOFF — Médicos de Gente

_Última atualização: 2026-06-22 por Codex, após criação do pacote de contexto versionável._

## Estado atual

Este repositório contém a landing de transição **Médicos de Gente → Humaniza Health**.

Linha verificada antes desta atualização:

- Branch base: `main`.
- Remote: `https://github.com/humanizahealth/medicos-de-gente.git`.
- `origin/main`: `adba2f1 chore: remove legacy landing page (#4)`.
- Divergência local/remoto no início da sessão: `0 0`.
- Branch de trabalho criada: `docs/context-package-2026-06-22`.
- PRs abertos no momento da checagem: nenhum retornado por `gh pr list --state open`.
- PR criado: https://github.com/humanizahealth/medicos-de-gente/pull/5 (`draft`).

## Mudança em andamento

Criado pacote de contexto versionável na raiz:

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `MEMORY.md`
- `HANDOFF.md`

Também removida a regra que ignorava `HANDOFF.md` em `.gitignore`, para que o handoff passe a ser fonte versionada do repo.

## Regras vivas

- Não vender consulta, agenda, WhatsApp, atendimento domiciliar ativo ou checkout.
- Manter a narrativa: "Médicos de Gente foi o começo. Humaniza Health é o próximo capítulo."
- Imagens com pessoas identificáveis exigem validação humana de consentimento, ética e publicidade médica antes de publicação.
- Termos e privacidade em `public/` são provisórios até revisão jurídica/LGPD.
- Não reintroduzir o legado removido em `landing_page/` sem decisão explícita.
- Trabalhar por branch curta e PR; não fazer push direto para `main`.

## Validação necessária

Validação da mudança documental nesta sessão:

```bash
npm run typecheck # passou
npm run lint      # passou
npm run build     # passou
```

Para mudanças visuais ou de conteúdo público, acrescentar validação em preview com desktop/mobile:

- `1440x1000`
- `1280x800`
- `430x932`
- `390x844`

## Próximo passo

1. Revisar o PR #5.
2. Se o contrato estiver aprovado, marcar o PR como ready for review ou mergear conforme governança do repo.
3. Após merge, orientar Pedro/Codex a usar `README.md`, `AGENTS.md`, `CLAUDE.md`, `MEMORY.md` e este `HANDOFF.md` como pacote canônico do repo.

## Ponteiros

- Contexto institucional: Humaniza OS `08. Prompts e Handoffs/2026-06-22 - Contexto Codex Pedro - Websites Humaniza Health e Medicos de Gente.md`.
- PR do pacote de contexto: https://github.com/humanizahealth/medicos-de-gente/pull/5
- Site institucional relacionado: `https://humaniza.health`.
- Conteúdo e links da landing: `src/content/site.ts`.

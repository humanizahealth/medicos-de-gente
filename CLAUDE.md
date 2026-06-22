# Médicos de Gente — Contrato Operacional

Contrato para agentes trabalhando no repositório `humanizahealth/medicos-de-gente`.

`AGENTS.md` e `CLAUDE.md` devem manter paridade operacional integral. Qualquer mudança operacional feita em um deve ser refletida no outro no mesmo turno.

## Identidade

Este repo contém a landing de transição **Médicos de Gente → Humaniza Health**.

A narrativa correta é: Médicos de Gente foi o começo; Humaniza Health é o próximo capítulo. A página preserva memória, vínculo e legitimidade, mas aponta para a nova fase de tecnologia clínica da Humaniza Health.

## Fonte de verdade

1. GitHub remoto e branch atual para código, histórico, PRs e deploy.
2. `README.md`, este contrato e `HANDOFF.md` para operação do repo.
3. Humaniza OS para contexto institucional compartilhável.
4. Cowork OS dos sócios apenas como espaço pessoal de retomada e preparação.

Se houver divergência, conferir primeiro o GitHub/remoto. Arquivos locais ignorados ou não versionados são apoio, não contrato canônico.

## Abertura de sessão

Antes de editar:

```bash
git status --short --branch
git fetch --all --prune
git status --short --branch
git branch -vv
git log --oneline --decorate -5 origin/main
```

Também checar PRs abertos com `gh pr list --state open`. Se `gh` não estiver instalado, usar GitHub web, GitHub Desktop ou checagem equivalente e registrar a limitação no handoff/PR.

Se a branch local estiver atrás e limpa, atualizar com `git pull --ff-only`. Se houver mudanças locais, commits não enviados ou divergência, não sobrescrever; classificar o estado e definir estratégia antes de seguir.

## Branch e PR

- `main` é a linha de produção.
- Não fazer push direto para `main`.
- Usar branch curta para qualquer mudança.
- Abrir PR revisável antes de mergear.
- Não reaproveitar branch antiga em bloco; portar apenas hunks revisados contra `origin/main`.

## Comandos de validação

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

Para validação visual:

```bash
npm run preview
```

Validar pelo menos:

- desktop `1440x1000`;
- laptop `1280x800`;
- mobile `430x932`;
- mobile estreito `390x844`;
- console sem erros;
- sem overflow horizontal;
- CTAs cabendo no mobile;
- menu mobile abre/fecha sem cobrir conteúdo indevidamente;
- tema claro/escuro quando a mudança tocar tema.

## Regras de produto e conteúdo

- Não vender consulta.
- Não abrir WhatsApp.
- Não sugerir agenda ativa.
- Não transformar Médicos de Gente em checkout disfarçado da IRIS.
- Não prometer atendimento domiciliar ativo.
- Não apontar CTA para ambiente staging ou não aprovado.
- Manter a voz sóbria, médica, brasileira e responsável.
- Links para `humaniza.health`, `humaniza.dev` e Instagram devem ser confirmados antes de deploy.

## Ética, LGPD e publicação

- Imagens com pessoas identificáveis exigem validação humana de consentimento, ética e publicidade médica antes de publicação.
- `public/termos-uso.html` e `public/politica-privacidade.html` são provisórios enquanto não houver revisão jurídica/LGPD.
- Se houver formulário, analytics, cookies, pixel, lead capture ou retargeting, a política de privacidade deve ser revisada antes de publicar.
- Não registrar segredos, tokens, credenciais, dados clínicos sensíveis ou dados pessoais desnecessários em Markdown.

## Arquitetura

- `src/content/site.ts` concentra copy, navegação, links e blocos editoriais.
- `src/components/` concentra a UI por seção.
- `src/styles.css` concentra tokens, temas, responsividade e estados visuais.
- `public/assets/mdg/` guarda assets públicos otimizados.
- Evitar HTML livre em componentes quando dados estruturados bastam.
- Preferir lucide-react para ícones já existentes.
- Não reintroduzir o legado removido em `landing_page/` sem decisão explícita.

## Handoff e memória

- `HANDOFF.md` guarda estado in-flight: branch, PR, validações, bloqueios e próximo passo.
- Atualizar `HANDOFF.md` quando uma sessão deixar trabalho pendente, PR aberto, deploy não validado ou decisão humana necessária.
- `MEMORY.md` é memória persistente do repo e só deve receber entradas sob gatilho explícito humano.
- Decisões duráveis relevantes para a empresa devem ser refletidas na Humaniza OS com o menor artefato suficiente.

## Critério de saída

Ao encerrar uma tarefa, reportar:

- branch atual;
- arquivos alterados;
- validações rodadas;
- validações não rodadas e motivo;
- riscos ou pendências humanas;
- estado de PR/deploy;
- se o `HANDOFF.md` foi atualizado;
- se houve contexto institucional para sincronizar com a Humaniza OS.

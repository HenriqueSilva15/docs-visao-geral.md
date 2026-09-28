# Sistema de Gestão de Torneios

Incremento da **Sprint 3 — Modelagem e rastreabilidade dos requisitos**.

## Estrutura

```
docs/modelagem/modelagem.md              -> documento principal da Sprint 3
docs/modelagem/diagramas/*.mmd           -> arquivos-fonte dos diagramas (Mermaid)
src/models/Team.js, Match.js             -> modelo estrutural implementado
src/services/TournamentService.js        -> regras de negócio (RF-01 a RF-05, RNF-03)
src/index.js                             -> demonstração do fluxo de US-01
test/tournamentService.test.js           -> testes automatizados (evidência modelo <-> código)
```

## Sobre este incremento

Por decisão de escopo desta sprint, as classes (`Team`, `Match`,
`TournamentService`) implementam **apenas atributos e associações**,
coerentes com o diagrama de classes. Os métodos e as regras de negócio
(RF-03, RF-04, RF-05, RNF-03) ainda não estão implementados — ficam para o
próximo incremento (ver backlog em `modelagem.md`).

## Como rodar

Requer apenas Node.js (>= 18), sem dependências externas.

```bash
npm start   # instancia as classes e mostra a estrutura de dados (sem regras ainda)
npm test    # valida os atributos e as associações entre as classes
```

## Sobre os diagramas

Os diagramas estão escritos em Mermaid (`.mmd`) e também embutidos dentro de
`docs/modelagem/modelagem.md` em blocos ```mermaid```, que o GitHub renderiza
nativamente como imagem ao visualizar o arquivo no repositório — não é
necessário nenhum link externo. Se quiser exportar PNG/SVG estáticos, use o
[Mermaid Live Editor](https://mermaid.live) ou `@mermaid-js/mermaid-cli`
localmente e salve o resultado em `docs/modelagem/diagramas/`.

## Publicando esta sprint no GitHub

```bash
git add .
git commit -m "Sprint 3: modelagem e rastreabilidade dos requisitos"
git tag sprint-03
git push origin main --tags
```

Lembre-se de linkar, nas Issues/commits, os requisitos (RF-XX/RNF-XX)
tratados, seguindo a matriz em `docs/modelagem/modelagem.md`.

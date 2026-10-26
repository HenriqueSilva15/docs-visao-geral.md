# Padrões de Projeto - Aplicação no Código

## 1. Descrição do Problema Concreto
No Sistema de Gestão de Torneios Esportivos Amadores, o cálculo de classificação precisa suportardiferentes regras dependendo do regulamento 
(ex: pontos corridos no futebol vs. outros critérios). Manter tudo em uma única classe com \`if/else\` deixa o código rígido.

## 2. Padrão Adotado e Justificativa 
Padrão:Strategy (GoF - Comportamental).
Justificativa: Permite isolar os algoritmos de cálculo de pontuação em classes separadas, facilitando a inclusão de novas modalidades sem alterar 
o código existente (Princípio Aberto/Fechado - OCP).

## 3. Representação e Participantes
Contexto: TabelaClassificacaoService
Interface Strategy:CriterioClassificacaoStrategy
Estratégias Concretas:PontosCorridosFutebolStrategy SaldoGolsStrategy

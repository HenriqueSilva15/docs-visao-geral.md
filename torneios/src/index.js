const Team = require('./models/Team');
const Match = require('./models/Match');
const TournamentService = require('./services/TournamentService');

// Este incremento só monta a estrutura de dados (atributos e associações).
// Os métodos de regra de negócio (RF-03, RF-04, RNF-03 etc.) ficam para o
// próximo incremento — ver docs/modelagem/modelagem.md.

const timeA = new Team('1', 'Time A');
const timeB = new Team('2', 'Time B');
const timeC = new Team('3', 'Time C');

const partida1 = new Match('1', timeA, timeB, '2026-10-01', '16:00');
const partida2 = new Match('2', timeB, timeC, '2026-10-02', '18:00');

const torneio = new TournamentService();
[timeA, timeB, timeC].forEach((team) => torneio.teams.set(team.id, team));
[partida1, partida2].forEach((match) => torneio.matches.set(match.id, match));

console.log('Equipes (apenas atributos, sem estatísticas calculadas ainda):');
console.table([...torneio.teams.values()]);

console.log('\nPartidas agendadas (apenas atributos, sem placar lançado ainda):');
console.table(
  [...torneio.matches.values()].map((m) => ({
    id: m.id,
    mandante: m.homeTeam.name,
    visitante: m.awayTeam.name,
    data: m.date,
    hora: m.time,
    status: m.status,
  }))
);

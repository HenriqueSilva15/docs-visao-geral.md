const assert = require('node:assert');
const Team = require('../src/models/Team');
const Match = require('../src/models/Match');
const TournamentService = require('../src/services/TournamentService');

// Estes testes verificam apenas a ESTRUTURA (atributos e associações), que é
// o que este incremento implementa. Testes de regra de negócio (pontuação,
// saldo de gols, permissões etc.) ficam para o incremento em que os métodos
// forem implementados.

function run(name, fn) {
  fn();
  console.log(`✔ ${name}`);
}

run('Team é criado com os atributos e valores iniciais do modelo de classes', () => {
  const team = new Team('1', 'Time A');
  assert.strictEqual(team.id, '1');
  assert.strictEqual(team.name, 'Time A');
  assert.strictEqual(team.played, 0);
  assert.strictEqual(team.wins, 0);
  assert.strictEqual(team.draws, 0);
  assert.strictEqual(team.losses, 0);
  assert.strictEqual(team.goalsFor, 0);
  assert.strictEqual(team.goalsAgainst, 0);
  assert.strictEqual(team.goalDifference, 0);
  assert.strictEqual(team.points, 0);
});

run('Match referencia duas equipes distintas (associação 1 -- 2 do modelo)', () => {
  const teamA = new Team('1', 'Time A');
  const teamB = new Team('2', 'Time B');
  const match = new Match('1', teamA, teamB, '2026-10-01', '16:00');

  assert.strictEqual(match.homeTeam, teamA);
  assert.strictEqual(match.awayTeam, teamB);
  assert.strictEqual(match.status, 'scheduled');
  assert.strictEqual(match.homeScore, null);
  assert.strictEqual(match.awayScore, null);
});

run('TournamentService agrega equipes e partidas (associação 1 -- * do modelo)', () => {
  const service = new TournamentService();
  const teamA = new Team('1', 'Time A');
  const match = new Match('1', teamA, new Team('2', 'Time B'), '2026-10-01', '16:00');

  service.teams.set(teamA.id, teamA);
  service.matches.set(match.id, match);

  assert.strictEqual(service.teams.get('1'), teamA);
  assert.strictEqual(service.matches.get('1'), match);
  assert.strictEqual(service.teams.size, 1);
  assert.strictEqual(service.matches.size, 1);
});

console.log('\nTodos os testes passaram.');

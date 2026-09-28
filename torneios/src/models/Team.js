class Team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.played = 0;
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.goalDifference = 0;
    this.points = 0;
  }
}

module.exports = Team;

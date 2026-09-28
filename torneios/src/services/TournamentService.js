class TournamentService {
  constructor() {
    this.teams = new Map();
    this.matches = new Map();
    this._nextTeamId = 1;
    this._nextMatchId = 1;
  }
}

module.exports = TournamentService;

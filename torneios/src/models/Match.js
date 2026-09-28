class Match {
  constructor(id, homeTeam, awayTeam, date, time) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.date = date;
    this.time = time;
    this.homeScore = null;
    this.awayScore = null;
    this.status = 'scheduled'; // 'scheduled' | 'finished'
  }
}

module.exports = Match;

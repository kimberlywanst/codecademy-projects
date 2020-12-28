const team = {
    _players: [
      {
        firstName: "Pablo",
        lastName: "Rodriguez",
        age: 20,
      },
      {
        firstName: "Michael",
        lastName: "Thompson",
        age: 22,
      },
      {
        firstName: "Tim",
        lastName: "McCain",
        age: 23,
      },
    ],

    _games: [
      {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
      },
      {
        opponent: "Eagles",
        teamPoints: 25,
        opponentPoints: 35,
      },
      {
        opponent: "Buffalos",
        teamPoints: 12,
        opponentPoints: 40,
      },
    ],

    get players() {
      return this._players;
    },

    get games() {
      return this._games;
    },

    addPlayer(fName, lName, age) {
      var player = {
        firstName: fName,
        lastName: lName,
        age: age,
      };

      this.players.push(player);
    },

    addGame(opp, teamPts, oppPts) {
      var game = {
        opponent: opp,
        teamPoints: teamPts,
        opponentPoints: oppPts,
      };

      this.games.push(game);
    },

};

team.addPlayer("Bugs", "Bunny", 70);
console.log(team._players);

team.addGame("Lions", 39, 43);
console.log(team._games);
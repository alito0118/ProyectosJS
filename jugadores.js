const team = {
    _players: [{firstName: "Luka", lastName:"Martin", age: 23},{firstName: "Equiel", lastName:"Martinez", age: 26},{firstName: "Luna", lastName:"Insker", age: 21}
    ],
  
    _games: [{opponent: "Luka",teamPoints: 44, opponentPoints: 32},{opponent:"Iker",teamPoints: 33, opponentPoints: 32},{opponent:"Martin",teamPoints: 22, opponentPoints: 25}],
  
    getPlayers(){
      return this._players;
    },
  
    getGames(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      if(typeof newFirstName === "string" && typeof newLastName === "string" && typeof newAge === "number"){
        this._players.push({ firstName: newFirstName,
        lastName: newLastName,
        age: newAge})
    }},
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      if( typeof newOpponent === "string" && typeof newTeamPoints === "number" && typeof newOpponentPoints === "number"){
        this._games.push({
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        })
      }
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 90);
  
  console.log(team._players);
  console.log(team._games);
  
let GameManager = {
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
  },

  //switch function in order to set the stats for specific character
  resetPlayer: function(classType){
    switch (classType) {
      case 'Warrior':
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case 'Rogue':
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case 'Mage':
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case 'Hunter':
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }

// the way to replace the HTML code with the player stats
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
    '<img src ="img/avatar-player/' + classType.toLowerCase() +'.png" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },

  // adding the addtional text after selection the character
  setPreFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    getHeader.innerHTML = '<p>Task: Find an enemy!</p>'
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
    getArena.style.visibility = "visible";
  }
}

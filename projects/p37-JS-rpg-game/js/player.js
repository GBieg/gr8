// player stats
let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

//player PlayerMoves

let PlayerMoves = {
  calcAttack: function() {
    // who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    // Player attacks
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      // number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;

      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;

    }
    // Enemy attacks
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      // number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;

      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // get health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //initiate attacks
    // player attack first
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttacksValues = playerAttack();
      let totalDamage = playerAttacksValues[0] * playerAttacksValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttacksValues[0] + " damage " + playerAttacksValues[1] + " times.");
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

        // enemy attacks second
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("Game Over - refresh the browser to play again.");
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
          getPlayerHealth.innerHTML = 'Health: 0';
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }

      // enemy attacks first
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttacksValues = enemyAttack();
      let totalDamage = enemyAttacksValues[0] * enemyAttacksValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttacksValues[0] + " damage " + enemyAttacksValues[1] + " times.");
      if (player.health <= 0) {
        alert("Game Over - refresh the browser to play again.");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;

        // player attacks
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0) {
          alert("You win! Refresh browser to play again.");
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
          getEnemyHealth.innerHTML = 'Health: 0';
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }
}

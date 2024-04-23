var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
   
    //creates repeated function for SawBlade
    function createSawBlade( x,y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone); //add the saw blade image 
    var obstacleImage = draw.bitmap("img/truck.png"); //add the saw blade image 
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -110;
    obstacleImage.y = -250;
    sawBladeHitZone.rotationaVelocity = 0;
    obstacleImage.scaleX = 0.4
    obstacleImage.scaleY= 0.4
   }
   //Creates car 
   function createSawBlade1( x,y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBlade1HitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBlade1HitZone.x = x;
    sawBlade1HitZone.y = y;
    game.addGameItem(sawBlade1HitZone); //add the saw blade image 
    var obstacleImage = draw.bitmap("img/Car.png");
    sawBlade1HitZone.addChild(obstacleImage);
    obstacleImage.x = -72;
    obstacleImage.y = -30
    ;
    sawBlade1HitZone.rotationaVelocity = 0;
    obstacleImage.scaleX = 0.4
    obstacleImage.scaleY= 0.4
   }
   //Creates car 
   function createSawBlade2( x,y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBlade2HitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBlade2HitZone.x = x;
    sawBlade2HitZone.y = y;
    game.addGameItem(sawBlade2HitZone); //add the saw blade image 
    var obstacleImage = draw.bitmap("img/pipe.png"); //add the saw blade image 
    sawBlade2HitZone.addChild(obstacleImage);
    obstacleImage.x = -58;
    obstacleImage.y = -38
    ;
    sawBlade2HitZone.rotationaVelocity = 0;
    obstacleImage.scaleX = 0.15
    obstacleImage.scaleY= 0.15
   }
   
   //Code for Bowswer Enemy 
  function createEnemy (){
   var enemy = game.createGameItem("enemy", 25);
   var redSquare = draw.bitmap("img/bowser(2).png"); //creates bowser image
   redSquare.x = -25;
   redSquare.y = -25;
   enemy.addChild(redSquare);
   enemy.x = 400;
   enemy.y = groundY - 50;
   game.addGameItem(enemy);
   enemy.velocityX = -3;
   redSquare.scaleX = 0.25; //changes size of enemy
   redSquare.scaleY = 0.25;

   enemy.onPlayerCollision = function () {
    game.changeIntegrity(-10);
   };

   enemy.onProjectileCollision = function (){
    game.increaseScore(100);
    enemy.fadeOut();
    //enemy.shrink();
    //enemy.flyTo(0,0);
   }
    
   }//Code for Pacman Enemy
   function createEnemy1 (){
    var enemy1 = game.createGameItem("enemy1", 25);
    var redSquare = draw.bitmap("img/pacman.png"); //created pacman image
    redSquare.x = -230; // x-axis for where enemey is placed 
    redSquare.y = -55;  // y-axis for where enemey is placed 
    enemy1.addChild(redSquare);
    enemy1.x = 2000;
    enemy1.y = groundY - 50;
    game.addGameItem(enemy1);
    enemy1.velocityX = -3;
    redSquare.scaleX = 0.5; //changes size of enemy
    redSquare.scaleY = 0.5; //changes size of enemy
 
    enemy1.onPlayerCollision = function () {
     game.changeIntegrity(-10);
    };
 
    enemy1.onProjectileCollision = function (){
     game.increaseScore(300);
     enemy1.fadeOut();
     //enemy.shrink();
     //enemy.flyTo(0,0);
    }
     
    } // Bowswer part2
    function createEnemy2 (){
      var enemy2 = game.createGameItem("enemy2", 25);
      var redSquare = draw.bitmap("img/bowser(2).png"); //created pacman image
      redSquare.x = -60; // x-axis for where enemey is placed 
      redSquare.y = -55;  // y-axis for where enemey is placed 
      enemy2.addChild(redSquare);
      enemy2.x = 1500;
      enemy2.y = groundY - 50;
      game.addGameItem(enemy2);
      enemy2.velocityX = -3;
      redSquare.scaleX = 0.25; //changes size of enemy
      redSquare.scaleY = 0.25; //changes size of enemy
   
      enemy2.onPlayerCollision = function () {
       game.changeIntegrity(-10);
      };
   
      enemy2.onProjectileCollision = function (){
       game.increaseScore(300);
       enemy2.fadeOut();
       //enemy.shrink();
       //enemy.flyTo(0,0);
      }
       
      }
  

   // Reward Code 
function createReward(x,y){
  var reward = game.createGameItem("reward", 25);
   var yellowSquare = draw.bitmap("img/coin.png"); //creates coin image 
   yellowSquare.x = -39;
   yellowSquare.y = -39;
   reward.addChild(yellowSquare);
   reward.x = x;
   reward.y = y;
   game.addGameItem(reward);
   reward.velocityX = -3;
   yellowSquare.scaleX= 0.2 //changes size of reward
   yellowSquare.scaleY= 0.2
   
   reward.onPlayerCollision = function () {
    game.changeIntegrity(10);
    reward.fadeOut();
   };

   
}
function createReward1(x,y){
  var reward1 = game.createGameItem("reward1", 25);
   var yellowSquare = draw.bitmap("img/apple.png"); //creates coin image 
   yellowSquare.x = -41;
   yellowSquare.y = -39;
   reward1.addChild(yellowSquare);
   reward1.x = x;
   reward1.y = y;
   game.addGameItem(reward1);
   reward1.velocityX = -3;
   yellowSquare.scaleX= 0.05 //changes size of reward
   yellowSquare.scaleY= 0.05
   
   reward1.onPlayerCollision = function () {
    game.changeIntegrity(10);
    reward1.fadeOut();
   };

   
}
  
function createMarker(x,y){
  var marker = game.createGameItem("marker", 25);
   var greenSquare = draw.bitmap("img/level.png");
   greenSquare.x = -25;
   greenSquare.y = -25;
   marker.addChild(greenSquare);
   marker.x = x;
   marker.y = y;
   game.addGameItem(marker);
   marker.velocityX = -3;
   greenSquare.scaleX = 0.1
   greenSquare.scaleY = 0.1
   
   marker.onPlayerCollision = function () {
    game.changeIntegrity(10);
  startLevel();
  };
}
  
    
    
   function startLevel() {
      // TODO 13 goes below here
     var level= levelData[currentLevel];
     var levelObjects = level.gameItems;
     for (var i = 0; i < levelObjects.length; i++){
       var element = levelObjects[i];
       if (element.type === "sawblade"){
        createSawBlade(element.x, element.y, element.damage)
       }
       if (element.type === "sawblade1"){
        createSawBlade1(element.x, element.y, element.damage)
       }
       if (element.type === "sawblade2"){
        createSawBlade2(element.x, element.y, element.damage)  //Loops to make code work
       }
        if (element.type === "enemy"){
        createEnemy(element.x, element.y)
       }
       if (element.type === "enemy2"){
        createEnemy2(element.x, element.y)
       }
       if (element.type === "enemy1"){
        createEnemy1(element.x, element.y)
       }
    
       if (element.type === "reward"){
        createReward(element.x, element.y)
       }
       if (element.type === "reward1"){
        createReward1(element.x, element.y)
       }
       if (element.type === "marker"){
        createMarker(element.x, element.y)
       } 
     }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

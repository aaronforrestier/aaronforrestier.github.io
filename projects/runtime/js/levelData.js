var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY-120, damage:30},
          { type: "sawblade", x: 1000, y: groundY-120, damage:30},
          { type: "sawblade", x: 1800, y: groundY-120, damage:30 },
          { type: "sawblade", x: 2300, y: groundY-120, damage:30 },
          { type: "sawblade1", x: 2800, y: groundY-30, damage:30 },
          { type: "sawblade1", x: 3000, y: groundY-30, damage:30 },
          { type: "sawblade1", x: 3200, y: groundY-30, damage:30 },
          { type: "sawblade1", x: 3400, y: groundY-30, damage:30 },
          { type: "sawblade1", x: 3600, y: groundY-30, damage:30 },
          { type: "enemy", x: 200, y: groundY-50, damage: 40 }, // creates bowser
          
          { type: "enemy1", x: 900, y: groundY-50, damage: 40 },
          { type: "reward", x:  900, y: groundY-100 },
          { type: "reward", x:  4000, y: groundY-100 },
          { type: "reward", x:  4300, y: groundY-100 },
          { type: "reward", x:  4500, y: groundY-100 },
          { type: "reward", x:  5100, y: groundY-100 },
      
          { type: "marker", x: 5600, y: groundY-120 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY-120, damage: 60 }, //creates trucks 
          { type: "sawblade", x: 900, y: groundY-120, damage: 60 },
          { type: "sawblade", x: 1300, y: groundY-120, damage: 60  },
          { type: "sawblade1", x: 1600, y: groundY-110, damage: 60 },// creates car 
          { type: "sawblade2", x: 1900, y: groundY-30, damage: 60 },
          { type: "sawblade2", x: 2100, y: groundY-30, damage: 60 },
          { type: "sawblade2", x: 2300, y: groundY-30, damage: 60 },
          { type: "reward1", x:  600, y: groundY-100 }, //creates apple rewards
          { type: "reward1", x:  2900, y: groundY-100 },
          { type: "reward1", x:  3100, y: groundY-100 }, 
          { type: "reward1", x:  3300, y: groundY-100 },
          { type: "enemy1", x: 3200, y: groundY-50, damage: 50 }, // creates pacman
          { type: "enemy1", x: 3800, y: groundY-50, damage: 50 }, 
          { type: "enemy2", x: 1500, y: groundY-50, damage: 50 }, // creates bowser
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}

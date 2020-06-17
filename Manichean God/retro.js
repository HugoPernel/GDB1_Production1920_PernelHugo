

var config = {
  width: 1080,
  height: 1920,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
          }
    },
    scene: [Scene1,Scene6, Scene7, Scene2, Scene3, Scene4, Scene5, Scene8, Scene9]
  }


var game = new Phaser.Game(config);

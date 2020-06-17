var fElDorado;
var ame;
var siege;
var siege2;
var siege3;
var siege4;
var siege5;
var pointer;
var ameP;
var gameObject;
var soul;
var euphori;
var main;

class Scene7 extends Phaser.Scene {
  constructor() {
    super("sept");
  };


  init (){








  };

  preload (){

    this.load.image('fElDorado', 'assets/fond el dorado.jpg');

    this.load.image('ame', 'assets/ame.png');

    this.load.spritesheet('main','assets/mainDeDieu.png',
            { frameWidth: 1080, frameHeight: 1920 }
        );









  };

  create (){

    pointer = this.input.activePointer;


    fElDorado = this.add.image(540,960, "fElDorado");

    ame = this.physics.add.image(855,1440, "ame");
    ame.visible = true;

    siege = this.physics.add.image(500,1000, "ame");
    siege.visible = false;
    siege.setScale(8);

    main = this.physics.add.sprite(550, 1000, 'main');
    main.visible = false;
    this.anims.create({
        key: 'main_move',
        frames: this.anims.generateFrameNumbers('main', { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
    });

    this.gagnePerduText = this.add.text(500,900, 'GOD DAMN IT', { fontSize: '100px', fill: 'black' });
    this.gagnePerduText.setOrigin(0.5);
    this.gagnePerduText.visible = false;

    this.soulText = this.add.text(500,1050,soul + ' Souls', { fontSize: '100px', fill: 'black' });
    this.soulText.setOrigin(0.5);
    this.soulText.visible = false;

    this.exaltationText = this.add.text(10,1150,'Exaltation of God x '+ euphori , { fontSize: '77px', fill: 'black' });
    this.exaltationText.visible = false;

    this.soulScoreText = this.add.text(275,50,'Souls ' + soul, { fontSize: '40px', fill: 'black' });
    this.soulScoreText.setOrigin(1);
    this.soulScoreText.visible = true;

    this.EoGText = this.add.text(860,12,'EoG x '+ euphori , { fontSize: '40px', fill: 'black' });
    this.EoGText.visible = true;

    this.physics.add.overlap(ame, siege, this.assoire, null, this);
    this.physics.add.overlap(ame, gameObject, this.toucher, null, this);

    this.physics.world.setBoundsCollision();

    this.amePs = this.physics.add.group();

    this.input.on('gameobjectdown', this.parler, this);

    var maxObjects = 6;
    for (var i = 0; i <= maxObjects; i++) {
    ameP = this.physics.add.image(16, 16, "ame");
    this.amePs.add(ame);

    ameP.setRandomPosition(0, 0, game.config.width, 700);
    ameP.setInteractive();
    ameP.setVelocity(250, 250);
    ameP.setCollideWorldBounds(true);
    ameP.setBounce(1);
    ameP.visible = true;
  };




    };

    update (){




    }

    assoire(ame, siege){
    if (pointer.isDown && pointer.y < 1600 && pointer.y > 1300 && pointer.x < 1000 && pointer.x > 700){
      ame.y =1440;
      ame.x =855;
    }
    else if (pointer.isDown && pointer.y < 1200 && pointer.y > 900 && pointer.x < 300 && pointer.x > 0){
      ame.y =1000;
      ame.x =150;
    }
    else if (pointer.isDown && pointer.y < 450 && pointer.y > 150 && pointer.x < 400 && pointer.x > 100){
      ame.y =225;
      ame.x =250;
    }
    else if (pointer.isDown && pointer.y < 350 && pointer.y > 50 && pointer.x < 900 && pointer.x > 600){
      ame.y =125;
      ame.x =775;
    }
    else if (pointer.isDown && pointer.y < 850 && pointer.y > 550 && pointer.x < 700 && pointer.x > 400){
      ame.y =625;
      ame.x =525;
    }


  };

  parler(pointer, gameObject) {
gameObject.destroy();
ame.x = gameObject.x;
ame.y = gameObject.y;

this.exaltationText.setText('Exaltation of God x '+euphori)
this.exaltationText.visible = true;
this.gagnePerduText.setText('GOD DAMN RIGHT');
this.gagnePerduText.visible = true;
this.soulText.setText(soul + ' Souls');
this.soulText.visible = true;
    this.time.addEvent({
delay: 15000,
callback: ()=>{

    soul += 1000 * euphori;
    euphori += 0.1;

    },
loop: false
});


};
toucher(ame, gameObject){
  ame.visible = false;
}

    };

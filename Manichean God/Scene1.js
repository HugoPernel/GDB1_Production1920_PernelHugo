var fnebuleuse;
var galaxieD;
var galaxieG;
var ame;
var ame1;
var ame2;
var ame3;
var etoile;
var allerH;
var allerB;
var speed;
var tour = 0;
var pointer;
var randomX;
var soul = 10000;
var euphori = 1.1;
var main;

class Scene1 extends Phaser.Scene {
  constructor() {
    super("un");
  };


  init (){








  };

  preload (){

    this.load.image('fNebuleuse', 'assets/fond nebuleuse.jpg');

    this.load.image('ame', 'assets/ame.png');

    this.load.image('etoile', 'assets/Etoile Filante.png');

    this.load.spritesheet('main','assets/mainDeDieu.png',
            { frameWidth: 1080, frameHeight: 1920 }
        );





  };

  create (){



    pointer = this.input.activePointer;


    fnebuleuse = this.add.image(540,960, "fNebuleuse");


    galaxieD = this.physics.add.image(840,1020, "ame");
    galaxieD.visible = false;
    galaxieD.setScale(2.5);


    galaxieG = this.physics.add.image(240,1350, "ame");
    galaxieG.visible = false;
    galaxieG.setScale(2.5);

    allerH = this.physics.add.image(550,400, "ame");
    allerH.visible = false;
    allerH.setScale(5);

    allerB = this.physics.add.image(550,1950, "ame");
    allerB.visible = false;
    allerB.setScale(5);

    ame = this.physics.add.image(550,200, "ame");
    ame.visible = true;

    ame1 = this.physics.add.image(700,75, "ame");
    ame1.visible = true;
    ame1.setScale(0.5);


    ame2 = this.physics.add.image(800,200, "ame");
    ame2.visible = true;
    ame2.setScale(0.5);

    ame3 = this.physics.add.image(900,325, "ame");
    ame3.visible = true;
    ame3.setScale(0.5);

    etoile = this.physics.add.image(600,1700, "etoile");
    etoile.visible = true;

    this.physics.add.overlap(etoile, galaxieD, this.deplaceDroite, null, this);
    this.physics.add.overlap(etoile, galaxieG, this.deplaceGauche, null, this);

    this.physics.add.overlap(ame, allerH, this.bougerH, null, this);
    this.physics.add.overlap(ame, allerB, this.bougerB, null, this);

    this.physics.add.overlap(ame1, etoile, this.tuerA1, null, this);
    this.physics.add.overlap(ame2, etoile, this.tuerA2, null, this);
    this.physics.add.overlap(ame3, etoile, this.tuerA3, null, this);

    this.physics.add.overlap(ame, etoile, this.tuerA, null, this);

    main = this.physics.add.sprite(550, 1000, 'main');
    main.visible = false;
    this.anims.create({
        key: 'main_move',
        frames: this.anims.generateFrameNumbers('main', { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
    });


    this.gagnePerduText = this.add.text(500,900, 'GOD DAMN IT', { fontSize: '100px', fill: 'white' });
    this.gagnePerduText.setOrigin(0.5);
    this.gagnePerduText.visible = false;

    this.soulText = this.add.text(500,1050,soul +' Souls', { fontSize: '100px', fill: 'white' });
    this.soulText.setOrigin(0.5);
    this.soulText.visible = false;

    this.exaltationText = this.add.text(10,1150,'Exaltation of God x '+ euphori , { fontSize: '77px', fill: 'white' });
    this.exaltationText.visible = false;

    this.soulScoreText = this.add.text(275,50,'Souls ' + soul, { fontSize: '40px', fill: 'black' });
    this.soulScoreText.setOrigin(1);
    this.soulScoreText.visible = true;

    this.EoGText = this.add.text(860,12,'EoG x '+ euphori , { fontSize: '40px', fill: 'black' });
    this.EoGText.visible = true;



  };

  update (){





this.moveAme (ame, 0.25);

this.movePetitAme1 (ame1, 3);
this.movePetitAme2 (ame2, 1);
this.movePetitAme3 (ame3, 2);

this.moveEtoile (etoile, 1.75);


};

moveAme(ame, speed) {
  ame.y += speed;

  if (ame.y > 1850) {
this.exaltationText.setText('Exaltation of God x '+euphori)
this.exaltationText.visible = true;
this.gagnePerduText.setText('GOD DAMN RIGHT');
this.gagnePerduText.visible = true;
this.soulText.setText(soul + ' Souls');
this.soulText.visible = true;
main.anims.play('main_move', true);
main.visible = true;
    this.time.addEvent({
delay: 2000,
callback: ()=>{

    soul += 1000 * euphori;
    euphori += 0.1;
    this.scene.start('deux');
},
loop: false
});



  }
};

movePetitAme1(ame1, speed){
  ame1.x += speed;

  if (ame1.x > 1150){
    ame1.x = 10;
  }


};

movePetitAme2(ame2, speed){
  ame2.x -= speed;

  if (ame2.x < 10){
    ame2.x = 1150;
  }


};

movePetitAme3(ame3, speed){
  ame3.x += speed;

  if (ame3.x > 1150){
    ame3.x = 10;
  }


};

moveEtoile(etoile, speed) {
  etoile.y -= speed;
  randomX = Phaser.Math.Between(0, config.width);

  if (etoile.y < 50 || etoile.x > 1080 || etoile.x < 0) {
    etoile.y = 1700;
    etoile.x = randomX
    tour = tour + 1
}
    else if (tour > 2){

      this.exaltationText.setText('Exaltation of God x ' + euphori)
      this.exaltationText.visible = true;
      this.gagnePerduText.setText('GOD DAMN RIGHT');
      this.gagnePerduText.visible = true;
      this.soulText.setText(soul + ' Souls');
      this.soulText.visible = true;
      main.anims.play('main_move', true);
      main.visible = true;
          this.time.addEvent({
      delay: 2000,
      callback: ()=>{

          soul += 1000* euphori;
          euphori += 0.1;
          this.scene.start('deux');
      },
      loop: false
      });
    }

};

deplaceDroite(etoile, galaxieD) {
if (pointer.isDown && pointer.x > 600 && pointer.y > 750 && pointer.y < 1300){
  etoile.x += 5;
}
};

deplaceGauche(etoile, galaxieG) {
if (pointer.isDown && pointer.x < 600 && pointer.y > 1150 && pointer.y < 1550){
  etoile.x -= 5;
}
};


bougerH(ame, galaxieD) {
if (pointer.isDown && pointer.x > 600 && pointer.y < 800){
  ame.x += 3;
}
else if (pointer.isDown && pointer.x < 600 && pointer.y < 1100){
  ame.x -= 3;
}
};


bougerB(ame, galaxieG) {
if (pointer.isDown && pointer.x > 600){
  ame.x += 10;
}
else if (pointer.isDown && pointer.x < 600){
  ame.x -= 10;
}
};

tuerA1(ame1, etoile){
  ame1.disableBody(true, true);
}
tuerA2(ame2, etoile){
  ame2.disableBody(true, true);
}
tuerA3(ame3, etoile){
  ame3.disableBody(true, true);
}
tuerA(ame, etoile){
  ame.disableBody(true, true);

  this.exaltationText.setText('Exaltation of God x 1.1')
  this.exaltationText.visible = true;
  this.gagnePerduText.setText('GOD DAMN IT');
  this.gagnePerduText.visible = true;
  this.soulText.setText(soul + ' Souls');
  this.soulText.visible = true;
  main.anims.play('main_move', true);
  main.visible = true;
      this.time.addEvent({
  delay: 2000,
  callback: ()=>{

      soul += 0;
      euphori = 1.1;
      this.scene.start('deux');
  },
  loop: false
  });
}











};

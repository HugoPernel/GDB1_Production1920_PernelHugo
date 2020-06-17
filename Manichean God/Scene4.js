var fEau;
var ame;
var fde1;
var fde2;
var fde3;
var fde4;
var sceau;
var pointer;
var compteur = 0;
var soul;
var euphori;
var main;


class Scene4 extends Phaser.Scene {
  constructor() {
    super("quatre");
    }





      init (){








      };

      preload (){

        this.load.image('fEau', 'assets/fond eau.jpg');

        this.load.image('ame', 'assets/ame.png');

        this.load.image('fde4', 'assets/F de 4.png');
        this.load.image('fde3', 'assets/F de 3.png');
        this.load.image('fde2', 'assets/F de 2.png');
        this.load.image('fde1', 'assets/F de 1.png');


        this.load.spritesheet('main','assets/mainDeDieu.png',
                { frameWidth: 1080, frameHeight: 1920 }
            );


      };

      create (){

        pointer = this.input.activePointer;

        fEau = this.add.image(540,960, "fEau");



        fde1 = this.physics.add.image(110,1835, "fde1");
        fde1.visible = false;
        fde2 = this.physics.add.image(110,1727, "fde2");
        fde2.visible = false;
        fde3 = this.physics.add.image(125,1588, "fde3");
        fde3.visible = false;
        fde4 = this.physics.add.image(137,1430, "fde4");
        fde4.visible = false;

        sceau = this.physics.add.image(600,950, "fde4");
        sceau.visible = false;
        sceau.setScale(13);

        ame = this.physics.add.image(600,1800, "ame");
        ame.visible = false;

        this.physics.add.overlap(sceau, ame, this.ajouter, null, this);

        main = this.physics.add.sprite(550, 1000, 'main');
        main.visible = false;
        this.anims.create({
            key: 'main_move',
            frames: this.anims.generateFrameNumbers('main', { start: 0, end: 4 }),
            frameRate: 15,
            repeat: 0
        });

        this.compteText = this.add.text(450,1620, '0', { fontSize: '100px', fill: 'black' });
        this.compteText.setOrigin(0.5);
        this.compteText.visible = true;

        this.gagnePerduText = this.add.text(500,900, 'GOD DAMN IT', { fontSize: '100px', fill: 'white' });
        this.gagnePerduText.setOrigin(0.5);
        this.gagnePerduText.visible = false;

        this.soulText = this.add.text(500,1050,soul + ' Souls', { fontSize: '100px', fill: 'white' });
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





      };

      ajouter (ame, sceau){
        if (pointer.isDown && pointer.y > 1350 && pointer.y < 1500 && pointer.x < 250){
          compteur += 4;
          this.compteText.setText(compteur);
          sceau.disableBody (true,true);

          this.time.addEvent({
      delay: 300,
      callback: ()=>{
        sceau.enableBody (true,true);
      },
      loop: false
    });


}
else if (pointer.isDown && pointer.y > 1500 && pointer.y < 1670 && pointer.x < 250){
  compteur += 3;
  this.compteText.setText(compteur);
  sceau.disableBody (true,true);

  this.time.addEvent({
delay: 300,
callback: ()=>{
sceau.enableBody (true,true);
},
loop: false
});


}
else if (pointer.isDown && pointer.y > 1680 && pointer.y < 1770 && pointer.x < 250){
  compteur += 2;
  this.compteText.setText(compteur);
  sceau.disableBody (true,true);

  this.time.addEvent({
delay: 300,
callback: ()=>{
sceau.enableBody (true,true);
},
loop: false
});


}
else if (pointer.isDown && pointer.y > 1780 && pointer.y < 1900 && pointer.x < 250){
  compteur += 1;
  this.compteText.setText(compteur);
  sceau.disableBody (true,true);

  this.time.addEvent({
delay: 300,
callback: ()=>{
sceau.enableBody (true,true);
},
loop: false
});


}
else if (compteur > 29 && compteur < 31){
  this.exaltationText.setText('Exaltation of God x '+euphori)
  this.exaltationText.visible = true;
  this.gagnePerduText.setText('GOD DAMN RIGHT');
  this.gagnePerduText.visible = true;
  this.soulText.setText(soul + ' Souls');
  this.soulText.visible = true;
  this.time.addEvent({
    delay: 1000,
    callback: ()=>{
main.anims.play('main_move', true);
main.visible = true;


      this.time.addEvent({
  delay: 2000,
  callback: ()=>{

      soul += 1000 * euphori;
      euphori += 0.1;
      this.scene.start('cinq');
  },
  loop: false
  });

},
loop: false
});
}
else if (compteur >= 31){
  this.exaltationText.setText('Exaltation of God x 1.1')
  this.exaltationText.visible = true;
  this.gagnePerduText.setText('GOD DAMN IT');
  this.gagnePerduText.visible = true;
  this.soulText.setText(soul + ' Souls');
  this.soulText.visible = true;
  this.time.addEvent({
    delay: 1000,
    callback: ()=>{
main.anims.play('main_move', true);
main.visible = true;


      this.time.addEvent({
  delay: 2000,
  callback: ()=>{

      soul += 0;
      euphori += 1.1;
      this.scene.start('cinq');
  },
  loop: false
  });

},
loop: false
});
}

      };







    };

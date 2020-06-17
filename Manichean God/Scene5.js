var fTenebre;
var ame;
var visage;
var combat;
var courir;
var pointer;
var soul;
var euphori;
var main;

class Scene5 extends Phaser.Scene {
  constructor() {
    super("cinq");
    }





          init (){








          };

          preload (){

            this.load.image('fTenebre', 'assets/fond tenebre.jpg');

            this.load.image('visage', 'assets/visage.png');

            this.load.image('ame', 'assets/ame.png');

            this.load.spritesheet('main','assets/mainDeDieu.png',
                    { frameWidth: 1080, frameHeight: 1920 }
                );






          };

          create (){

            pointer = this.input.activePointer;

            fTenebre = this.add.image(540,960, "fTenebre");

            visage = this.physics.add.image(525,375, "visage");
            visage.visible = true;

            courir = this.physics.add.image(525,1550, "visage");
            courir.visible = false;

            combat = this.physics.add.image(525,450, "visage");
            combat.visible = false;

            ame = this.physics.add.image(505,1000, "ame");
            ame.visible = true;

            this.physics.add.overlap(ame, combat, this.avancer, null, this);
            this.physics.add.overlap(ame, combat, this.combattre, null, this);
            this.physics.add.overlap(ame, courir, this.fuir, null, this);

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

          };

          update (){




        };

avancer (ame, combat){
  if (pointer.isDown && pointer.y < 1000 && ame.y > 900){
    ame.y -= 50;
  }
};

combattre(ame, combat){
  if (pointer.isDown && pointer.y < 1000 && ame.y > 470){
    ame.y -= 25;
    visage.y -= 40;
    combat.disableBody (true,true);

    this.time.addEvent({
delay: 300,
callback: ()=>{
  combat.enableBody (true,true);
  combat.x = 525;
  combat.y = 425;
},
loop: false
});
  }
  else if (ame.y <= 470){
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

        this.scene.start('six');
    },
    loop: false
    });
  }
};

fuir(ame, courir){
  if (pointer.isDown && pointer.y > 1000 && pointer.x < 600 && ame.y < 1770 && ame.x >500){
    ame.y += 40;
    ame.x -= 15;
    visage.y += 25;
    courir.disableBody (true,true);

    this.time.addEvent({
delay: 300,
callback: ()=>{
  courir.enableBody (true,true);
  courir.x = 525;
  courir.y = 1550;
},
loop: false
});
  }

  else if (pointer.isDown && pointer.y > 1000 && pointer.x > 600 && ame.y < 1770 && ame.x <510){
    ame.y += 40;
    ame.x += 15;
    visage.y += 25;
    courir.disableBody (true,true);

    this.time.addEvent({
delay: 300,
callback: ()=>{
  courir.enableBody (true,true);
  courir.x = 525;
  courir.y = 1550;
},
loop: false
});
  }
  else if (ame.y >= 1770){
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

        this.scene.start('six');
    },
    loop: false
    });
  }
};


        };

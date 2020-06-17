var foi;
var ame;
var fCieux;
var tourS2 = 0;
var speed;
var espace;
var randomX;
var pointer;
var foi2;
var soul;
var euphori;
var main;

    class Scene2 extends Phaser.Scene {
      constructor() {
        super("deux");
      };


      init (){







      };

      preload (){

        this.load.image('fCieux', 'assets/fond cieux.jpg');

        this.load.image('foi', 'assets/Foi.png');

        this.load.image('ame', 'assets/ame.png');

        this.load.spritesheet('main','assets/mainDeDieu.png',
                { frameWidth: 1080, frameHeight: 1920 }
            );






      };

      create (){



        pointer = this.input.activePointer;

        fCieux = this.add.image(540,960, "fCieux");

        ame = this.physics.add.image(550,1400, "ame");
        ame.visible = true;

        foi = this.physics.add.image(550,200, "foi");
        foi.visible = true;
        foi.setScale(0.5);

        foi2 = this.physics.add.image(550,200, "foi");
        foi2.visible = false;
        foi2.setScale(0.5);

        espace = this.physics.add.image(550,800, "foi");
        espace.visible = false;
        espace.setScale(3);

        this.physics.add.overlap(foi, espace, this.moveFoi, null, this);
        this.physics.add.overlap(ame, espace, this.moveLame, null, this);
        this.physics.add.overlap(ame, foi, this.toucheFoi, null, this);
        this.physics.add.overlap(foi2, espace, this.moveFoi2, null, this);
        this.physics.add.overlap(ame, foi2, this.toucheFoi2, null, this);

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







      }


      moveFoi(foi, espace) {
        foi.y += 2;
        randomX = Phaser.Math.Between(300, 900);

        if (foi.y > 500) {
          foi.y = -100;
          foi.x = randomX
          tourS2 = tourS2 + 1
      }
      else if (tourS2 > 2){
        foi.visible = false;

      }


    };

      moveLame (ame, espace){
        if (pointer.isDown && pointer.y < 700){
          ame.y -= 2;
        }
        else if (ame.y < 1400){
          ame.y += 1
        }
        else if (tourS2 > 2 && pointer.isDown && pointer.y > 700 && pointer.x < 600){
        ame.x -= 2;
      }
      else if (tourS2 > 2 && pointer.isDown && pointer.y > 700 && pointer.x > 600){
      ame.x += 2;
    }
      };


      toucheFoi(foi, ame){
        ame.disableBody (true,true);
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
            this.scene.start('trois');
        },
        loop: false
        });

      };

      moveFoi2(foi2, espace){
        if (tourS2 > 2){
          foi2.visible = true;
          foi2.y += 2;
      }
      else if (foi2.y > 800){
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
            this.scene.start('trois');
        },
        loop: false
        });

      }
      };

      toucheFoi2(foi2, ame){
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
            this.scene.start('trois');
        },
        loop: false
        });

      }

    };

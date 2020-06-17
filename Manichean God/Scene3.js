var fGeographie;
var ame;
var tri;
var randomY;
var pointer;
var tourS3 = 0;
var soul;
var euphori;
var main;


class Scene3 extends Phaser.Scene {
  constructor() {
    super("trois");
    }



      init (){








      };

      preload (){

        this.load.image('fGeographie', 'assets/fond geographie.jpg');

        this.load.image('ame', 'assets/ame.png');

        this.load.spritesheet('main','assets/mainDeDieu.png',
                { frameWidth: 1080, frameHeight: 1920 }
            );








      };

      create (){

        pointer = this.input.activePointer;

        fGeographie = this.add.image(540,960, "fGeographie");

        ame = this.physics.add.image(550,1000, "ame");
        ame.visible = true;

        tri = this.physics.add.image(550,950, "ame");
        tri.visible = false;
        tri.setScale(9);

        this.physics.add.overlap(ame, tri, this.moveDTri, null, this);
        this.physics.add.overlap(ame, tri, this.choisir, null, this);

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

      moveDTri (ame, tri){
        ame.x += 5;
        randomY = Phaser.Math.Between(100, 1900);

        if (ame.x > 1000) {
          ame.x = -10;
          ame.y = randomY;
          tourS3 = tourS3 + 1
      }
      else if (tourS3 > 5){
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
            this.scene.start('quatre');
        },
        loop: false
        });

      },
      loop: false
      });

      }
      };

      choisir (ame, tri){
        if (pointer.isDown && pointer.y < 550 && ame.y < 550 && tourS3 > 0){
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
              this.scene.start('quatre');
          },
          loop: false
          });

        },
        loop: false
        });
        }
        else if (pointer.isDown && pointer.y > 1400 && ame.y > 1400 && tourS3 > 0){
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
              this.scene.start('quatre');
          },
          loop: false
          });

        },
        loop: false
        });
        }
        else if (pointer.isDown && pointer.y > 550 && pointer.y < 1400 && ame.y > 550 && ame.y < 1400 && tourS3 > 0){
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
              this.scene.start('quatre');
          },
          loop: false
          });

        },
        loop: false
        });
        }

      };




    };

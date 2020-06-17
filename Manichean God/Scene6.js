var fLune;
var bouleDeFeu;
var bouleDeFeuR;
var ame;
var fumer;
var pointer;
var speed = 5;
var compteur1 = 0;
var compteur2 = 0;
var soul;
var euphori;
var main;


class Scene6 extends Phaser.Scene {
  constructor() {
    super("six");
    }






                  init (){







                  };

                  preload (){

                    this.load.image('fLune', 'assets/fond lune.jpg');

                    this.load.image('bouleDeFeu', 'assets/boule de feu.png');

                    this.load.image('bouleDeFeuR', 'assets/boule de feuReverse.png');

                    this.load.image('ame', 'assets/ame.png');

                    this.load.spritesheet('main','assets/mainDeDieu.png',
                            { frameWidth: 1080, frameHeight: 1920 }
                        );









                  };

                  create (){

                    pointer = this.input.activePointer;

                    fLune = this.add.image(540,960, "fLune");

                    ame = this.physics.add.image(375,950, "ame");
                    ame.visible = true;

                    bouleDeFeu = this.physics.add.image(375,950, "bouleDeFeu");
                    bouleDeFeu.visible = false;

                    bouleDeFeuR = this.physics.add.image(375,950, "bouleDeFeuR");
                    bouleDeFeuR.visible = false;

                    fumer = this.physics.add.image(500,1000, "ame");
                    fumer.visible = false;
                    fumer.setScale(6);

                    main = this.physics.add.sprite(550, 1000, 'main');
                    main.visible = false;
                    this.anims.create({
                        key: 'main_move',
                        frames: this.anims.generateFrameNumbers('main', { start: 0, end: 4 }),
                        frameRate: 15,
                        repeat: 0
                    });


                    this.compteText = this.add.text(835,1000, '0', { fontSize: '75px', fill: 'black' });
                    this.compteText.setOrigin(0.5);
                    this.compteText.visible = true;

                    this.physics.add.overlap(ame, fumer, this.tirer, null, this);

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


                }

                update (){


                  this.moveBDF (bouleDeFeu, 9);
                  this.moveBDFR (bouleDeFeuR, 9);

                };


                tirer(ame, fumer){
                  if (pointer.isDown && pointer.y < 1000 && bouleDeFeu.y < 10){
                    bouleDeFeu.visible = true;
                    bouleDeFeu.y = 950;
                    compteur1 += 1;
                    compteur2 = 0;
                    this.compteText.visible = true;
                    this.compteText.setText(compteur1);
                  }
                  else if (pointer.isDown && pointer.y > 1000 && bouleDeFeuR.y > 1900){
                    bouleDeFeuR.visible = true;
                    bouleDeFeuR.y = 950;
                    compteur2 += 1;
                    compteur1 = 0
                    this.compteText.visible = true;
                    this.compteText.setText(compteur2);
                  }
                  else if (compteur1 > 6 || compteur2 > 6){
                    bouleDeFeu.visible = false;
                    bouleDeFeuR.visible = false;
                    this.compteText.visible = true;
                    this.compteText.setText('6');
                  }
                  else if (compteur1 >= 6 || compteur2 >= 6){
                    this.time.addEvent({
                delay: 1000,
                callback: ()=>{
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

                      this.scene.start('sept');
                  },
                  loop: false
                  });
                },
                loop: false
                });

                  }
                };

                moveBDF(bouleDeFeu, speed) {

                  bouleDeFeu.y -= speed;
                  ame.x = 375;
                  ame.y = 950;


                };

                moveBDFR(bouleDeFeuR, speed) {

                  bouleDeFeuR.y += speed;
                  ame.x = 375;
                  ame.y = 950;


                };




                };

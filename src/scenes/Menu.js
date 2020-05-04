class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.audio('billie_jean', './assets/billie_jean.wav');
        this.load.spritesheet('menu', './assets/Menu.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 9});
    }

    create() {
        // display mennu
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        //create menu sprite
        const menu = this.add.sprite(0, 0, 'menu', 0).setOrigin(0, 0);

       
        this.add.text(centerX, centerY + 0 * textSpacer, 'Use Arrow Keys to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 1 * textSpacer, 'Collect Music Notes', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 2 * textSpacer, 'Avoid Copyright Strikes!', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 3 * textSpacer, 'Press Down Arrow to Start', menuConfig).setOrigin(0.5);

        //this.sound.play('billie_jean');
        cursors = this.input.keyboard.createCursorKeys();
        //keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Down);

        //menu scene animation
        this.anims.create({
            key: 'menu',
            frames: this.anims.generateFrameNumbers('menu', {start: 0, end: 9, first: 0}),
            frameRate: 10,
            repeat: -1,
        });
        menu.anims.play('menu');

        let songconfig=
        {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        //Declaring the music. Place in create function
        var music=this.sound.add('billie_jean', songconfig);
        music.stop();
        music.play();
    }

   update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.down)) {
            this.scene.start('playScene');
        }
    } 
}


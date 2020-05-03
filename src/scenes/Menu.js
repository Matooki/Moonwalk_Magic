class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.audio('billie_jean', './assets/billie_jean.mp3');
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

        this.add.text(centerX, centerY- textSpacer, 'Moonwalk Magic', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 0 * textSpacer, 'Use Arrow Keys to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 1 * textSpacer, 'Collect Music Notes', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 2 * textSpacer, 'Avoid Copyright Strikes!', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 3 * textSpacer, 'Press Down Arrow to Start', menuConfig).setOrigin(0.5);



        this.sound.play('billie_jean');
        cursors = this.input.keyboard.createCursorKeys();
        //keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Down);
    }

   update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.down)) {
            this.scene.start('playScene');
        }
    } 
}


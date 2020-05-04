class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload () {
        //place holder images
        this.load.spritesheet('backstage', './assets/backstage.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 11});
        this.load.spritesheet('moonwalk', './assets/moonwalk.png', {frameWidth: 300, frameHeight: 544, startFrame: 0, endFrame: 9});
        this.load.image('crowd', './assets/Crowd.png');
        this.load.image('crowd2', './assets/crowd2.png');
        this.load.image('crowd3', './assets/crowd3.png');
        this.load.image('crowd4', './assets/crowd4.png');
        this.load.image('crowd4', './assets/spaceship.png');
    }

    create() {

        //speed of game variable
        let shield = 1;
        //const backstage = this.add.sprite(0, 0, 'backstage', 0).setOrigin(0, 0);
        //background tile sprite
        this.crowd4 = this.add.tileSprite(0, 0, 640, 480, 'crowd4').setOrigin(0, 0);
        this.crowd3 = this.add.tileSprite(0, 0, 640, 480, 'crowd3').setOrigin(0, 0);
        this.crowd2 = this.add.tileSprite(0, 0, 640, 480, 'crowd2').setOrigin(0, 0);
        this.crowd1 = this.add.tileSprite(0, 0, 640, 480, 'crowd').setOrigin(0, 0);
        
        this.backstage = this.add.sprite(0, 0, 640, 480,'backstage').setOrigin(0, 0);
        this.backstage2 = this.add.sprite(-640, 0, 640, 480,'backstage').setOrigin(0, 0);
        

        //add player
        this.player = new Player(this, game.config.width/2 - 8, 431, 'moonwalk').setScale(0.3, 0.3).setOrigin(0,0);

        //Add Obstacles
        this.ob1=new Obstacles(this, 0, Phaser.Math.Between(0, game.config.height), 'spaceship', 0).setOrigin(0,0);
        this.ob2=new Obstacles(this, 0, Phaser.Math.Between(0, game.config.height), 'spaceship', 0).setOrigin(0,0);
        this.ob3=new Obstacles(this, 0, Phaser.Math.Between(0, game.config.height), 'spaceship', 0).setOrigin(0,0);
        this.ob4=new Obstacles(this, 0, Phaser.Math.Between(0, game.config.height), 'spaceship', 0).setOrigin(0,0);
        this.ob5=new Obstacles(this, 0, Phaser.Math.Between(0, game.config.height), 'spaceship', 0).setOrigin(0,0);

        // movement
        cursors = this.input.keyboard.createCursorKeys();

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
        this.musicPlay=false;

        this.gameOver=false;

        //score display
        let scoreConfig=
        {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft=this.add.text(69, 54, this.player.distance, scoreConfig);

        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.increaseBump,
            callbackScope: this,
            loop: true
        });

        this.anims.create({
            key: 'shuffle',
            frames: this.anims.generateFrameNumbers('backstage', {start: 0, end: 11, first: 0}),
            frameRate: 12,
            repeat: -1,
        }); 

        this.anims.create({
            key: 'moonwalk',
            frames: this.anims.generateFrameNumbers('moonwalk', {start: 0, end: 9, first: 0}),
            frameRate: 15,
            repeat: -1,
        }); 


        this.player.anims.play('moonwalk');
        this.backstage.anims.play('shuffle');
        this.backstage2.anims.play('shuffle');
    }

    update() {
        //background scroll speed
        this.crowd4.tilePositionX -= 0.1;
        this.crowd3.tilePositionX += 0.3;
        this.crowd2.tilePositionX -= 0.4;
        this.crowd1.tilePositionX += 0.5;
        this.backstage.x += 1;
        this.backstage2.x += 1;
        if(this.backstage.x >= 640){
            this.backstage.x = -640;
        }
        if(this.backstage2.x >= 640){
            this.backstage2.x = -640;
        }
        
        //check key input for restart
        if(this.gameOver&&cursors.left.JustDown)
        {
            this.scene.restart();
        }
        if (this.gameOver &&cursors.right.JustDown)
        {
            this.scene.start("menuScene");
        }

        //player movement
        if(!this.gameOver)
        {
            this.player.update();
            this.ob1.update();
            this.ob2.update();
            this.ob3.update();
            this.ob4.update();
            this.ob5.update();
            this.scoreLeft.text=this.player.distance;
        }

        //if(!this.musicPlay&&!this.gameOver)
        //{
            //music.play();
            //this.musicPlay=true;
        //}

        //check collisions
        if(this.checkCollision(this.player, this.ob1))
        {
            this.gameOver=true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0, 5);
            this.add.text(game.config.width/2, game.config.height/2+64, '<- to Restart or -> for Menu', scoreConfig).setOrigin(0, 5);
        }
        if(this.checkCollision(this.player, this.ob2))
        {
            this.gameOver=true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0, 5);
            this.add.text(game.config.width/2, game.config.height/2+64, '<- to Restart or -> for Menu', scoreConfig).setOrigin(0, 5);
        }
        if(this.checkCollision(this.player, this.ob3))
        {
            this.gameOver=true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0, 5);
            this.add.text(game.config.width/2, game.config.height/2+64, '<- to Restart or -> for Menu', scoreConfig).setOrigin(0, 5);
        }
        if(this.checkCollision(this.player, this.ob4))
        {
            this.gameOver=true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0, 5);
            this.add.text(game.config.width/2, game.config.height/2+64, '<- to Restart or -> for Menu', scoreConfig).setOrigin(0, 5);
        }
        if(this.checkCollision(this.player, this.ob5))
        {
            this.gameOver=true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0, 5);
            this.add.text(game.config.width/2, game.config.height/2+64, '<- to Restart or -> for Menu', scoreConfig).setOrigin(0, 5);
        }
    }

    checkCollision(player, obstacle)
    {
        //simple AABB checking
        if(player.x>obstacle.x+obstacle.width&&
            player.x+player.width<obstacle.x&&
            obstacle.y>player.y-player.height/2&&
            obstacle.y<player.y+player.height/2)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


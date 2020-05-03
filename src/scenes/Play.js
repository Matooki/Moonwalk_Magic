class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload () {
        //place holder images
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('spaceship', './assets/spaceship.png');
    }

    create() {
        //background tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480,'starfield').setOrigin(0, 0);

        //add player
        this.player = new Player(this, 640, game.config.height/2, 'rocket').setScale(0.5, 0.5).setOrigin(0,0);

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
        var music=this.sound.add('song', songconfig);
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

        //obstacle speed
        this.obstacleSpeed = 100;
        this.obstacleSpeedMax = 500;

        // add obstacles
        this.obstacleGroup = this.add.group({
            runChildUpdate: true
        });
        this.addObstacles();

        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.increaseBump,
            callbackScope: this,
            loop: true
        });
    }
    
        addObstacles() {
            let obstacle = new Obstacles(this, this.obstacleSpeed);
            this.obstacleGroup.add(obstacle);
 
    }

    update() {
        //background scroll speed
        this.starfield.tilePositionX -= 1;
        this.starfield.tilePositionY -= 2;

        //player movement
        this.player.update();

        //if(!this.musicPlay&&!this.gameOver)
        //{
            //music.play();
            //this.musicPlay=true;
        //}

        this.scoreLeft.text=this.player.distance;
    }
}


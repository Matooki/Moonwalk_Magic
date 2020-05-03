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
        this.player = new Player(this, game.config.width/2 - 8, 431, 'rocket').setScale(0.5, 0.5).setOrigin(0,0);

        // movement
        cursors = this.input.keyboard.createCursorKeys();

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
    
    }
}


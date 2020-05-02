class testing extends Phaser.Scene
{
    constructor()
    {
        super("testingScene");
    }

    preload()
    {
        //Preload audio
        this.load.audio('song', './assets/billie_jean.wav');
        //Preload Backgrounds
        //this.load.image('INSERTFILENAME', './assets/INSERTFILENAME.png');
        //this.load.image('INSERTFILENAME', './assets/INSERTFILENAME.png');
    }

    create()
    {
        //Place Background Sprites
        //this.INSERTFILENAME=this.add.tileSprite(0, 0, 640, 480, 'INSERTFILENAME').setOrigin(0, 0);
        //this.INSERTFILENAME=this.add.tileSprite(0, 0, 640, 480, 'INSERTFILENAME').setOrigin(0, 0);

        //Configuration for the song. Place in create function
        let config=
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
        var music=this.sound.add('song', config);

        //Play song. Place at start of game
        music.play();

        //Stop song. Place at game over screen
        //music.stop();
    }

    update()
    {
        //Parallax Scrolling. Place in update function
        //this.INSERTFILENAME.tilePositionX-=1;
        //this.INSERTFILENAME.tilePositionX-=2;
    }
}
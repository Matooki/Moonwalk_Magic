class Obstacles extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
    }

    update() {
        //move spaceship left
        this.x+=2;

        //wraparound from left to right edge
        if(this.x>=game.config.width+this.width)
        {
            this.x=0;
            this.y=Phaser.Math.Between(0, game.config.height);
        }
    }
}

class Obstacles extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
    }

    update() {
        //move spaceship left
        this.x+=2;

        //wraparound from left to right edge
        if(this.x>=game.config.width+this.width + (Math.random() * (200-100) + 100))
        {
            this.x= -50;
            let yc =Phaser.Math.Between(123, 360);
            this.y = yc;
            console.log(yc);
        }
    }
}
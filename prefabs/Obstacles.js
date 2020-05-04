class Obstacles extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity) {
        super(scene, 0, Phaser.Math.Between(0, game.config.height), 'spaceship');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.newObstacles = true;
        this.scene = scene;
        this.velocity = velocity;
    }

    update() {
        super.update();

        if(this.newObstacles && this.x > centerX) {
            this.newObstacles = false;
            this.scene.addObstacles(this.parent, this.velocity);
        }

        if(this.x-this.width>game.config.width) {
            this.destroy();
        }
    }
}
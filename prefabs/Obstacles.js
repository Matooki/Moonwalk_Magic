class Obstacles extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity) {
        super(scene, game.config.width - Math.floor(Math.random() * (obstacleWidth * 2)), Phaser.Math.Between(0, 0 + obstacleHeight/2), 'spaceship');

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

        if(this.newObstacles && this.x < centerX) {
            this.newObstacles = false;
            this.scene.addObstacle(this.parent, this.velocity);
        }

        if(this.x < -this.width) {
            this.destroy();
        }
    }
}

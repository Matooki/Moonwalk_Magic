class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructr(scene, x, y, texture, frame, velocity) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.Immovable();
        this.velocity = velocity;
        this.scene = scene
        }
    
}
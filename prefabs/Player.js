class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
		
		scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable();
        this.setBounce(0.5);
        this.setCollideWorldBounds(true);
        this.distance = 0;
        this.movement = 200;
        this.copyright = false;
    }
    
    update() {
    ++this.distance
    
    //movement
    if(!this.copyright && cursors.up.isDown) {
        this.body.setVelocityY = this.movement;
    }
    else if(!this.copyright && cursors.down.isDown) {
        this.body.setVelocityY -= this.movement;
    }
    else if(!this.copyright && cursors.left.isDown) {
        this.body.setVelocityX -= this.movement;
    }
    else if(!this.copyright && cursors.right.isDown) {
        this.body.setVelocityX = this.movement;
    }

    }
}

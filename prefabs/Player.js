class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
		
		scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable();
        this.setBounce(0.5);
        this.setCollideWorldBounds(true);
        this.distance = 0;
        this.copyright = false;
    }
    
    update() {
        this.distance++;
    
        //movement
        if(!this.copyright && cursors.up.isDown) {
            this.y-=2;
        }
        else if(!this.copyright && cursors.down.isDown) {
            this.y+=2;
        }
        else if(!this.copyright && cursors.left.isDown) {
            this.x-=2;
        }
        else if(!this.copyright && cursors.right.isDown) {
            this.x+=2;
        }
    }
}

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    }
}
let game = new Phaser.Game(config);

let centerX = game.config.width/2
let centerY = game.config.height/2
let obstacleWidth = 120;
let obstacleHeight = 60;
let cursors; 
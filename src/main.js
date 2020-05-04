/* 
Moonwalk Magic

by:    David Pazos,
    Dallas Truong,
    Joey Balaoing

Date completed: 5/3/20

Our creative tilt was done by Dallas and David. Since we decided
to have music as our main theme, they both created artwork that we feel
comlements our game well. Credit to Dallas who did his rendition of Billie Jean
and to David for creating the Michael Jackson and game visual assets.
*/
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
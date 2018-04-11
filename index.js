/*
 * Phaser Tutorial Example
 * Ported to ES6
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

import TitleScene from './TitleScene.js';

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [
        TitleScene
    ]
};

var game = new Phaser.Game(config);
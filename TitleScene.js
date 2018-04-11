/*
 * TitleScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        })
    }

    resize() {
        let canvas = this.cache.game.canvas;
    
        let width = window.innerWidth;
        let height = window.innerHeight;
    
        let wratio = width / height;
        let ratio = canvas.width / canvas.height;
    
        if (wratio < ratio) {
            canvas.style.width = width + 'px';
            canvas.style.height = (width / ratio) + 'px';
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }

    preload() {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        window.addEventListener('resize', evt => this.resize());
        this.resize();

        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}

export default TitleScene;
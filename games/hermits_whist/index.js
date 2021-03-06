var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
window.onload = function() {
    var game = new Phaser.Game(config);
}
    function preload ()
    {
        //this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('back', 'assets/backgrounds/back1.jpg');
        this.load.image('cb', 'assets/cardback/back.jpg');
        //this.load.spritesheet('c', 'assets/cards/cards.png', { frameWidth: 334, frameHeight: 440 });
        //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        //this.load.image('red', 'assets/particles/red.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'back');
        var cb1 = this.add.image(200, 150, 'cb').setInteractive();
        this.input.setDraggable(cb1);
        var cb2 = this.add.image(200, 150, 'cb').setInteractive();
        this.input.setDraggable(cb2);
        var cb3 = this.add.image(200, 150, 'cb').setInteractive();
        this.input.setDraggable(cb3);

		this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
			gameObject.x = dragX;
			gameObject.y = dragY;

		});

        /* var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);*/
    }
    function update ()
    {
    }

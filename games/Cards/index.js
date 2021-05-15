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
        var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
        this.load.image('back', 'assets/backgrounds/back1.jpg');
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/Cards/' + cards[i] + '.jpg');
        }
        //this.load.image('cb', 'assets/Cards/s11.jpg');
        //this.load.spritesheet('c', 'assets/cards/cards.png', { frameWidth: 334, frameHeight: 440 });
        //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        //this.load.image('red', 'assets/particles/red.png');
    }
    function create ()
    {
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
        var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
        shuffle(cards);
        this.add.image(400, 300, 'back');
        var i;
        for (i = 0; i < cards.length; i++) {
          var c = this.add.image(200, 150, cards[i]).setInteractive();
          c.setScale(1/8);
          this.input.setDraggable(c);
        }
        /*var cb1 = this.add.image(200, 150, 'cb').setInteractive();
        cb1.setScale(1/8);
        this.input.setDraggable(cb1);
        //.resize(68, 101);
        var cb2 = this.add.image(200, 150, 'cb').setInteractive();
        cb2.setScale(1/8);
        this.input.setDraggable(cb2);
        var cb3 = this.add.image(200, 150, 'cb').setInteractive();
        cb3.setScale(1/8);
        this.input.setDraggable(cb3);*/

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

window.onload = function () {
    var game = new Phaser.Game(1200, 700, Phaser.AUTO, 'C3T', {
        preload: preload,
        create: create
    });

    function preload() {
        game.load.image('icon', '../assets/C3T-Icon.png')
        game.load.spritesheet('pieces', '../assets/C3T-Game-Pieces.png', 150, 150);
        game.load.spritesheet('buttons', '../assets/buttons.png', 150, 150, 6);
    }

    var startButton;
    var tutorialButton;
    var logo;
    var boardButtons = new Array();
    var shape = new Array();
    var fill;
    var stripe;

    function create() {
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();

        game.stage.backgroundColor = '#ffffff';

        makeStartScreen();

        makeArrays();
    }

    function pauseAction() {

    }

    function makeStartScreen() {
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'icon');
        logo.anchor.set(0.5, 0.5);
        logo.scale.set(0.6, 0.6);

        startButton = game.add.button(game.world.centerX + 400, game.world.centerY, 'buttons', function () {
            //game.world.removeAll();
            makeGameBoard();
        }, this, 1, 0, 2);
        tutorialButton = game.add.button(game.world.centerX - 400, game.world.centerY, 'buttons', function () {
            //game.world.removeAll();

        }, this, 4, 3, 5);
        startButton.anchor.set(0.5, 0.5);
        tutorialButton.anchor.set(0.5, 0.5);
    }

    function makeGameBoard() {
        //A 3 by 3 grid of 3 by 3 grids of 64px by 64px buttons with 12px spacers
    }

    function makeArrays() {
        var i = 0;
        for (var x = 0; x < 3; x++) {
            shape[x] = new Array();
            for (var y = 0; y < 3; y++) {
                shape[x][y] = new Array();
                for (var z = 0; z < 3; z++) {
                    shape[x][y][z] = new Array();
                    for (var w = 0; w < 3; w++) {
                        shape[x][y][z][w] = i;
                        i++;
                    }
                }
            }
        }
        fill = shape;
        stripe = shape;
        boardButtons = shape;
    }

};

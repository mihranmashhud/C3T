window.onload = function () {
    let game = new Phaser.Game(1200, 700, WebGL, 'C3T', {
        preload: preload,
        create: create
    });

    function preload() {
        game.load.image('icon', '../assets/C3T-Icon.png')
        game.load.spritesheet('pieces', '../assets/C3T-Game-Pieces.png', 150, 150);
        game.load.spritesheet('start-buttons', '../assets/Start-Buttons.png', 150, 150, 6);
    }

    let startButton;
    let tutorialButton;
    let logo;

    function create() {

        game.stage.backgroundColor = '#ffffff';

        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'icon');
        logo.anchor.set(0.5, 0.5);
        logo.scale.set(0.6, 0.6);

        startButton = game.add.button(game.world.centerX + 400, game.world.centerY, 'start-buttons', startAction, this, 1, 0, 2);
        tutorialButton = game.add.button(game.world.centerX - 400, game.world.centerY, 'start-buttons', tutorialAction, this, 4, 3, 5);
        startButton.anchor.set(0.5, 0.5);
        tutorialButton.anchor.set(0.5, 0.5);
    }

    function startAction() {

    }

    function tutorialAction() {

    }
};

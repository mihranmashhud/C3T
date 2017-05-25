var logo;
var startButton;
var tutorialButton;
var menuState = {
    create: function () {
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'icon');
        logo.anchor.set(0.5, 0.5);
        logo.scale.set(0.6, 0.6);

        startButton = game.add.button(game.world.centerX + 400, game.world.centerY, 'buttons', function () {
            game.state.start('play');
        }, this, 1, 0, 2);
        tutorialButton = game.add.button(game.world.centerX - 400, game.world.centerY, 'buttons', function () {
            game.state.start('tutorial');
        }, this, 4, 3, 5);
        startButton.anchor.set(0.5, 0.5);
        tutorialButton.anchor.set(0.5, 0.5);
    }
};

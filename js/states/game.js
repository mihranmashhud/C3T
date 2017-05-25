var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'C3T');

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('pause', pauseState);
game.state.add('tutorial', tutorialState);

game.state.start('load');

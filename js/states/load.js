var loadState = {
    preload: function () {
        game.load.image('icon', '../../assets/C3T-Icon.png')
        game.load.spritesheet('pieces', '../../assets/C3T-Game-Pieces.png', 150, 150);
        game.load.spritesheet('buttons', '../../assets/buttons.png', 150, 150);
    },

    create: function () {
        game.scale.pageAlignHorizontally = true;
        game.scale.refresh();
        game.stage.backgroundColor = '#ffffff';
        game.state.start('menu');
    }
};

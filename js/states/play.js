var shape = new Array();

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
var fill = shape;
var stripe = shape;
var boardButtons = [];
var gamePieces = [];
var pieceFunctions = [];
var vals;
var undoButton;
var pauseButton;
var p = 0;
var inPlay = [];
var num1 = [];
var num2 = [];

function movePiece(x, y) {}

var playState = {
    create: function () {
        undoButton = game.add.button(1200 - 50, 0, 'buttons', function () {

        }, this, 10, 9, 11);
        pauseButton = game.add.button(1200 - 120, 0, 'buttons', function () {
            game.state.start('pause');
        }, this, 13, 12, 14);
        undoButton.scale.setTo(1 / 3, 1 / 3);
        pauseButton.scale.setTo(1 / 3, 1 / 3);

        //Make the Board
        var i = 0;
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    for (var w = 0; w < 3; w++) {
                        boardButtons.push(game.add.button(332 + (z * 204) + (w * 64), 32 + (x * 204) + (y * 64), 'buttons', function () {
                            vals = [this.x, this.y, this.z, this.w];
                            console.log(vals);
                            movePiece(332 + (this.z * 204) + (this.w * 64), 32 + (this.x * 204) + (this.y * 64));
                        }, {
                            x: x,
                            y: y,
                            z: z,
                            w: w
                        }, 7, 6, 8));
                        boardButtons[i].anchor.setTo(0.5, 0.5);
                        boardButtons[i].scale.setTo(64 / 150, 64 / 150);
                        boardButtons[i].inputEnabled = true;
                        i++;
                    }
                }
            }
        }
        console.log(boardButtons);

        i = 0;
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    num1.push(z * 64);
                    num2.push(32 + (x * 192) + (y * 64));
                    gamePieces.push(game.add.sprite(num1[i], num2[i], 'pieces'));
                    gamePieces[i].frame = i;
                    gamePieces[i].scale.setTo(64 / 150, 64 / 150);
                    gamePieces[i].inputEnabled = true;
                    gamePieces[i].events.onInputDown.add(function () {
                        gamePieces[this.i].alpha = 0;
                        gamePieces[this.i].inputEnabled = false;
                        inPlay.push(game.add.sprite(num1[this.i], num2[this.i], 'pieces'));
                        inPlay[p].frame = this.i;
                        inPlay[p].scale.setTo(64 / 150, 64 / 150);
                        var ease = game.add.tween(inPlay[p]);
                        ease.to({
                            x: 1200 - 32 - 150,
                            y: 300 - 32
                        }, 1500, Phaser.Easing.Cubic.Out);
                        ease.start();
                        for (let w = 0; w < gamePieces.length; w++) {
                            if (w < 27) {
                                var ease = game.add.tween(gamePieces[w]);
                                ease.to({
                                    y: 1800
                                }, 1500, Phaser.Easing.Cubic.Out);
                                ease.start();
                            }
                        }

                    }, {
                        i: i
                    });
                    i++;
                }
            }
        }
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    gamePieces.push(game.add.sprite(z * 64, 632 + (x * 192) + (z * 64), 'pieces'));
                    gamePieces[i].frame = i;
                    gamePieces[i].scale.setTo(64 / 150, 64 / 150);
                    gamePieces[i].inputEnabled = true;
                    gamePieces[i].events.onInputDown.add(function () {
                        gamePieces[this.i].alpha = 0;
                        gamePieces[this.i].inputEnabled = false;
                        inPlay.push(game.add.sprite(num1[this.i-num1.length], num2[this.i-num2.length], 'pieces'));
                        inPlay[p].frame = this.i;
                        inPlay[p].scale.setTo(64 / 150, 64 / 150);
                        var ease = game.add.tween(inPlay[p]);
                        ease.to({
                            x: 1200 - 32 - 150,
                            y: 300 - 32
                        }, 1500, Phaser.Easing.Cubic.Out);
                        ease.start();
                        for (let w = 0; w < gamePieces.length; w++) {
                            if (w < 27) {
                                var ease = game.add.tween(gamePieces[w]);
                                ease.to({
                                    y: 1800
                                }, 1500, Phaser.Easing.Cubic.Out);
                                ease.start();
                            }
                        }

                    }, {
                        i: i
                    });
                    i++;
                }
            }
        }
    }
};

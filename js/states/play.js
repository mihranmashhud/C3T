var array = new Array();
for (var p = 0; p < 3; p++) {
    array[p] = new Array(3);
    var i = 0;
    for (var x = 0; x < 3; x++) {
        array[p][x] = new Array(3);
        for (var y = 0; y < 3; y++) {
            array[p][x][y] = new Array(3);
            for (var z = 0; z < 3; z++) {
                array[p][x][y][z] = new Array(3);
                for (var w = 0; w < 3; w++) {
                    array[p][x][y][z][w] = i;
                    i++;
                }
            }
        }
    }
}
console.log(array.toString);
var boardButtons = [];
var gamePieces = [];
var properties = [];
var vals;
var undoButton;
var pauseButton;
var p = 0;
var inPlay = [];
var num1 = [];
var num2 = [];
var works = false;

function movePiece(n1, n2) {
    var ease = game.add.tween(inPlay[p]);
    ease.to({
        x: n1,
        y: n2
    }, 1000, Phaser.Easing.Cubic.Out);
    ease.start();
    works = false;
    enabled(false);
    p++;
}

function enabled(option) {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            for (var z = 0; z < 3; z++) {
                for (var w = 0; w < 3; w++) {
                    if (boardButtons[x][y][z][w].stayEnabled) {
                        boardButtons[x][y][z][w].inputEnabled = option;
                    }
                }
            }
        }
    }
}

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
        boardButtons = new Array(3);
        for (var x = 0; x < 3; x++) {
            boardButtons[x] = new Array(3);
            for (var y = 0; y < 3; y++) {
                boardButtons[x][y] = new Array(3);
                for (var z = 0; z < 3; z++) {
                    boardButtons[x][y][z] = new Array(3);
                    for (var w = 0; w < 3; w++) {
                        boardButtons[x][y][z][w] = game.add.button(332 + (z * 204) + (w * 64), 32 + (x * 204) + (y * 64), 'buttons', function () {
                            for (var g = 0; g < 3; g++) {
                                array[g][this.x][this.y][this.z][this.w] = properties[g];
                            }
                            vals = [this.x, this.y, this.z, this.w];
                            console.log("" + vals);
                            movePiece(332 + (this.z * 204) + (this.w * 64), 32 + (this.x * 204) + (this.y * 64));
                            boardButtons[this.x][this.y][this.z][this.w].stayEnabled = false;
                            boardButtons[this.x][this.y][this.z][this.w].setFrames(6, 6, 6);
                            winCheck(this.x, this.y, this.z, this.w);
                            boardButtons[this.x][this.y][this.z][this.w].inputEnabled = false;
                            for (var w = 0; w < 27; w++) {
                                var ease = game.add.tween(gamePieces[((inPlay.length % 2) * 27) + w]);
                                ease.to({
                                    y: gamePieces[((inPlay.length % 2) * 27) + w].y - 600
                                }, 1500, Phaser.Easing.Cubic.Out);
                                ease.start();
                            }
                            enabled(false);
                        }, {
                            x: x,
                            y: y,
                            z: z,
                            w: w
                        }, 7, 6, 8);
                        boardButtons[x][y][z][w].anchor.setTo(0.5, 0.5);
                        boardButtons[x][y][z][w].scale.setTo(64 / 150, 64 / 150);
                        boardButtons[x][y][z][w].stayEnabled = true;
                        i++;
                    }
                }
            }
        }
        enabled(false);
        console.log(boardButtons);

        i = 0;
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    num1.push(z * 64);
                    num2.push((x * 192) + (y * 64));
                    gamePieces.push(game.add.sprite(num1[i], num2[i], 'pieces'));
                    gamePieces[i].frame = i;
                    gamePieces[i].scale.setTo(64 / 150, 64 / 150);
                    gamePieces[i].inputEnabled = true;
                    gamePieces[i].events.onInputDown.add(function () {
                        enabled(true);
                        properties = [(this.x + 1) * 100, (this.y + 1) * 100, (this.z + 1) * 100];
                        console.log(properties);
                        gamePieces[this.i].alpha = 0;
                        gamePieces[this.i].inputEnabled = false;
                        inPlay.push(game.add.sprite(num1[this.i] + 32, num2[this.i] + 32, 'pieces'));
                        inPlay[p].frame = this.i;
                        inPlay[p].scale.setTo(64 / 150, 64 / 150);
                        inPlay[p].anchor.setTo(0.5, 0.5);
                        var ease = game.add.tween(inPlay[p]);
                        ease.to({
                            x: 1200 - 32 - 150,
                            y: 300 - 32
                        }, 1500, Phaser.Easing.Cubic.Out);
                        ease.start();
                        for (var w = 0; w < 27; w++) {
                            var ease = game.add.tween(gamePieces[w]);
                            ease.to({
                                y: gamePieces[w].y + 600
                            }, 1500, Phaser.Easing.Cubic.Out);
                            ease.start();
                        }
                    }, {
                        i: i,
                        x: x,
                        y: y,
                        z: z
                    });
                    i++;
                }
            }
        }
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    gamePieces.push(game.add.sprite(num1[i - num1.length], 600 + num2[i - num2.length], 'pieces'));
                    gamePieces[i].frame = i;
                    gamePieces[i].scale.setTo(64 / 150, 64 / 150);
                    gamePieces[i].inputEnabled = true;
                    gamePieces[i].events.onInputDown.add(function () {
                        enabled(true);
                        properties = [(this.x + 4) * 100, (this.y + 4) * 100, (this.z + 4) * 100];
                        console.log(properties);
                        gamePieces[this.i].alpha = 0;
                        gamePieces[this.i].inputEnabled = false;
                        inPlay.push(game.add.sprite(num1[this.i - num1.length] + 32, num2[this.i - num2.length] + 32, 'pieces'));
                        inPlay[p].frame = this.i;
                        inPlay[p].scale.setTo(64 / 150, 64 / 150);
                        inPlay[p].anchor.setTo(0.5, 0.5);
                        var ease = game.add.tween(inPlay[p]);
                        ease.to({
                            x: 1200 - 32 - 150,
                            y: 300 - 32
                        }, 1500, Phaser.Easing.Cubic.Out);
                        ease.start();
                        for (let w = 27; w < gamePieces.length; w++) {
                            var ease = game.add.tween(gamePieces[w]);
                            ease.to({
                                y: gamePieces[w].y + 600
                            }, 1500, Phaser.Easing.Cubic.Out);
                            ease.start();
                        }
                    }, {
                        i: i,
                        x: x,
                        y: y,
                        z: z
                    });
                    i++;
                }
            }
        }
    }
};

function winCheck(x, y, z, w) {
    x += 3;
    y += 3;
    z += 3;
    w += 3;
    for (var i = 0; i < 3; i++) {
        if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][y % 3][z % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][y % 3][z % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][y % 3][z % 3][w % 3], boardButtons[(x + 2) % 3][y % 3][z % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 1) % 3][z % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 2) % 3][z % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y + 1) % 3][z % 3][w % 3], boardButtons[x % 3][(y + 2) % 3][z % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][y % 3][(z + 1) % 3][w % 3], boardButtons[x % 3][y % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][y % 3][z % 3][(w + 1) % 3], boardButtons[x % 3][y % 3][z % 3][(w + 2) % 3]);
        }

        //2D Diagnals variation 1
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y + 1) % 3][z % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y + 2) % 3][z % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y + 1) % 3][z % 3][w % 3], boardButtons[(x + 2) % 3][(y + 2) % 3][z % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][y % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][y % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][y % 3][(z + 1) % 3][w % 3], boardButtons[(x + 2) % 3][y % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][y % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][y % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][y % 3][z % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][y % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y + 1) % 3][(z + 1) % 3][w % 3], boardButtons[x % 3][(y + 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y + 1) % 3][z % 3][(w + 1) % 3], boardButtons[x % 3][(y + 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][y % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[x % 3][y % 3][(z + 2) % 3][(w + 2) % 3]);
        }

        //2D Diagnols variation 2
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y + 1) % 3][z % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y + 2) % 3][z % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y + 1) % 3][z % 3][w % 3], boardButtons[(x - 2) % 3][(y + 2) % 3][z % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][y % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][y % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][y % 3][(z + 1) % 3][w % 3], boardButtons[(x - 2) % 3][y % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][y % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][y % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][y % 3][z % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][y % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y - 1) % 3][(z + 1) % 3][w % 3], boardButtons[x % 3][(y - 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y - 1) % 3][z % 3][(w + 1) % 3], boardButtons[x % 3][(y - 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][y % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][y % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[x % 3][y % 3][(z - 2) % 3][(w + 2) % 3]);
        }

        //3D diagnols variation 1
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y + 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y + 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y + 1) % 3][(z + 1) % 3][w % 3], boardButtons[(x + 2) % 3][(y + 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y + 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y + 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y + 1) % 3][z % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y + 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][y % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][y % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][y % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][y % 3][(z + 2) % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[x % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //3D diagnols variation 2
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y + 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y + 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y + 1) % 3][(z + 1) % 3][w % 3], boardButtons[(x - 2) % 3][(y + 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y + 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y + 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y + 1) % 3][z % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y + 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][y % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][y % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][y % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][y % 3][(z + 2) % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[x % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //3D diagnols variation 3
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y - 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y - 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y - 1) % 3][(z + 1) % 3][w % 3], boardButtons[(x - 2) % 3][(y - 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y - 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y - 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y - 1) % 3][z % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y - 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][y % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][y % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][y % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][y % 3][(z - 2) % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[x % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }
        //3D diagnols variation 4
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y - 1) % 3][(z + 1) % 3][w % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y - 2) % 3][(z + 2) % 3][w % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y - 1) % 3][(z + 1) % 3][w % 3], boardButtons[(x + 2) % 3][(y - 2) % 3][(z + 2) % 3][w % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y - 1) % 3][z % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y - 2) % 3][z % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y - 1) % 3][z % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y - 2) % 3][z % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][y % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][y % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][y % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][y % 3][(z - 2) % 3][(w + 2) % 3]);
        } else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][x % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[x % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[x % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }

        //4D diagnol variation 1
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 2
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y + 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y + 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 3
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 4
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y - 1) % 3][(z + 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y - 2) % 3][(z + 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 5
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 6
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y + 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y + 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 7
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 1) % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x + 2) % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x + 1) % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x + 2) % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }
        //4D diagnol variation 8
        else if (array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 1) % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3] && array[i][x % 3][y % 3][z % 3][w % 3] == array[i][(x - 2) % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]) {
            showWin(boardButtons[x % 3][y % 3][z % 3][w % 3], boardButtons[(x - 1) % 3][(y - 1) % 3][(z - 1) % 3][(w + 1) % 3], boardButtons[(x - 2) % 3][(y - 2) % 3][(z - 2) % 3][(w + 2) % 3]);
        }
    }
}

function showWin(a, b, c) {
    var o = 19 - (inPlay.length % 2);
    a.setFrames(o, o, o);
    b.setFrames(o, o, o);
    c.setFrames(o, o, o);
    enabled(false);
    for (var i = 0; i < gamePieces.length; i++) {
        gamePieces[i].inputEnabled = false;
    }
}

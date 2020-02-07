let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let mainGrid = new Array(8);
  for (let index = 0; index < mainGrid.length; index++) {
    mainGrid[index] = new Array(8);
  }

  mainGrid[3][4] = new Piece('black');
  mainGrid[4][3] = new Piece('black');
  mainGrid[3][3] = new Piece('white');
  mainGrid[4][4] = new Piece('white');

  return mainGrid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
  this.DIRS = [
    [ 0,  1],
    [ 1,  1],
    [ 1,  0],
    [ 1, -1],
    [ 0, -1],
    [-1, -1],
    [-1,  0],
    [-1,  1]
  ];
  
}

// Board.DIRS = [
//   [ 0,  1],
//   [ 1,  1],
//   [ 1,  0],
//   [ 1, -1],
//   [ 0, -1],
//   [-1, -1],
//   [-1,  0],
//   [-1,  1]
// ];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error('Not valid pos!')
  } else if (this.grid[pos[0]][pos[1]] !== undefined) {
    return this.grid[pos[0]][pos[1]];
  } else {
    return undefined;
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  let goodMoves = this.validMoves(color)
  debugger
  return (goodMoves[0] === undefined ? false : true);
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let checkPiece = this.getPiece(pos);

  if (checkPiece.constructor !== Error && checkPiece.color === color){
    return true;
  }

  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let checkPiece = this.getPiece(pos);
  
  if (checkPiece !== undefined && checkPiece.constructor !== Error) {
    return true;
  }
  
  return false;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (this.isOccupied([i, j])) {
        return false;
      }
    }
  }

  return true;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];

  return (x >= 0 && x <= 7 && y >= 0 && y <= 7 ? true : false) 
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir) {
  if (!board.isOccupied(pos) || !board.isValidPos(pos)) {
    return null;
  }
  
  if (board.getPiece(pos).color === color) {
    return [];
  }

  let result = _positionsToFlip(board, addDirs(pos, dir), color, dir);
  if (result !== null) {
    return [pos].concat(result);
  } else {
    return null;
  }
}


function addDirs (pos, dir) {
  return [pos[0] + dir[0], pos[1] + dir[1]];
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.isOccupied(pos) && this.isValidPos(pos)){
    this.grid[pos[0]][pos[1]] = new Piece(color);

    for (let index = 0; index < this.DIRS.length; index++) {
      let dir = addDirs(pos, this.DIRS[index])
      let arr = _positionsToFlip(this, dir, color, this.DIRS[index]);
      if (arr !== null) {
        for (let index = 0; index < arr.length; index++) {
          this.getPiece(arr[index]).flip();
        }
      }
    }
  } else {
    return new Error('Invalid Move');
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
// Board.prototype.print = function () {
//   console.log(`------------------`);
//   for (let i = 0; i < this.grid.length; i++) {
//     let arr = [];

//     for (let j = 0; j < this.grid.length; j++) {
//       if(this.isOccupied([i, j])){
//         arr.push(this.getPiece([i, j]).toString());
//       } else {
//         arr.push(' ');
//       }
//     }

//     console.log(`|${arr.join('|')}|`);
//     console.log(`------------------`);
//   }
// };

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
      return a.map(function (r) {
          return r[c];
      });
  });
}

Board.prototype.print = function () {
  // let tGrid = transpose(this.grid);
  console.log(`------------------`);
  for (let i = 0; i < this.grid.length; i++) {
    let arr = [];

    for (let j = 0; j < this.grid.length; j++) {
      if(this.isOccupied([j, i])){
        arr.push(this.getPiece([j, i]).toString());
      } else {
        arr.push(' ');
      }
    }

    console.log(`|${arr.join('|')}|`);
    console.log(`------------------`);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (!this.isOccupied(pos) && this.isValidPos(pos)){
    for (let index = 0; index < this.DIRS.length; index++) {
      let dir = addDirs(pos, this.DIRS[index])
      let arr = _positionsToFlip(this, dir, color, this.DIRS[index]);
      if (arr !== null && arr[0] !== undefined) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let validMoves = [];

  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (this.isOccupied([i, j]) && !this.isMine([i, j], color)) {
        for (let k = 0; k < this.DIRS.length; k++) {
          let newPos = addDirs([i,j], this.DIRS[k])
          
          if (this.validMove(newPos, color)) {
            validMoves.push(newPos);
          }
        }
      }
    }
  }

  return validMoves;
};

module.exports = Board;

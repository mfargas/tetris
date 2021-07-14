//tetris game
//exercise for creating javascript apps and marrying them to a webpage
import { COLS, ROWS, BLOCK_SIZE } from './js/constants.js';
import { Board } from './js/board';

const canvas = document.getElementById('game-board');
const cntx = canvas.getContext('2d');

cntx.canvas.width = COLS * BLOCK_SIZE;
cntx.canvas.height = ROWS * BLOCK_SIZE;
cntx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();
    console.table(board.grid);
}
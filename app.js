//tetris game
//exercise for creating javascript apps and marrying them to a webpage
import { COLS, ROWS, BLOCK_SIZE, KEY } from './js/constants.js';
import Board from './js/board.js';
import { Piece } from './js/pieces.js';

const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

moves = {
    [KEY.SPACE]: t => ({ ...t, y: t.y + 1}),
    [KEY.LEFT]: t => ({ ...t, x: t.x - 1 }),
    [KEY.RIGHT]: t => ({ ...t, x: t.x + 1 }),
    [KEY.DOWN]: t => ({ ...t, y: t.y + 1 })
};

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx);

function play() {
    board.reset();

    let piece = new Piece(ctx);
        piece.draw();

        board.piece = piece;
}

addEventListener => {
    document.addEventListener('keydown', event => {
        if(moves[event.keyCode]){
            event.preventDefault();
        
            let t = moves[event.keyCode](board.piece);

            if (event.keyCode === KEY.SPACE) {
                // Hard drop
                while (board.valid(t)){
                    board.piece.move(t);
                    t = moves[KEY.DOWN](board.piece);
                }
            } if(board.valid(t)){
                board.piece.move(t);
                ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height);
                board.piece.draw();
            }
        }
    });
}
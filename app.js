//tetris game
//exercise for creating javascript apps using modules
import { COLS, ROWS, BLOCK_SIZE, KEY } from './js/constants.js';
import {Board} from './js/board.js';
import {Piece} from './js/pieces.js';

let canvas = document.getElementById('game-board');
let ctx = canvas.getContext('2d');

const moves = {
    [KEY.SPACE]: t => ({ ...t, y: t.y + 1}),
    [KEY.LEFT]: t => ({ ...t, x: t.x - 1 }),
    [KEY.RIGHT]: t => ({ ...t, x: t.x + 1 }),
    [KEY.DOWN]: t => ({ ...t, y: t.y - 1 })
};

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx);
addEventListener();

function addEventListener(){
    document.addEventListener('keydown', event => {
        if (moves[event.code]){
            event.preventDefault();

            let t = moves[event.code](board.piece);

            if (event.code === KEY.SPACE) {
                // Hard drop
                while (board.valid(t)){
                    board.piece.move(t);
                    t = moves[KEY.DOWN](board.piece);
                }
            } if(board.valid(t)){
                board.piece.move(t);
                board.piece.draw();
            }
        }
    });
}


function reset(){
    board.reset();
}

function play(){
    board.reset()
    console.table(board.grid);

    let piece = new Piece(ctx);
    piece.draw(ctx);

    board.piece = piece;
}

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
let btn = document.querySelector('.start-button');
btn.addEventListener('click', play);
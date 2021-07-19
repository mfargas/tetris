import { COLS, ROWS } from './constants.js';

export default class Board {
    ctx;
    grid;
    piece;
    
    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard(){
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        ); 
    }
}
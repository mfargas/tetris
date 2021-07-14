import COLS from './constants.js';
import ROWS from './constants.js';

export default class Board {
    reset() {
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard(){
        return Array.from({length: ROWS}, () => Array(COLS).fill(0)); 
    }
}
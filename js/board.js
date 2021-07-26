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

    valid(t){
        return t.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = t.x + dx;
                let y = t.y + dy;
                return(
                    this.isEmpty(value) ||
                    (this.insideWalls(x) && 
                    this.aboveFloor(y)
                    ));
            });
        });
    }

    drawBoard() {
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = COLORS[value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }

    isInsideWalls(x, y) {
        return x >= 0 && x < COLS && y <= ROWS;
    }
}
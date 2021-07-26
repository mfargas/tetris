import {COLORS} from './constants.js';

export default class Piece{
    x
    y
    ctx
    color
    shape

    constructor(ctx){
        this.color = 'red';
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ];
        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x, this.y, x, y);
                }
            });
        });
    }

    move(t){
        this.x = t.x;
        this.y = t.y;
        this.shape = t.shape;
    }
}
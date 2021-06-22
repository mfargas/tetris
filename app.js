//tetris game
//exercise for creating javascript apps and marrying them to a webpage

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreBoard = document.querySelector('#score-board')
    const startButton = document.querySelector('#start-button')
    const width = 10;

    const t1 = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const t2 = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const t3 = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const t4 = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const t5 = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const tetriminoes = [ t1, t2, t3, t4, t5]

    let currentPosition = 4
    let random = Math.floor(Math.random()*tetriminoes.length)
    let current = tetriminoes[random][0]

    //draw!
    function draw() {
        current.forEach( index =>  {
            squares[currentPosition + index].classList.add('.tetrimino')
        })
    }

    draw()

    //undraw 
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('.tetrimino')
        })
    }

    timer = setInterval(moveDown, 1250)

    moveDown => {
        undraw()
        currentPosition += width
        draw()
    } 

    //control
    function control(e){
        if(e.keyCode === 37){
            //left arrow
            moveLeft()
        } else if (e.keyCode === 38) {
            //up arrow
            rotate()
        } else if (e.keyCode === 39) {
            //right arrow
            moveRight()
        } else if (e.keyCode === 40) {
            //down arrow
            moveDown()
        }
    }
    document.addEventListener('keyup', control)


})
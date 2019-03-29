const gameCells = document.getElementsByClassName('game-cell');
const gameBoard = document.getElementById('game-board');


let playerTurn = 0;

function checkCell () {
    return event.target.innerHTML
}

function getMaxBetweenRowsAndCols(){
    return Math.max(parseInt(gameBoard.dataset.rowNum), parseInt(gameBoard.dataset.colNum))

}

function getMark () {
    if (!checkCell()) {
        if (playerTurn) {
            playerTurn = !playerTurn;
            event.target.innerHTML = `O`
        }
        else {
            playerTurn = !playerTurn;
            event.target.innerHTML = `X`
        }
    }
}


function winChecker(mark) {
    let counter = 0;
    const pointsToWin = gameBoard.dataset.winSize;
    for (let x = 0; x <= parseInt(gameBoard.dataset.rowNum); x++) {
        for (let y = 0; y < parseInt(gameBoard.dataset.colNum); y++) {
            if (gameCells.dataset.coordinateX === String(x) && gameCells.dataset.coordinateY === String(y)) {


            }


        }
    }
}



for (gameCell of gameCells) {
    gameCell.addEventListener('click', getMark)
}
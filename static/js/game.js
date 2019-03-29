const gameCells = document.getElementsByClassName('game-cell');
const table = document.getElementById('game-board');


let playerTurn = 0;
function getMark () {
    if (playerTurn) {
        playerTurn = !playerTurn;
        return `O`
    }
    else {
        playerTurn = !playerTurn;
        return `X`
    }
    }

for (gameCell of gameCells) {
    gameCell.addEventListener('click', function (e) {
        if (e.target.innerHTML === '') {
            e.target.innerHTML = getMark()
    }});
}

function winChecker() {
    let counter = 0;
    for
}
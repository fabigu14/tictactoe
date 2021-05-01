let sign = ['img/circle.ico', 'img/x.ico'];
let fieldsCoveredByO = [];
let fieldsCoveredByX = [];
let statePlayer = 0;

let winningPositions = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]

];

function showSign(id) {
    if (!fieldsCoveredByO.includes(id) && !fieldsCoveredByX.includes(id)) {
        document.getElementById(id).innerHTML = getSign(statePlayer);
        addToArray(id);
        console.log(statePlayer + ' show sign');
        checkForWinner();
        changeState();
    }
}

function addToArray(id) {
    if (statePlayer === 0) {
        fieldsCoveredByO.push(id);
    }
    else {
        fieldsCoveredByX.push(id);
    }
}

function getSign(statePlayer) {

    let img = `<img class="img-shape" src="${sign[statePlayer]}" alt="game sign">`;
    return img;
}

function changeState() {
    if (statePlayer === 0) {
        statePlayer++;
    }

    else {
        statePlayer--;
    }
    console.log('state changed');
}

function checkForWinner() {
    winningPositions.forEach(winningPosition => {

        if (statePlayer == 0) {

            if (fieldsCoveredByO.includes(winningPosition[0]) && fieldsCoveredByO.includes(winningPosition[1]) && fieldsCoveredByO.includes(winningPosition[2])) {
                console.log('wwinner O');
                showWinner();
            }
        }

        else {


            if (fieldsCoveredByX.includes(winningPosition[0]) && fieldsCoveredByX.includes(winningPosition[1]) && fieldsCoveredByX.includes(winningPosition[2])) {
                console.log('winner X');
                showWinner();
            }
        }
    });
}

function showWinner() {
    setWinnerText();
    setTimeout(function () {
        document.getElementById('playingField').classList.add('d-none');
        document.getElementById('winnerScreen').classList.remove('d-none');
    }, 700)

}

function setWinnerText() {
    console.log(statePlayer + ' winner text');
    document.getElementById('winner').innerHTML = `Spieler ${statePlayer + 1} hat gewonnen!`;
}

function resetGame() {
    statePlayer = 0
    document.getElementById('playingField').classList.remove('d-none');
    document.getElementById('winnerScreen').classList.add('d-none');
    clearGameField();
}

function clearGameField() {
    fieldsCoveredByO.forEach(field => {
        document.getElementById(field).innerHTML = '';
    });

    fieldsCoveredByX.forEach(field => {
        document.getElementById(field).innerHTML = '';
    });

    fieldsCoveredByO = [];
    fieldsCoveredByX = [];
}
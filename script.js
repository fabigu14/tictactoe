let sign = ['img/circle.ico', 'img/x.ico'];
let fieldsCoveredByO = [];
let fieldsCoveredByX = [];
let statePlayer = 0;
let gameHasWinner = false;
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
        checkForWinner();
        checkForDraw();
        changeState();
    }
}

// adds the covered fields to array of active player
function addToArray(id) {
    if (statePlayer === 0) {
        fieldsCoveredByO.push(id);
    }
    else {
        fieldsCoveredByX.push(id);
    }
}

//set img-src for active player-sign
function getSign(statePlayer) {

    let img = `<img class="img-shape" src="${sign[statePlayer]}" alt="game sign">`;
    return img;
}

//changes state of active player
function changeState() {
    if (statePlayer === 0) {
        changeHighlight('player1', 'player2');
        statePlayer++;
    }

    else {
        changeHighlight('player2', 'player1');
        statePlayer--;
    }
}

//changes the Opacityof the active player
function changeHighlight(active, next) {
    document.getElementById(active).classList.add('opacity');
    document.getElementById(next).classList.remove('opacity');
}

//checks if game has a winner
function checkForWinner() {
    winningPositions.forEach(winningPosition => {

        if (statePlayer == 0) {
            if (fieldsCoveredByO.includes(winningPosition[0]) && fieldsCoveredByO.includes(winningPosition[1]) && fieldsCoveredByO.includes(winningPosition[2])) {
                gameHasWinner = true;
                setOverlay();
                setOpacity(winningPositions.indexOf(winningPosition));
                showWinner();
            }
        }

        else {
            if (fieldsCoveredByX.includes(winningPosition[0]) && fieldsCoveredByX.includes(winningPosition[1]) && fieldsCoveredByX.includes(winningPosition[2])) {
                gameHasWinner = true;
                setOverlay();
                setOpacity(winningPositions.indexOf(winningPosition));
                showWinner();
                
            }
        }
    });
}

//setsopacity for the winningPositions
function setOpacity(winningPosition) {
    let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let trIds = [];
    let splicePosition = winningPositions[winningPosition];

    positions.forEach(element => {
       if(element != splicePosition[0] && element != splicePosition[1] && element != splicePosition[2]){
            trIds.push(element);
       }
    });

    trIds.forEach(element => {
        document.getElementById(element).classList.add('opacity');
    });
}

//checks if the game ends with a draw
function checkForDraw() {
    let fieldsCovered = fieldsCoveredByO.length + fieldsCoveredByX.length;

    if (fieldsCovered === 9 && !gameHasWinner) {
        showDraw();
    }
}

//set overlay after the game has been finished, so there is no onClick option anymore
function setOverlay() {
    document.getElementById('overlay').classList.remove('d-none');
}

//shows winnerscreen
function showWinner() {
    setWinnerText();
    setTimeout(function () {
        document.getElementById('playingField').classList.add('d-none');
        document.getElementById('winnerScreen').classList.remove('d-none');
    }, 1000)

}

//sets text for winning player
function setWinnerText() {
    document.getElementById('winner').innerHTML = `Spieler ${statePlayer + 1} hat gewonnen!`;
}

//shows screen if there is no winner at the end of the game
function showDraw() {
    setDrawText();
    setTimeout(function () {
        document.getElementById('playingField').classList.add('d-none');
        document.getElementById('drawScreen').classList.remove('d-none');
    }, 700)
}

//sets text for a draw
function setDrawText() {
    document.getElementById('drawText').innerHTML = `Unentschieden!`;
}

//resets the game, so you can play again
function resetGame() {
    statePlayer = 0;
    gameHasWinner = false;
    document.getElementById('playingField').classList.remove('d-none');
    document.getElementById('winnerScreen').classList.add('d-none');
    document.getElementById('drawScreen').classList.add('d-none');
    document.getElementById('overlay').classList.add('d-none');
    changeHighlight('player2', 'player1')
    clearGameField();
    removeOpacity();
}

//removes all player-signs from gamefield
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

//removes Opacity from the winningPositions
function removeOpacity() {
    for (let i = 1; i < 10; i++) {
        
        document.getElementById(i).classList.remove('opacity');
    }
}
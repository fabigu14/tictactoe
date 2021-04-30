let sign = ['img/circle.ico', 'img/x.ico'];
let fieldsCoveredByO = [];
let fieldsCoveredByX = [];
let statePlayer = 0;

function showSign(id){
    if(!fieldsCoveredByO.includes(id) && !fieldsCoveredByX.includes(id)){
        document.getElementById(id).innerHTML = getSign(statePlayer);
        addToArray(id);
        changeState();
    }
}

function addToArray(id){
    if(statePlayer ===  0){
        fieldsCoveredByO.push(id);
    }
    else{
        fieldsCoveredByX.push(id);
    }
}

function getSign(statePlayer){
   
   let img = `<img class="img-shape" src="${sign[statePlayer]}" alt="game sign">`;
   return img; 
}

function changeState(){
    if(statePlayer === 0){
        statePlayer++;
    }

    else{
        statePlayer--;
    }
}
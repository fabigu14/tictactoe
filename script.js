let sign = ['img/circle.ico', 'img/x.ico'];

let statePlayer = 0;

function showSign(id){
    document.getElementById(id).innerHTML = getSign(statePlayer);
    changeState();
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
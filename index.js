const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;


const winningPositions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
] ; 




/// function to initialize game

function initGame(){
    currentPlayer = "X";
    gameGrid = ["" , "" , "" ,"" , "" ,"" , "" ,"",""] ;
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    
}

initGame();
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents ='none';
        if(currentPlayer === "X"){
            currentPlayer = "O";
        }else{
            currentPlayer = "X";
        }   
        checkGameOver(); 

        gameInfo.innerText = `Current Player - ${currentPlayer}`;
    }
}

boxes.forEach((box, index) =>{
    box.addEventListener("click", () =>{
        handleClick(index);
    })
});


function checkGameOver(){

    newGameBtn.classList.add('active');
}

newGameBtn.addEventListener('click',()=>{
    initGame();
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.style.pointerEvents ='all';
    });
    newGameBtn.classList.remove('active');
});


  
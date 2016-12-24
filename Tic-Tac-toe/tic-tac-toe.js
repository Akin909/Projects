const types = document.querySelectorAll('div.pick-type');
const gameSquares =
document.querySelectorAll('div.game-square')
const reset = document.querySelector('button.reset');
let circle = false;
let cross = false;
let endgame = false;



reset.addEventListener('click',()=>{
  gameSquares.forEach((square)=>{
    if(square.firstChild){
      square.innerHTML = "";
    }
  })
});


types.forEach((type)=>{
  type.addEventListener('click',(event)=> {
    let that = event.target
    that.className.includes('X')?(cross=true,circle=false):(circle=true,cross=false);

  })
})
let filled;
let available;
let moves = [];


gameSquares.forEach((square)=>{
  addEventListener('click',playGame);
})


function playGame(event){
  drawMarker(event)

}


function drawMarker(event){
  let that = event.target;
  that.classList.remove("available")
  if(circle && that.className.includes("game-square")){
    let mark = document.createElement('div');
    mark.classList.add('marker','circle');
    mark.innerHTML += "O"
    that.appendChild(mark);

  }
  if(cross && that.className.includes("game-square")){
    let xmark = document.createElement('div');
    xmark.classList.add('marker','cross');
    xmark.innerHTML += "X";
    that.appendChild(xmark);
  }
  available = document.querySelectorAll(".available");
  if(available.length<2){
    endgame = true;
  }
}

//Creating a state class constructor to track the game's progress

var state = function(old){
  //player who's turn it is
  this.turn = "";
  //number of moves of the AI player
  this.oMovesCount = 0;
  //the result of the game
  this.result = "still running"
  //current board configuration
  this.board = [];
  //Construct Object
  var len = old.board.length;
  this.board = new Array(len)
  for(var i = 0;i<len;i+=1){
    this.board[i] = old.board[i];
  }
  this.oMovesCount = old.oMovesCount;
  this.result = old.result;
  this.turn = old.turn;
}
// Advance game turn state
this.advanceTurn = function(){
  this.turn = this.turn === "X"? "O":"X";
}

//Propagtes empty/available cells in state return an array of their indices

this.emptyCells = function(){
  var indices = [];
  for(var i = 0; i<9; i+=1){
    if(this.board[i]==="E"){
      indices.push(i)
    }
  }
  return indices;
}

//function to check if game is in a terminal state and updates the result

this.isTerminal = function(){
  var boardState = this.board;
  //check rows
  for(var i=0; i<=6; i+=3){
    if(boardState !== "E"&& boardState[i] === boardState[i+1]&& boardState[i+2]){
      this.result = boardState[i]+"-won";
      return true;
    }
  }
//check columns
for(var i = 0; i<= 2; i+=1){
  if(boardState[i] !== "E" && boardState[i]=== boardState[i+3] && boardState[i+3] === boardState[i+6]){
    this.result = boardState[i] + "-won"; //update the state result
    return true;
  }
}
//check diagonals
for(var i = 0; j = 4; i<= 2; i = i + 2, j = j - 2){
  if(boardState!=="E" && boardState[i] == boardState[i+j] && boardState[i + j] === boardState[i + 2*j]){
    this.result = boardState[i] + "-won";//update the state result
    }
  }
var available = this.emptyCells();
if(availbale.length == 0){
    //the game is a draw
    this.result = "draw";//update the state result
    return true;
  }else{
    return false
  }
}

var AI = function(level){
    //private attribute: level of intelligence the player has
    var levelOfIntelligece = level;

    //private attribute: the game the player is playing
    var game = {};
//private recursive function that computes the minimax value of a game state

function minimaxValue(state){...}
/* private function: make the ai player take a blind move
that is: choose cell to place the marker at random
parameter turn [string]: the marker to play either x or o */
function takeABlindMove(turn){
/*private function: make the ai player take a novice move
that is: */
  }
function takeANoviceMove(turn){

  }
function takeAMasterMove(turn){

  }

}

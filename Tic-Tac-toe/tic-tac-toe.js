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

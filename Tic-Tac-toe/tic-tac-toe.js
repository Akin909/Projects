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
    let square = event.target
    square.className.includes('X')
				?(cross=true,circle=false):(circle=true,cross=false);

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

var game = {
	user: '',
	computer:'',
	currentPlayer:'',
	moves: 1,


}




//Creating a state class constructor to track the game's progress
//
// var state = function(old){
//   //player who's turn it is
//   this.turn = "";
//   //number of moves of the AI player
//   this.oMovesCount = 0;
//   //the result of the game
//   this.result = "still running"
//   //current board configuration
//   this.board = [];
//   //Construct Object
//   var len = old.board.length;
//   this.board = new Array(len)
//   for(var i = 0;i<len;i+=1){
//     this.board[i] = old.board[i];
//   }
//   this.oMovesCount = old.oMovesCount;
//   this.result = old.result;
//   this.turn = old.turn;
// }
// // Advance game turn state
// this.advanceTurn = function(){
//   this.turn = this.turn === "X"? "O":"X";
// }
//
// //Propagtes empty/available cells in state return an array of their indices
//
// this.emptyCells = function(){
//   var indices = [];
//   for(var i = 0; i<9; i+=1){
//     if(this.board[i]==="E"){
//       indices.push(i)
//     }
//   }
//   return indices;
// }
//
// //function to check if game is in a terminal state and updates the result
//
// this.isTerminal = function(){
//   var boardState = this.board;
//   //check rows
//   for(var i=0; i<=6; i+=3){
//     if(boardState !== "E"&& boardState[i] === boardState[i+1]&& boardState[i+2]){
//       this.result = boardState[i]+"-won";
//       return true;
//     }
//   }
// //check columns
// for(var i = 0; i<= 2; i+=1){
//   if(boardState[i] !== "E" && boardState[i]=== boardState[i+3] && boardState[i+3] === boardState[i+6]){
//     this.result = boardState[i] + "-won"; //update the state result
//     return true;
//   }
// }
// //check diagonals
// for(var i = 0; j = 4; i<= 2, i = i + 2, j = j - 2){
//   if(boardState!=="E" && boardState[i] == boardState[i+j] && boardState[i + j] === boardState[i + 2*j]){
//     this.result = boardState[i] + "-won";//update the state result
//     }
//   }
// var available = this.emptyCells();
// if(available.length == 0){
//     //the game is a draw
//     this.result = "draw";//update the state result
//     return true;
//   }else{
//     return false
//   }
// }
//
// var AI = function(level){
//     //private attribute: level of intelligence the player has
//     var levelOfIntelligece = level;
//
//     //private attribute: the game the player is playing
//     var game = {};
// //private recursive function that computes the minimax value of a game state
//
// function minimaxValue(state){
//   if(state.isTerminal()) {
//         //a terminal game state is the base case
//         return Game.score(state);
//     }
//     else {
//         var stateScore; // this stores the minimax value we'll compute
//
//         if(state.turn === "X")
//         // X maximizs --> initialize to a value smaller than any possible score
//             stateScore = -1000;
//         else
//         // O minimizes --> initialize to a value larger than any possible score
//             stateScore = 1000;
//
//         var availablePositions = state.emptyCells();
//
//         //enumerate next available states using the info form available positions
//         var availableNextStates = availablePositions.map(function(pos) {
//             var action = new AIAction(pos);
//
//             var nextState = action.applyTo(state);
//
//             return nextState;
//         });
//
//         #<{(| calculate the minimax value for all available next states
//          * and evaluate the current state's value |)}>#
//         availableNextStates.forEach(function(nextState) {
//
//             var nextScore = minimaxValue(nextState); //recursive call
//
//             if(state.turn === "X") {
//                 // X wants to maximize --> update stateScore iff nextScore is larger
//                 if(nextScore > stateScore)
//                     stateScore = nextScore;
//                 }
//             else {
//                 // O wants to minimize --> update stateScore iff nextScore is smaller
//                 if(nextScore < stateScore)
//                     stateScore = nextScore;
//             }
//         });
//
//         //backup the minimax value
//         return stateScore;}
// #<{(| private function: make the ai player take a blind move
// that is: choose cell to place the marker at random
// parameter turn [string]: the marker to play either x or o |)}>#
// function takeABlindMove(turn){
// #<{(|private function: make the ai player take a novice move
// that is: mix between choosing the optimal and suboptimal minimax decisions|)}>#
// var available = game.currentState.emptyCells();
// var randomCell = available[Math.floor(Math.random() * available.length)];
// var action = new AIAction(randomCell);
//
// var next = action.applyTo(game.currentState);
//
// ui.insertAt(randomCell, turn);
//
// game.advanceTo(next);
//   }
// function takeANoviceMove(turn){
//   #<{(| private function: make the ai player take a master move,
//   that is: choose the optimal minimax decision |)}>#
//   var available = game.currentState.emptyCells();
//
// //enumerate and calculate the score for each available actions to the ai player
// var availableActions = available.map(function(pos) {
//     var action =  new AIAction(pos); //create the action object
//
//     //get next state by applying the action
//     var nextState = action.applyTo(game.currentState);
//
//     //calculate and set the action's minimax value
//     action.minimaxVal = minimaxValue(nextState);
//
//     return action;
// });
//
// //sort the enumerated actions list by score
// if(turn === "X")
//     //X maximizes --> decend sort the actions to have the maximum minimax at first
//     availableActions.sort(AIAction.DESCENDING);
//     #<{(|
//  * take the optimal action 40% of the time
//  * take the 1st suboptimal action 60% of the time
//  |)}>#
// var chosenAction;
// if(Math.random()*100 <= 40) {
//     chosenAction = availableActions[0];
// }
// else {
//     if(availableActions.length >= 2) {
//         //if there is two or more available actions, choose the 1st suboptimal
//         chosenAction = availableActions[1];
//     }
//     else {
//         //choose the only available actions
//         chosenAction = availableActions[0];
//     }
// }
// var next = chosenAction.applyTo(game.currentState);
//
// ui.insertAt(chosenAction.movePosition, turn);
//
// game.advanceTo(next);
//   }
// function takeAMasterMove(turn){
//   #<{(| public method to specify the game the ai player will play
//   @param: _game: the game the ai will play |)}>#
//   var available = game.currentState.emptyCells();
//
//   //enumerate and calculate the score for each avaialable actions to the ai player
//   var availableActions = available.map(function(pos) {
//       var action =  new AIAction(pos); //create the action object
//
//       //get next state by applying the action
//       var next = action.applyTo(game.currentState);
//
//       //calculate and set the action's minmax value
//       action.minimaxVal = minimaxValue(next);
//
//       return action;
//   });
//
//   //sort the enumerated actions list by score
//   if(turn === "X")
//       //X maximizes --> descend sort the actions to have the largest minimax at first
//       availableActions.sort(AIAction.DESCENDING);
//   else
//       //O minimizes --> acend sort the actions to have the smallest minimax at first
//       availableActions.sort(AIAction.ASCENDING);
//
//
//   //take the first action as it's the optimal
//   var chosenAction = availableActions[0];
//   var next = chosenAction.applyTo(game.currentState);
//
//   // this just adds an X or an O at the chosen position on the board in the UI
//   ui.insertAt(chosenAction.movePosition, turn);
//
//   // take the game to the next state
//   game.advanceTo(next);
//   }
// this.plays = function(_game){
//     game = _game;
//   }
//
//   #<{(| Notify AI player that it is it's turn, takes a parameter of the player to play|)}>#
//   this.notify = function(turn){
//     switch(levelOfIntelligece){
//       //invoke the desired behavior based on the level chosen
//       case "blind": takeABlindMove(turn); break;
//       case "novice": takeANoviceMove(turn); break;
//       case "master": takeAMasterMove(turn); break;
//     }
//   };
// };
//
// var AIaction = function(pos){
//   //public: the position on the board that the action would put the letter on
//   this.movePosition = pos;
//
//   //public: the minimax value of the state that the action leads to when applied
//   this.minimaxVal = 0;
//   //public: applies the action to a state to get the next state
//   //param = state[State]: the state to apply the action to
//
//   this.applyTo = function(state){
//     var next = new State(state);
//     //put the letter on the board
//     next.board[this.movePosition] = state.turn;
//     if(state.turn === "O")
//       next.oMovesCount++;
//
//     next.advanceTurn();
//     return next;
//   }
// }
//
// #<{(| public static method that defines a rule for sorting AIaction in ascending order @param firstAction[AIAction]:the first action in pairwise sort
// @param secondAction[AIAction]: the second action in pairwise sort|)}>#
//
// AIAction.ASCENDING = function(firstAction,secondAction){
//   if(firstAction.minimaxVal < secondAction.minimaxVal){
//     return -1;//indicates that firstAction goes before secondAction
//     }
//     else if (firstAction.minimaxVal > secondAction.minimaxVal){
//       return 1;//inicates that secondAction goes before firstAction
//     }
//     else {
//       return 0;
//     }
// }
//
// #<{(|
//  * public static method that defines a rule for sorting AIAction in descending manner
//  * @param firstAction [AIAction] : the first action in a pairwise sort
//  * @param secondAction [AIAction]: the second action in a pairwise sort
//  * @return [Number]: -1, 1, or 0
//  |)}>#
// AIAction.DESCENDING = function(firstAction, secondAction) {
//     if(firstAction.minimaxVal > secondAction.minimaxVal)
//         return -1; //indicates that firstAction goes before secondAction
//     else if(firstAction.minimaxVal < secondAction.minimaxVal)
//         return 1; //indicates that secondAction goes before firstAction
//     else
//         return 0; //indicates a tie
// }
// #<{(|
//  * Constructs a game object to be played
//  * @param autoPlayer [AIPlayer] : the AI player to be play the game with
//  |)}>#
// var Game = function(autoPlayer) {
//
//     //public : initialize the ai player for this game
//     this.ai = autoPlayer;
//
//     // public : initialize the game current state to empty board configuration
//     this.currentState = new State();
//
//     //"E" stands for empty board cell
//     this.currentState.board = ["E", "E", "E",
//                                "E", "E", "E",
//                                "E", "E", "E"];
//
//     this.currentState.turn = "X"; //X plays first
//
//     #<{(|
//      * initialize game status to beginning
//      |)}>#
//     this.status = "beginning";
//
//     #<{(|
//      * public function that advances the game to a new state
//      * @param _state [State]: the new state to advance the game to
//      |)}>#
//     this.advanceTo = function(_state) {
//         this.currentState = _state;
//         if(_state.isTerminal()) {
//             this.status = "ended";
//
//             if(_state.result === "X-won")
//                 //X won
//                 ui.switchViewTo("won");
//             else if(_state.result === "O-won")
//                 //X lost
//                 ui.switchViewTo("lost");
//             else
//                 //it's a draw
//                 ui.switchViewTo("draw");
//         }
//         else {
//             //the game is still running
//
//             if(this.currentState.turn === "X") {
//                 ui.switchViewTo("human");
//             }
//             else {
//                 ui.switchViewTo("robot");
//
//                 //notify the AI player its turn has come up
//                 this.ai.notify("O");
//             }
//         }
//     };
//
//     #<{(|
//      * starts the game
//      |)}>#
//     this.start = function() {
//         if(this.status = "beginning") {
//             //invoke advanceTo with the intial state
//             this.advanceTo(this.currentState);
//             this.status = "running";
//         }
//     }
//
// }
// #<{(|
//  * public static function that calculates the score of the x player in a terminal state
//  * @param _state [State]: the state in which the score is calculated
//  * @return [Number]: the score calculated for the human player
//  |)}>#
// Game.score = function(_state) {
//     if(_state.result !== "still running") {
//         if(_state.result === "X-won"){
//             // the x player won
//             return 10 - _state.oMovesCount;
//         }
//         else if(_state.result === "O-won") {
//             //the x player lost
//             return -10 + _state.oMovesCount;
//         }
//         else {
//             //it's a draw
//             return 0;
//         }
//     }
// }

/* The original board
 * O|  |X
 * ------
 * X|  |X
 * ------
 *  |O |O
 * */


var origBoard = ["0", "1", "X", "X", 4, "X", 6, "0", "0"]
	//Human and AI player
var aiPlayer = 'X',
	huPlayer = 'O';

// returns a list of the indexes of empty spots on the board
function emptyIndices(board) {
	return board.filter(square => square !== "O" && square !== "X");
}

// Winning combinations using the board indexies
function winning(board, player) {
	if (
		(board[0] === player && board[1] === player && board[2] === player) ||
		(board[3] === player && board[4] === player && board[5] === player) ||
		(board[6] === player && board[7] === player && board[8] === player) ||
		(board[0] === player && board[3] === player && board[6] === player) ||
		(board[1] === player && board[4] === player && board[7] === player) ||
		(board[2] === player && board[5] === player && board[8] === player) ||
		(board[0] === player && board[4] === player && board[8] === player) ||
		(board[2] === player && board[4] === player && board[6] === player)
	) {
		return true;
	} else {
		return false;
	}
}

// Checks for the terminal  states such as win, lose, and tie and returning
// a value accordingly
if (winning(newBoard,huPlayer)) {
	return {score:-10};
} else if (winning(newBoard,aiPlayer)){
	return {score:10};
} else if (availSpots.length === 0) {
	return {score:0};
}


var moves = []
forEach(function(square,index){
    return ( typeof square === 'string' )
	
});










const squares = document.querySelectorAll('.game-square');
const marker = document.querySelectorAll('.pick-type');

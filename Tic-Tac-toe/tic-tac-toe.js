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
if (winning(newBoard, huPlayer)) {
	return {
		score: -10
	};
} else if (winning(newBoard, aiPlayer)) {
	return {
		score: 10
	};
} else if (availSpots.length === 0) {
	return {
		score: 0
	};
}


var moves = []
	//Move through the available spots
origBoard.forEach(function(square, index) {
	// Create an object for each and store the index of that spot
	var move = {};
	move.index = newBoard[availSpots[index]];

	// set the empty spot to current player
	newBoard[availSpots[index]] = player;
	/*collect the score resulted from calling minimax on the opponent of the
		* current player */

	if (player == aiPlayer) {
		var result = minimax(newBoard,huPlayer)	
		move.score = result.score;
	} else {
		var result = minimax(newBoard,aiPlayer);
	
	}
	// reset the spot to empty
	newBoard[availSpots[index]] = move.index;

	//push the object to the array
	move.push(moves);


});

// if it is the computer's turn loop over the moves and choose the move with
// the highest score
var bestMove;

if (player === aiPlayer) {
	var bestScore = -1000;	
	for (var i = 0, len = moves.length; i < len; i++) {
		if (moves[i].score > bestScore) {
			bestScore = moves[i].score;
			bestMove = i;
		}	
	}
} else {
	// else loop over the moves and choose the move with the lowest score
	var bestScore = 10000;
	for (var i = 0, len = moves.length; i < len; i++) {
		if (moves[i].score < bestScore){
			bestScore = moves[i].score;
			bestMove = i
		}
	}


	// Return the chosen move (object) from the moves array
		return moves[bestMove];

}








const squares = document.querySelectorAll('.game-square');
const marker = document.querySelectorAll('.pick-type');

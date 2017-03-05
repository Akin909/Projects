const squares = document.querySelectorAll('.game-square');
const marker = document.querySelectorAll('.pick-type');
let currentPlayer;
var origBoard = []
let human = huPlayer(choice);
let ai = aiPlayer(huPlayer(choice));

function huPlayer(choice) {
    if (!choice) {
        return 'You need to pick X or O'
    } else if (choice === 'X') {
        return 'X'
    } else if (choice === 'O') {
        return 'O'
    }
}

function aiPlayer(huPlayer) {
    if (!huPlayer) {
        return 'You need to pick X or O'
    } else if (huPlayer === 'X') {
        var ai = 'O'
        return ai;
    } else if (huPlayer === 'O') {
        ai = 'X'
        return ai;
    } else {
        return 'You need to pick X or O'
    }
}


squares.forEach(function(square, index) {
    square.addEventListener('click', (event) => {
        makeMove(event, huPlayer)
    })
});
//**************************************************
//* Choice Modal                                   *
//**************************************************
const modal = document.getElementById('choiceModal');
//Get the button that opens the modal
const button = document.getElementById('modalButton');
//Get the span
const span = document.querySelector('.close');
//Modal should appear on page load
window.onload = function() {
        modal.style.display = 'block';
    }
    // When user clicks button the modal opens
    // button.addEventListener('click', function() {
    //     modal.style.display = 'block';
    // });
    // When user clicks on the span the modal closes
span.addEventListener('click', function() {
    modal.style.display = 'none';
})

document.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})

//**************************************************




/* The original board
 * O|  |X
 * ------
 * X|  |X
 * ------
 *  |O |O
 * */



const pick = document.querySelectorAll(".pick-type");
let choice;
pick.forEach((pick) => {
    pick.addEventListener('click', function(event) {
        const modalButton = document.querySelector('#modalButton');
        choice = pick.innerHTML;
        modal.style.display = 'none';
        if (modalButton) {
            modalButton.style.opacity = '0';
        }
    })
})


//**************************************************
//* Move Making function                           *
//**************************************************
function makeMove(event) {
    console.log('ai', ai);


    var currentBoard = generateBoard(squares)

    let square = event.target;
    if (!currentPlayer) {
        currentPlayer = human;
    } else if (currentPlayer === ai) {
        console.log('above minmax');
        minimax(currentBoard, currentPlayer)
    }
    console.log('currentPlayer', currentPlayer);
    if (square.className.includes('available') && currentPlayer !==
        'You need to pick X or O' && currentPlayer === human) {
        square.classList.remove('available');
        square.innerHTML = currentPlayer;

        if (currentPlayer === human) {
            currentPlayer = ai;
        } else {
            currentPlayer = human;
        }
    }

}


//**************************************************
//* Generate Board                                 *
//**************************************************
function generateBoard(board) {
    var gameSquareArr = Array.from(board)
        // This function should generate the current state of the board for minimax
        // algorithim to work on
    origBoard = gameSquareArr.filter(function(square) {
        if (square.innerHTML === 'X' || square.innerHTML === 'O') {
            return square.innerText;
        }
    })
    gameSquareArr.forEach(function(square) {
        if (square.innerHTML === '' && origBoard.indexOf(square.dataset.id) === -1) {
            origBoard.push(square.dataset.id);
        }
    })
    return origBoard
}

// returns a list of the indexes of empty spots on the board
function emptyIndices(board) {
    board = Array.from(squares);
    return board.filter(square => square.innerHTML !== "O" && square.innerHTML !== "X");
}
//**************************************************
//* Check Win Status                               *
//**************************************************
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

function minimax(newBoard, player) {
    console.log('newBoard', newBoard, 'player', player);
    let availSpots = emptyIndices(origBoard)
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
        }
    }



    var moves = []
        //Move through the available spots
    origBoard.forEach(function(square, index) {
        // Create an object for each and store the index of that spot
        var move = {};
        move.index = newBoard[availSpots[index]];

        // set the empty spot to current player
        newBoard[availSpots[index]] = player;
        // collect the score resulted from calling minimax on the opponent of the
        // current player

        if (player == aiPlayer) {
            var result = minimax(newBoard, huPlayer)
            move.score = result.score;
        } else {
            result = minimax(newBoard, aiPlayer);

        }
        // reset the spot to empty
        newBoard[availSpots[index]] = move.index;

        //push the object to the array
        move.push(moves);


    });

    // if it is the computer's turn loop over the moves and choose the move with
    // the highest score
    var bestMove;
    var bestScore;
    if (player === aiPlayer) {
        bestScore = -1000;
        for (var i = 0, len = moves.length; i < len; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        // else loop over the moves and choose the move with the lowest score
        bestScore = 10000;
        for (i = 0, len = moves.length; i < len; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i
            }
        }
    }

    // Return the chosen move (object) from the moves array
    console.log(moves[bestMove])
    return moves[bestMove];
}

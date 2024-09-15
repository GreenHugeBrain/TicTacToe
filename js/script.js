const map = document.querySelectorAll('.tictactoe div');
let player = 'X';  // Start with player 'X'
let counter = 1;   // Move counter

map.forEach(box => {
    box.addEventListener('click', () => {
        // Only allow placing a symbol if the box is empty
        if (box.textContent === '') {
            box.textContent = player;  // Set the current player's symbol in the clicked box
            counter++;

            // Switch player after each move
            player = (player === 'X') ? 'O' : 'X';

            checkWinner();  // Check if there's a winner
        } else {
            console.log("Box is already taken!");  // Prevent overriding a taken box
        }
    });
});

// Win patterns
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Function to check if there's a winner
const checkWinner = () => {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (
            map[a].textContent && 
            map[a].textContent === map[b].textContent && 
            map[a].textContent === map[c].textContent
        ) {
            alert(`${map[a].textContent} wins!`);
            resetBoard();  // Reset the board after a win
        }
    });
};

// Function to reset the board after a game ends
const resetBoard = () => {
    map.forEach(box => {
        box.textContent = '';  // Clear all cells
    });
    player = 'X';  // Reset player to 'X'
    counter = 1;   // Reset move counter
};

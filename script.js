// Get DOM elements
const userGuessInput = document.getElementById('userGuessInput');
const messageBox = document.getElementById('messageBox');

// Initialize variables
let secretNumber = generateSecretNumber();

// Function to generate a random secret number between 1 and 100
function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to add a digit to the user's guess
function addToGuess(digit) {
    userGuessInput.value += digit;
}

// Function to remove the last digit from the user's guess
function backspace() {
    userGuessInput.value = userGuessInput.value.slice(0, -1);
}

// Function to clear the user's guess input
function cancelInput() {
    userGuessInput.value = '';
}

// Function to check the user's guess
function checkGuess() {
    const guess = parseInt(userGuessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage('Please enter a number between 1 and 100.');
    } else if (guess === secretNumber) {
        showMessage('Congratulations! You guessed the number!');
        secretNumber = generateSecretNumber(); // Generate a new number for the next round
    } else if (guess < secretNumber) {
        showMessage('Too low. Try again!');
    } else {
        showMessage('Too high. Try again!');
    }

    userGuessInput.value = ''; // Clear the input field after each guess
}

// Function to display messages in the message box
function showMessage(message) {
    messageBox.textContent = message;
    messageBox.classList.add('show');

    // Hide the message after a few seconds (optional)
    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 800); // 3000 milliseconds (3 seconds)
}

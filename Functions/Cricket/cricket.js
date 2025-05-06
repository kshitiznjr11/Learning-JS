
function generateComputerChoice () {
    //This will generate random number between 0 and 1
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
       return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            return 'You Won!';
        } else if (computerMove === 'Bat') {
            return `It's a tie!`;
        } else if (computerMove === 'Stump') {
            return 'Computer Won!';
        }
    } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            return `It's a tie!`;
        } else if (computerMove === 'Bat') {
            return 'Computer Won!';
        } else if (computerMove === 'Stump') {
            return 'You Won!';
        }
    } else {
        if (computerMove === 'Ball') {
            return 'Computer Won!';
        } else if (computerMove === 'Bat') {
            return 'You Won!';
        } else if (computerMove === 'Stump') {
            return `It's a tie!`;
        }
    }
}

function showResult(userMove, computerMove, result) {
    alert(`You have choosen ${userMove}. Computer choice is ${computerMove}. ${result}`);
}
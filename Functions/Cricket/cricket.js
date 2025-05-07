let score = {
    win: 0,
    lost: 0,
    tie: 0,
    displayScore: function () {
        return `Number of Matches Won:${score.win} Lost:${score.lost} Tie:${score.tie}`;
    }
}

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
            score.win++;
            return 'You Won!';
        } else if (computerMove === 'Bat') {
            score.tie++;
            return `It's a tie!`;
        } else if (computerMove === 'Stump') {
            score.lost++;
            return 'Computer Won!';
        }
    } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.tie++;
            return `It's a tie!`;
        } else if (computerMove === 'Bat') {
            score.lost++;
            return 'Computer Won!';
        } else if (computerMove === 'Stump') {
            score.win++;
            return 'You Won!';
        }
    } else {
        if (computerMove === 'Ball') {
            score.lost++;
            return 'Computer Won!';
        } else if (computerMove === 'Bat') {
            score.win++;
            return 'You Won!';
        } else if (computerMove === 'Stump') {
            score.tie++;
            return `It's a tie!`;
        }
    }
}

function showResult(userMove, computerMove, result) {
    alert(`You have choosen ${userMove}. Computer choice is ${computerMove}
        
    ${result}
    
    ${score.displayScore()}`);
}
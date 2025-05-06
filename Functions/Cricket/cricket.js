let computerChoice;
function generateComputerChoice () {
    //This will generate random number between 0 and 1
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }
}
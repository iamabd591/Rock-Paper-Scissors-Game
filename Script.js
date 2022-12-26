const ComputerChoice = document.getElementById('computer-choice');
const UserChoice = document.getElementById('user-choice');
const DisplayResult = document.getElementById('game-result');

let playerChoice;
let ComputerplayChoice;

const possibleChoice = document.querySelectorAll('button');
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    UserChoice.innerHTML = playerChoice;
    ComputerChoiceGenerator();
    Result();
}))
function ComputerChoiceGenerator() {
    const randomchoic = Math.floor(Math.random() * 3) + 1;

    if (randomchoic === 1) {
        ComputerplayChoice = ' Rock'
    }
    if (randomchoic === 2) {
        ComputerplayChoice = ' Paper'
    }
    if (randomchoic === 3) {
        ComputerplayChoice = ' Scissors'
    }
    ComputerChoice.innerHTML = ComputerplayChoice;
}
let result;
function Result() {
    if (ComputerplayChoice === playerChoice) {
        result = ' Its A Draw';
    }
    if (ComputerplayChoice === ' Rock' && playerChoice === " Paper") {
        result = ' You Win';
    }
    if (ComputerplayChoice === ' Rock' && playerChoice === " Scissors") {
        result = ' You Lost';
    }
    if (ComputerplayChoice === 'Paper' && playerChoice === " Scissors") {
        result = ' You Win';
    }
    if (ComputerplayChoice === 'Paper' && playerChoice === " Rock") {
        result = ' You Lost';
    }
    if (ComputerplayChoice === ' Scissors' && playerChoice === " Rock") {
        result = ' You Win';
    }
    if (ComputerplayChoice === ' Scissors' && playerChoice === " Paper") {
        result = 'You Lost';
    }
    DisplayResult.innerHTML = result;
}
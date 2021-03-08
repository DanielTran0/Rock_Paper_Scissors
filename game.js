// Random Computer Move
function computerMove() {
    let move = ['compRock', 'compPaper', 'compScissors'];
    let random = Math.floor(Math.random() * 3);
    return move[random];
}

// Start the game
function gameStart() {
    start = true;
    gameOver = false;
    playerCounter = 0;
    computerCounter = 0;
    gameScore();
}

// Simulate a round
function playRound (e) {
    if (gameOver || !start) {
        return;
    }
    compMove = computerMove();
    userMove = e.target.id;
    console.log(compMove)
    if (userMove == compMove) {
        gameScore();
        setTimeout(() => roundWinner('tie', compMove), 200)
    }
    else if ((userMove == 'compRock' && compMove == 'compScissors') || (userMove == 'compPaper' && compMove == 'compRock') || 
             (userMove == 'compScissors' && compMove == 'compPaper')) {
        gameScore('player');
        setTimeout(() => roundWinner('player', compMove), 200)
    }
    else {
        gameScore('computer');
        setTimeout(() => roundWinner('computer', compMove), 200)
    }
}

// Update game score
function gameScore(winner) {
    if (winner == 'player') {
        playerCounter += 1;
    }
    else if (winner == 'computer') {
        computerCounter += 1;
    }
    score = document.querySelector('.score');
    para = document.querySelector('.points');
    para.textContent = `${playerCounter}  :  ${computerCounter}`;
    if (playerCounter == 5 || computerCounter == 5) {
        gameOver = true;
    }
}

// Tells user what moves were made and who won
function roundWinner(winner, compMove) {
    para = document.querySelector('.winner');
    para.textContent = ''
    if (playerCounter == 5) {
        image(compMove);
        winner = document.createElement('p')
        winner.textContent = 'You win. You have defeated the computer.';
        para.appendChild(winner)
        start = document.querySelector('#start')
        start.textContent ='Play Again'
        return;
    }
    else if (computerCounter == 5) {
        image(compMove);
        winner = document.createElement('p')
        winner.textContent = 'You Lose. The computer has defeated you. Better luck next time.';
        para.appendChild(winner)
        start = document.querySelector('#start')
        start.textContent ='Play Again'
        return;
    }
    if (winner == 'tie') {
        para.textContent += ' It is a tie Round.';
    }
    else if (winner == 'player') {
        para.textContent += ' You win the round.';
    }
    else if (winner == 'computer') {
        para.textContent += ' The computer wins the round.';
    }
    else {
        para.textContent = '';
    }
    image(compMove);

}

function image(compMove) {
    const imgRock = document.querySelector('.compImg#compRock');
    const imgPaper = document.querySelector('.compImg#compPaper');
    const imgScissors = document.querySelector('.compImg#compScissors');

    imgRock.classList.remove('active')
    imgPaper.classList.remove('active')
    imgScissors.classList.remove('active')

    setTimeout(() => showCompActiveMove(compMove), 50)
}

function showCompActiveMove() {
    if (compMove == 'compRock') {
        const imgRock = document.querySelector('.compImg#compRock');
        imgRock.classList.add('active')
    }
    else if (compMove == 'compPaper') {
        const img = document.querySelector('.compImg#compPaper');
        img.classList.add('active')
    }
    else if (compMove == 'compScissors') {
        const img = document.querySelector('.compImg#compScissors');
        img.classList.add('active')
    }
}

let playerCounter = 0;
let computerCounter = 0;
let start = false;
let gameOver = false;

const startButton = document.querySelector('#start');
startButton.addEventListener('click', gameStart);

const userButtons = document.querySelectorAll('.playerMove');
userButtons.forEach(button => {
    button.addEventListener('click', playRound);
});

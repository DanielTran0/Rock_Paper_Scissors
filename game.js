// Random Computer Move
function computerPlay()
{
    let computerMove = ['rock', 'paper', 'scissors']
    let number = Math.floor(Math.random() * 3);
    return computerMove[number]
}

// Player Move
function playerPlay()
{
    let playerMove = prompt('Make a move: ')
    return playerMove.toLowerCase().trim()
} 

// Simulate a round
function playRound (playerMove, computerMove)
{
    if (playerMove == computerMove)
    {
        return 'tie'
    }
    else if ((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'paper' && computerMove == 'rock') || 
             (playerMove == 'scissors' && computerMove == 'paper'))
    {
        return 'player'
    }
    else
    {
        return 'computer'
    }

}

// Simulate a game with 5 rounds
function playGame()
{
    let playerCounter = 0
    let computerCounter = 0
    gameOver = false

    while (!gameOver)
    {
        winner = playRound(playerPlay(), computerPlay())
        if (winner == 'player')
        {
            playerCounter++
            console.log('player wins the round')
        }
        else if (winner == 'computer')
        {
            computerCounter++
            console.log('computer wins the round')
        }
        else 
        {
            console.log('tie round')
        }

        if (playerCounter == 5 || computerCounter ==5)
        {
            gameOver = true
        }
    }
    
    if (playerCounter > computerCounter)
    {
        return 'Player Wins'
    }
    else 
    {
        return 'Computer Wins'
    }
}

console.log(playGame())

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        result = "Empate";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "Ganhou";
    } else {
        result = "Perdeu";
    }

    // Display the result
    document.getElementById('result').innerHTML = `Escolheu: ${playerChoice}. Computador escolheu: ${computerChoice}. ${result}`;
}
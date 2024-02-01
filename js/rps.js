function playGame(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        result = "Empate";
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = "Ganhou";
    } else {
        result = "Perdeu";
    }

    // Display the result
    document.getElementById('result').innerHTML = `Escolheu: ${playerChoice}. Computador escolheu: ${computerChoice}. ${result}`;
}
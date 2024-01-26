function playGame(playerChoice) {
    const choices = ['pedra', 'papel', 'tessoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        result = "Empate";
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tessoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tessoura' && computerChoice === 'papel')
    ) {
        result = "Ganhou";
    } else {
        result = "Perdeu";
    }

    // Display the result
    document.getElementById('result').innerHTML = `Escolheu: ${playerChoice}. Computador escolheu: ${computerChoice}. ${result}`;
}
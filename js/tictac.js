const board = document.getElementById("board");
      let currentPlayer = "X";
      let gameBoard = ["", "", "", "", "", "", "", "", ""];
      let gameActive = true;

      function renderBoard() {
        board.innerHTML = "";
        for (let i = 0; i < 9; i++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.index = i;
          cell.textContent = gameBoard[i];
          cell.addEventListener("click", handleCellClick);
          board.appendChild(cell);
        }
      }

      function handleCellClick(event) {
        const index = event.target.dataset.index;

        if (gameBoard[index] === "" && gameActive) {
          gameBoard[index] = currentPlayer;
          renderBoard();
          if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
          } else if (gameBoard.every((cell) => cell !== "")) {
            alert("It's a draw!");
            gameActive = false;
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      }

      function checkWinner() {
        const winPatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        return winPatterns.some((pattern) => {
          const [a, b, c] = pattern;
          return (
            gameBoard[a] !== "" &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[b] === gameBoard[c]
          );
        });
      }

      renderBoard();
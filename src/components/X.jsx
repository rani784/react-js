
import React, { useState } from "react";
import "./O.css";

function X() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== "");

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = isXTurn ? "X" : "O";

    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="game-container">
      <div className="game-card">

        <h1>XO ARENA</h1>
        <p className="subtitle">TIC TAC TOE GAME</p>

        <div className="status">
          {winner ? (
            <h2>🎉 Player {winner} Wins!</h2>
          ) : isDraw ? (
            <h2>🤝 Match Draw!</h2>
          ) : (
            <h2>
              Player {isXTurn ? "X" : "O"}'s Turn
            </h2>
          )}
        </div>

        <div className="game-board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`cell ${cell === "X" ? "x-cell" : "o-cell"}`}
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner || isDraw}
            >
              {cell}
            </button>
          ))}
        </div>

        <button className="restart-btn" onClick={restartGame}>
          ↻ Restart Game
        </button>

        <p className="footer">
          Designed with React useState
        </p>

      </div>
    </div>
  );
}

export default X;
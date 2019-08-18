import React, { Fragment, useState, useEffect, useRef } from 'react';

function Pawn(props) {
  const { x, y, color, setActivePiece, board } = props;

  function selectPiece() {
    const selected = { x, y, color, piece: 'pawn', availableMoves: getPosibleMoves };
    setActivePiece(selected);
  }

  const getPosibleMoves = () => {
    const posibleMoves = [];
    if (color === 'white') {
      if (board[x - 2]) {
        posibleMoves.push({ x: x - 2, y });
      }
      if (board[x - 1]) {
        posibleMoves.push({ x: x - 1, y });
      }
      if (board[x - 1] && board[y - 1]) {
        posibleMoves.push({ x: x - 1, y: y - 1 });
      }
      if (board[x - 1] && board[y + 1]) {
        posibleMoves.push({ x: x - 1, y: y + 1 });
      }
    }
    return posibleMoves;
  };

  function renderIcon() {
    return (
      <button onClick={selectPiece}>
        <img
          x={x}
          y={y}
          height={50}
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1024px-Chess_plt45.svg.png"
        />
      </button>
    );
  }

  return renderIcon();
}

export default Pawn;

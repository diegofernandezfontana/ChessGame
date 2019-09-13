import React, { Fragment, useState, useEffect, useRef } from 'react';

function Pawn(props) {
  const { x, y, color, label, setActivePiece, board } = props;

  function selectPiece() {
    const selected = { x, y, color, piece: 'pawn', availableMoves: getPosibleMoves, label };

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

    if (color === 'black') {
      if (board[x + 2]) {
        posibleMoves.push({ x: x + 2, y });
      }
      if (board[x + 1]) {
        posibleMoves.push({ x: x + 1, y });
      }
      if (board[x + 1] && board[y + 1]) {
        posibleMoves.push({ x: x + 1, y: y - 1 });
      }
      if (board[x + 1] && board[y + 1]) {
        posibleMoves.push({ x: x + 1, y: y + 1 });
      }
    }
    console.log(posibleMoves, 'Posible moves');
    return posibleMoves;
  };

  function renderPawnColor() {
    if (color === 'white') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1024px-Chess_plt45.svg.png';
    }
    return 'https://www.pinclipart.com/picdir/big/2-20427_chess-piece-pawn-queen-knight-black-pawn-chess.png';
  }

  function renderIcon() {
    return (
      <div onClick={selectPiece}>
        <img x={x} y={y} height={30} width={30} src={renderPawnColor()} />
      </div>
    );
  }

  return renderIcon();
}

export default Pawn;

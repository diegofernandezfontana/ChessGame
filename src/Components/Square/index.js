import React, { Component } from 'react';

import Pawn from '../Pieces/Pawn';

import { Wrapper } from './Styles';

function Square(props) {
  const { piece, isTarget, handleSquareClick, position, handleSetActivePiece, board } = props;
  const [x, y] = position;

  function setSquareColor() {
    if ((x + y) % 2) {
      return '#0c352c';
    }
    return 'white';
  }

  function renderPiece() {
    const { color, isTarget, label } = piece;
    if (piece.label === 'bP' || piece.label === 'wP') {
      return <Pawn x={x} y={y} setActivePiece={handleSetActivePiece} color={color} board={board} label={label} />;
    }
    if (piece === 'X') {
      return 'X';
    }

    return piece;
  }

  function isSquareTarget() {
    const { isTarget } = piece;
    return isTarget;
  }

  return (
    <Wrapper backgroundColor={setSquareColor()} isTarget={isSquareTarget()} onClick={handleSquareClick}>
      {renderPiece()}
    </Wrapper>
  );
}

export default Square;

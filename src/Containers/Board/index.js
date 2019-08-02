import React, { Fragment, useState, useEffect } from 'react';

import Square from '../../Components/Square';
import { defaultPosition } from './intialPositions';
import { Column } from './styles';
import Pawn from '../../Components/Pieces/Pawn';

function MainBoard() {
  const board = defaultPosition;
  const [activePiece, setActivePiece] = useState({});

  useEffect(() => {}, [activePiece]);

  function initializeBoard() {
    return renderAllRows();
  }

  function handleSetActivePiece(e) {
    console.log(e.target.values, 'E');
    setActivePiece(e);
  }

  function getAvailableMoves(e) {
    // consol
    // console.log(e, 'e');
    // console.log('TENGO LOS MOVIMIENTOS');
  }

  function renderAllRows() {
    return board.map((row, rowIndex) => {
      return <Column>{renderRow({ rowIndex })}</Column>;
    });
  }

  function renderRow({ rowIndex }) {
    return board[rowIndex].map((piece, index) => {
      return renderSquare({ x: rowIndex, y: index, piece });
    });
  }

  function renderSquare({ x, y, piece }) {
    return <Square backgroundColor={setSquareColor({ x, y })}> {renderPiece({ piece, x, y })} </Square>;
  }

  function renderPiece({ x, y, piece }) {
    if (piece === 'bP' || piece === 'wP') {
      return <Pawn x={x} y={y} getAvailableMoves={getAvailableMoves} setActivePiece={handleSetActivePiece} />;
    }
    return piece;
  }

  function setSquareColor({ x, y }) {
    if ((x + y) % 2) {
      return '#0c352c';
    }

    return 'white';
  }
  console.log(activePiece);

  return initializeBoard();
}

export default MainBoard;

import React, { Fragment } from 'react';
import Square from '../../Components/Square';

import { defaultPosition } from './intialPositions';
import { Column } from './styles';

function MainBoard() {
  const board = defaultPosition;

  function initializeBoard() {
    return renderAllRows();
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
    return (
      <Square backgroundColor={setSquareColor({ x, y })}>
        <p>{piece}</p>
      </Square>
    );
  }

  function setSquareColor({ x, y }) {
    if ((x + y) % 2) {
      return '#0c352c';
    }

    return 'white';
  }

  return initializeBoard();
}

export default MainBoard;

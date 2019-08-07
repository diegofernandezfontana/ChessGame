import React, { Fragment, useState, useEffect } from 'react';

import Square from '../../Components/Square';
import { defaultPosition } from './intialPositions';
import { Column } from './styles';
import Pawn from '../../Components/Pieces/Pawn';

function MainBoard() {
  const [newBoard, setNewBoard] = useState(defaultPosition);
  const board = defaultPosition;
  const [activePiece, setActivePiece] = useState({});

  useEffect(() => {
    console.log(activePiece, 'ACTIVE PIEZE UseEFFECT');
    if (activePiece && activePiece.color) {
      const pieceCanMoveTo = activePiece.availableMoves();
      renderPosibleMoves(pieceCanMoveTo);
    }
  }, [board, activePiece]);

  function initializeBoard() {
    return renderAllRows();
  }

  const handleSetActivePiece = piece => {
    console.log('DISPARO ESTO');
    setActivePiece(piece);
  };

  function renderPosibleMoves(arrayOfMoves) {
    arrayOfMoves.forEach(square => {
      board[square.x][square.y] = 'X';
    });
  }

  function renderAllRows() {
    //    console.log(board);
    console.log('ENTRO AL RENDER ALL ROWS');
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
    return <Square backgroundColor={setSquareColor({ x, y })}>{renderPiece({ piece, x, y })}</Square>;
  }

  function renderPiece({ x, y, piece }) {
    //    console.log(piece, 'PIECE');
    if (piece === 'bP' || piece === 'wP') {
      return <Pawn x={x} y={y} setActivePiece={handleSetActivePiece} color="white" board={board} />;
    }
    return piece;
  }

  function setSquareColor({ x, y }) {
    if ((x + y) % 2) {
      return '#0c352c';
    }

    return 'white';
  }

  return newBoard;
  //return initializeBoard();
}

export default MainBoard;

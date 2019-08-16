import React, { Fragment, useRef, useState, useEffect } from 'react';

import Square from '../../Components/Square';
import { defaultPosition } from './intialPositions';
import { Column } from './styles';
import Pawn from '../../Components/Pieces/Pawn';

function MainBoard() {
  const [board, setBoard] = useState(defaultPosition);
  const [activePiece, setActivePiece] = useState({});
  const piezaRef = useRef();
  const boardRef = useRef();

  useEffect(() => {
    if (Object.keys(activePiece).length) {
      const posibleMoves = activePiece.availableMoves();
      renderPosibleMoves(posibleMoves);
    }
  }, [board[activePiece.x], board[activePiece.y]]);

  function renderPosibleMoves(posibleMoves) {
    const newBoard = boardRef.current;
    posibleMoves.forEach(square => {
      newBoard[square.x][square.y] = 'X';
    });
    setBoard(newBoard);
    initializeBoard();
  }
  const handleSetActivePiece = piece => {
    piezaRef.current = activePiece;
    boardRef.current = board;
    setActivePiece(piece);
  };

  const initializeBoard = () => {
    return renderAllRows();
  };

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
    return <Square backgroundColor={setSquareColor({ x, y })}>{renderPiece({ piece, x, y })}</Square>;
  }

  function renderPiece({ x, y, piece }) {
    if (piece === 'bP' || piece === 'wP') {
      return <Pawn x={x} y={y} setActivePiece={handleSetActivePiece} color="white" board={board} />;
    }
    if (piece === 'X') {
      return 'X';
    }
    return piece;
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

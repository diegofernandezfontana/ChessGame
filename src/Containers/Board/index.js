import React, { useState, useEffect } from 'react';

import Square from '../../Components/Square';
import { defaultPosition } from './intialPositions';
import { Column } from './styles';
import Pawn from '../../Components/Pieces/Pawn';

function MainBoard() {
  const [board, setBoard] = useState(defaultPosition);
  const [activePiece, setActivePiece] = useState({});

  useEffect(() => {
    if (Object.keys(activePiece).length) {
      const posibleMoves = activePiece.availableMoves();
      renderPosibleMoves(posibleMoves);
    }
  }, [board[activePiece.x], board[activePiece.y]]);

  useEffect(() => {
    if (Object.keys(activePiece).length) {
      const posibleMoves = activePiece.availableMoves();
      renderPosibleMoves(posibleMoves);
    }
  }, [activePiece]);

  function renderPosibleMoves(posibleMoves) {
    const newBoard = Object.assign([], board);

    const clearedBoard = clearPosibleMoves(newBoard);
    posibleMoves.forEach(square => {
      clearedBoard[square.x][square.y] = 'X';
    });

    setBoard(clearedBoard);
  }

  function clearPosibleMoves(boardToClearX) {
    return board.map((row, rowIndex) => {
      return row.map((column, columnIndex) => {
        if (column === 'X') {
          return '';
        }
        return column;
      });
    });
  }

  const handleSetActivePiece = piece => {
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

  const movePieceToPosibleMove = ({ x, y }) => () => {
    const canPieveMoveToThisSquare = board[x][y] === 'X';
    const clearedBoard = clearPosibleMoves();
    const newBoard = Object.assign([], clearedBoard);
    if (canPieveMoveToThisSquare) {
      const { x: activePieceX, y: activePieceY } = activePiece;
      newBoard[x][y] = 'wP';
      newBoard[activePieceX][activePieceY] = '';
      setActivePiece({});
      setBoard(newBoard);
    }
  };

  function renderSquare({ x, y, piece }) {
    return (
      <Square position={[x, y]} handleSquareClick={movePieceToPosibleMove({ x, y })}>
        {renderPiece({ piece, x, y })}
      </Square>
    );
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

  return initializeBoard();
}

export default MainBoard;

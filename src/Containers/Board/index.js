import React, { useState, useEffect } from 'react';

import Square from '../../Components/Square';
import { defaultPosition } from './intialPositions';
import { Column } from './styles';

function MainBoard() {
  const [board, setBoard] = useState(defaultPosition);
  const [activePiece, setActivePiece] = useState({});

  useEffect(() => {
    if (Object.keys(activePiece).length) {
      const posibleMoves = activePiece.availableMoves();
      renderPosibleMoves(posibleMoves);
    }
  }, [activePiece]);

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

  function renderSquare({ x, y, piece }) {
    return (
      <Square
        board={board}
        piece={piece}
        position={[x, y]}
        handleSetActivePiece={handleSetActivePiece}
        handleSquareClick={movePieceToPosibleMove({ x, y })}
      />
    );
  }

  function renderPosibleMoves(posibleMoves) {
    const clearedBoard = clearPosibleMoves();
    const newBoard = Object.assign([], clearedBoard);
    posibleMoves.forEach(square => {
      if (Object.keys(newBoard[square.x][square.y]).length) {
        const replacedObject = Object.assign({}, newBoard[square.x][square.y], { isTarget: true });

        newBoard[square.x][square.y] = replacedObject;
      } else {
        newBoard[square.x][square.y] = 'X';
      }
    });

    setBoard(newBoard);
  }

  function clearPosibleMoves() {
    return board.map(row => {
      return row.map(column => {
        if (column === 'X') {
          return '';
        }
        if (Object.keys(column).length && typeof column !== 'string') {
          column.isTarget = false;
        }
        return column;
      });
    });
  }

  function isEnemyPieceInSquare({ squareSelectedX, squareSelectedY }) {
    const doesSquareHavePiece = Object.keys(board[squareSelectedX][squareSelectedY]).length > 0;
    if (activePiece && activePiece.color && doesSquareHavePiece && board[squareSelectedX][squareSelectedY].isTarget) {
      return activePiece.color !== board[squareSelectedX][squareSelectedY].color || false;
    }
    return false;
  }

  const movePieceToPosibleMove = ({ x, y }) => () => {
    const isSquareEmpty = board[x][y] === 'X';
    const isEnemyPiece = isEnemyPieceInSquare({ squareSelectedX: x, squareSelectedY: y });
    console.log('LLEGO ACA');
    console.log(isSquareEmpty, isEnemyPiece, 'HAY PIEZXAS ENEMIGAS');
    const clearedBoard = clearPosibleMoves();
    const newBoard = Object.assign([], clearedBoard);
    if (isSquareEmpty || isEnemyPiece) {
      const { x: activePieceX, y: activePieceY } = activePiece;

      if (activePiece) {
        const { piece, color, label, isTarget } = activePiece;
        const pieceToMove = { piece: piece, color: color, label: 'bP', isTarget: false };
        newBoard[x][y] = pieceToMove;
      }
      console.log(newBoard, 'new Board');
      newBoard[activePieceX][activePieceY] = '';
      setActivePiece({});
      setBoard(newBoard);
    }
  };

  return initializeBoard();
}

export default MainBoard;

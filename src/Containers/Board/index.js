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
      //posibleMoves -> [{x: 1, y: 2}, {x:2, y2}...]
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

    if (isSquareEmpty || isEnemyPiece) {
      const clearedBoard = clearPosibleMoves();
      const newBoard = Object.assign([], clearedBoard);
      const { x: activePieceX, y: activePieceY } = activePiece;

      if (activePiece) {
        const whitePawn = { piece: 'pawn', color: 'white', label: 'wP', isTarget: false };

        newBoard[x][y] = whitePawn;
      }
      newBoard[activePieceX][activePieceY] = '';
      setActivePiece({});
      setBoard(newBoard);
    }
  };

  return initializeBoard();
}

export default MainBoard;

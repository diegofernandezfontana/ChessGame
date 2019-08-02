import React, { Fragment, useState, useEffect } from 'react';

function Pawn(props) {
  const [isActive, setIsActive] = useState(false);

  const { x, y, getAvailableMoves, setActivePiece } = props;
  useEffect(() => {
    if (isActive) {
      posibleMoves();
    }
  }, [isActive]);

  function posibleMoves() {
    return getAvailableMoves({ currentPosition: { x, y }, posibleMoves: [[x - 1], [x - 2]] });
  }

  function selectPiece(e) {
    setIsActive(!isActive);
    setActivePiece(e);
  }

  function renderIcon() {
    return (
      <button onClick={selectPiece}>
        <img
          x={x}
          y={y}
          height={isActive ? 70 : 50}
          width={isActive ? 70 : 50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1024px-Chess_plt45.svg.png"
        />
      </button>
    );
  }

  return renderIcon();
}

export default Pawn;

import React, { Fragment } from "react";
import Square from "../../Components/Square";

import { Column } from "./styles";

function Board() {
  const totalRows = Array(8).fill();
  const totalColumns = Array(8).fill();

  function initializeBoard() {
    setUpBoard();
    console.log(totalRows, "total Rows");
    console.log(totalColumns, "total COlumns");

    return renderAllRows();
  }

  function setUpBoard() {
    return totalRows.map((row, boardIndex) => {
      return (totalRows[boardIndex] = totalColumns);
    });
  }

  function renderAllRows() {
    return (
      <Fragment>
        <Column>{renderRow(1)}</Column>
        <Column>{renderRow(2)}</Column>
        <Column>{renderRow(3)}</Column>
        <Column>{renderRow(4)}</Column>
        <Column>{renderRow(5)}</Column>
        <Column>{renderRow(6)}</Column>
        <Column>{renderRow(7)}</Column>
        <Column>{renderRow(8)}</Column>
      </Fragment>
    );
  }

  const renderRow = rowNumber => {
    return totalRows.map((square, index) => {
      return renderSquare(index + rowNumber);
    });
  };

  const renderSquare = index => {
    return <Square backgroundColor={setSquareColor(index)}> </Square>;
  };

  function setSquareColor(index) {
    if (index % 2) {
      return "#0c352c";
    }
    return "white";
  }

  return initializeBoard();
}

export default Board;

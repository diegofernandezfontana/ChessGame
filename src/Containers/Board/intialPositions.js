import Pawn from '../../Components/Pieces/Pawn';

const whitePawn = { piece: 'pawn', color: 'white', label: 'wP', isTarget: false };
const blackPawn = { piece: 'pawn', color: 'black', label: 'bP', isTarget: false };
const extraPiece = { piece: 'king', color: 'white', label: 'wK', isTarget: false };
export const defaultPosition = [
  // ['bR', 'bB', 'bH', 'bQ', 'bK', 'bH', 'bB', 'bR'],
  [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
  [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
  [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
];

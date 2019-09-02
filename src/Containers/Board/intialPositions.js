import Pawn from '../../Components/Pieces/Pawn';

const whitePawn = { piece: 'pawn', color: 'white', label: 'wP', isTarget: false };
const blackPawn = { piece: 'pawn', color: 'black', label: 'bP', isTarget: false };
const blackPawn1 = new Pawn({ x: 2, y: 2, color: 'black', isTarget: false });

const whiteBishop = { piece: 'bishop', color: 'white', label: 'wB', isTarget: false };
export const defaultPosition = [
  // ['bR', 'bB', 'bH', 'bQ', 'bK', 'bH', 'bB', 'bR'],
  [
    new Pawn({ x: 0, y: 0, color: 'black', isTarget: false }),
    blackPawn,
    blackPawn,
    blackPawn,
    blackPawn,
    blackPawn,
    blackPawn,
    blackPawn,
  ],
  [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
  ['wR', 'wB', 'wH', 'wQ', 'wK', 'wH', 'wB', 'wR'],
];

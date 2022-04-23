import { BoardWrapper } from "../styles/BoardWrapper";
import { Square } from "./Square";

export const Board = ({ gameBoard, areaClicked }) => {
  return (
    <BoardWrapper>
      {gameBoard.map((playerMark, x_id) => (
        <Square
          key={x_id}
          squareId={x_id}
          playerMark={playerMark}
          onClick={areaClicked}
        />
      ))}
    </BoardWrapper>
  );
};

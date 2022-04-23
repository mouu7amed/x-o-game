import { useCallback } from "react";

export const Square = ({ playerMark, squareId, onClick }) => {
  const callback = useCallback(() => onClick(squareId), [squareId, onClick]);
  return (
    <button className="square" onClick={callback}>
      {playerMark}
    </button>
  );
};

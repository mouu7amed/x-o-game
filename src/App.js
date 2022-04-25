import { useReducer } from "react";
import { Board } from "./components/Board";
import { AppWrapper } from "./styles/AppWrapper";
import { GlobalStyles } from "./styles/GlobalStyles";

const x = "X";
const o = "O";

const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = {
  gameBoard: Array(9).fill(""),
  playerMark: x,
  winningPlayer: null,
  gameOver: false,
};

const actionTypes = {
  areaClicked: "areaClicked",
  resetGame: "resetGame",
};

const useActions = (dispatch, state) => ({
  areaClicked: (x_id) => {
    dispatch({
      type: actionTypes.areaClicked,
      payload: x_id,
    });
  },
  resetGame: () => {
    dispatch({
      type: actionTypes.resetGame,
    });
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.areaClicked:
      const x_id = action.payload;
      const playedArea = !!state.gameBoard[x_id];
      if (state.winningPlayer || playedArea) {
        return state;
      }

      //gameBoard
      const gameBoard = [...state.gameBoard];
      gameBoard[x_id] = state.playerMark;

      //winner
      let winningPlayer = state.winningPlayer;
      const haveWinningState = winningStates.some((state) => {
        const [x_id1, x_id2, x_id3] = state;
        const marks = [gameBoard[x_id1], gameBoard[x_id2], gameBoard[x_id3]];
        const [firstMark] = marks;
        const isWinningCombo =
          !!firstMark && marks.every((mark) => mark === firstMark);
        if (isWinningCombo) {
          winningPlayer = firstMark;
          return true;
        }
        return false;
      });

      //gameOver
      const gameOver = haveWinningState || gameBoard.every((mark) => !!mark);

      //PlayerMark
      const playerMark = state.playerMark === x ? o : x;
      return {
        gameBoard,
        playerMark,
        winningPlayer,
        gameOver,
      };
    case actionTypes.resetGame:
      return {
        ...initialState,
      };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = useActions(dispatch, state);
  const { gameBoard, playerMark, winningPlayer, gameOver } = state;

  return (
    <AppWrapper>
      <GlobalStyles />

      {!gameOver ? (
        <p className="next-player">
          Next Player: <span>{playerMark}</span>
        </p>
      ) : winningPlayer ? (
        <p className="next-player">
          Winner: <span>{winningPlayer}</span>
        </p>
      ) : null}

      <button className="reset" onClick={action.resetGame}>
        Reset
      </button>

      <Board gameBoard={gameBoard} areaClicked={action.areaClicked} />
    </AppWrapper>
  );
}

export default App;

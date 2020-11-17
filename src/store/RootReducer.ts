import { combineReducers } from "redux";
import GameReducer from "./game/GameReducer";

const RootReducer = combineReducers({
  game: GameReducer,
});

export default RootReducer;

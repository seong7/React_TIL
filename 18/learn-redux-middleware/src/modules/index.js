import { combineReducers } from "redux";
import counter from "./counter";
import counter_thunk from "./counter_thunk";

const rootReducer = combineReducers({
  counter,
  counter_thunk,
});

export default rootReducer;

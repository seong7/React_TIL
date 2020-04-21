import { combineReducers } from "redux";
import counter from "./counter";
import counter_thunk from "./counter_thunk";
import api_sample from "./api_sample";

const rootReducer = combineReducers({
  counter,
  counter_thunk,
  api_sample,
});

export default rootReducer;

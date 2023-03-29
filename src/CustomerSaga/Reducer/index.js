import { combineReducers } from "redux";
import CustomerReduce from "./CustomerReducer.js";

const rootReducer = combineReducers({
  customerState: CustomerReduce,
});

export default rootReducer;

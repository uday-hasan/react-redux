import { combineReducers } from "redux";
import { foodReducer } from "./foodReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  foodReducer,
  cartReducer,
});

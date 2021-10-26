import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import productReducer from "./productReducer";

export default combineReducers({
  auth: auth,
  message: message,
  products: productReducer,
});

import { combineReducers } from "redux";
import { userReducer } from "../pages/home/user-reducer";
const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;

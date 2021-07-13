import { combineReducers } from "redux";
import { signUpReducer } from "../pages/signUp/signUpReducer";
const rootReducer = combineReducers({
  signUpReducer,
});
export default rootReducer;

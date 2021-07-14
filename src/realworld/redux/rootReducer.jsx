import { combineReducers } from "redux";
import { userReducer } from "../pages/home/user-reducer";
import { profileUserReducer } from "../pages/profile/profileReducer";

const rootReducer = combineReducers({
  userReducer,
  profileUserReducer,
});
export default rootReducer;

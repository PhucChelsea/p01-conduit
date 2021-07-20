import { combineReducers } from "redux";
import { userReducer } from "../pages/home/user-reducer";
import { profileUserReducer } from "../pages/profile/profileReducer";
import { popularTagReducer } from "../pages/home/tags-reducer";
import { articlesReducer } from "../pages/home/articles-reducer";

const rootReducer = combineReducers({
  userReducer,
  profileUserReducer,
  popularTagReducer,
  articlesReducer,
});
export default rootReducer;

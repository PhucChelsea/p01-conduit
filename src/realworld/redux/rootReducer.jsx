import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "../pages/home/user-reducer";
import { profileUserReducer } from "../pages/profile/profileReducer";
import { popularTagReducer } from "../pages/home/tags-reducer";
import { articlesReducer } from "../pages/home/articles-reducer";
import { articleWithTagReducer } from "../pages/home/article-tag-reducer";

const configTagPersist = {
  key: "article-tag",
  storage,
  whitelist: ["dataWithTag"],
};
const rootReducer = combineReducers({
  userReducer,
  profileUserReducer,
  popularTagReducer,
  articlesReducer,
  articleWithTagReducer: persistReducer(
    configTagPersist,
    articleWithTagReducer
  ),
});
export default rootReducer;

import { combineReducers } from "redux";
import { userReducer } from "../pages/home/user-reducer";
import { profileUserReducer } from "../pages/profile/profileReducer";
import { popularTagReducer } from "../pages/home/tags-reducer";
import { articlesReducer } from "../pages/home/articles-reducer";
import { articleWithTagReducer } from "../pages/home/article-tag-reducer";
import { ArticlesUserReducer } from "../pages/home/reducer/articlesUser-reducer";
import { postArticleReducer } from "../pages/editor/reducer/postArticleReducer";
import { articleByTitleReducer } from "../pages/editor/reducer/getArticleByTitle";
import { getCommentReducer } from "../pages/editor/reducer/getCommentReducer";
import { postCommentReducer } from "../pages/editor/reducer/postCommentReducer";

const rootReducer = combineReducers({
  userReducer,
  profileUserReducer,
  popularTagReducer,
  articlesReducer,
  articleWithTagReducer,
  ArticlesUserReducer,
  postArticleReducer,
  articleByTitleReducer,
  getCommentReducer,
  postCommentReducer,
});
export default rootReducer;

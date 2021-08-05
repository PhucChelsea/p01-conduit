import { combineReducers } from "redux";
import { userReducer } from "../pages/home/user-reducer";
import { profileUserReducer } from "../pages/profile/profileReducer";
import { popularTagReducer } from "../pages/home/tags-reducer";
import { articlesReducer } from "../pages/home/articles-reducer";
import { articleWithTagReducer } from "../pages/home/article-tag-reducer";
import { ArticlesUserReducer } from "../pages/home/reducer/articlesUser-reducer";
import { PostArticleReducer } from "../pages/editor/reducer/postArticleReducer";
import { ArticleByTitleReducer } from "../pages/editor/reducer/getArticleByTitle";

const rootReducer = combineReducers({
  userReducer,
  profileUserReducer,
  popularTagReducer,
  articlesReducer,
  articleWithTagReducer,
  ArticlesUserReducer,
  PostArticleReducer,
  ArticleByTitleReducer,
});
export default rootReducer;

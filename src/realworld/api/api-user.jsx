import axios from "axios";
import queryString from "query-string";
import { helper } from "../helpers/common";
//https://conduit.productionready.io/api
//https://conduit-api-realworld.herokuapp.com/api
const baseUrl = `https://conduit.productionready.io/api`;

const postUserLogin = async ({ username, email, password }) => {
  const url = `${baseUrl}/users/login`;
  const response = await axios
    .post(url, {
      user: { username, email, password },
    })
    .then((response) => {
      let token = response.data.user.token;
      if (token !== null) {
        helper.saveToken(token);
      }
    });
  // return response;
};

const postDataUser = async ({ username, email, password }) => {
  const url = `${baseUrl}/users`;
  const response = await axios
    .post(url, {
      user: { username, email, password },
    })
    .then((response) => {
      // console.log("user:", response.data.user);
      let token = response.data.user.token;
      if (token !== null) {
        helper.saveToken(token);
      }
    });
  // return response;
};
const getDataUser = async () => {
  let config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("jwt"),
    },
  };
  const url = `${baseUrl}/user`;
  const response = await axios.get(url, config);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getProfileUser = async (userName) => {
  let config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("jwt"),
    },
  };
  // console.log("username:", userName);
  const url = `${baseUrl}/profiles/${userName}`;
  const response = await axios.get(url, config);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getDataTags = async () => {
  const url = `${baseUrl}/tags`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getArticlesUser = async (filters, nameTag) => {
  const paramString = queryString.stringify(filters);
  const url = !nameTag
    ? `${baseUrl}/articles?${paramString}`
    : `${baseUrl}/articles?tag=${nameTag}&${paramString}`;
  const response = await axios.get(url);
  const results = response.status === 200 ? response.data : {};
  return results;
};
const getDataYourFeed = async () => {
  const url = `${baseUrl}/articles/feed?limit=10&offset=0`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const postArticleUser = async ({ title, description, body, tagList }) => {
  const response = await axios({
    url: `${baseUrl}/articles`,
    method: "POST",
    headers: {
      Authorization: "Token " + localStorage.getItem("jwt"),
    },
    data: {
      article: {
        title: title,
        description: description,
        body: body,
        tagList: tagList,
      },
    },
  });
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getUserArticle = async (title) => {
  const url = `${baseUrl}/articles/${title}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const postCommentUser = async (body, title) => {
  const response = await axios({
    url: `${baseUrl}/articles/${title}/comments`,
    method: "POST",
    headers: {
      Authorization: "Token " + localStorage.getItem("jwt"),
    },
    data: {
      comment: { body: body },
    },
  });
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getCommentUser = async (title) => {
  const url = `${baseUrl}/articles/${title}/comments`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

///

// const getDataArticles = async (filters) => {
//   const paramString = queryString.stringify(filters);
//   const url = `${baseUrl}/articles?${paramString}`;
//   // console.log(url);
//   const response = await axios.get(url);
//   const result = response.status === 200 ? response.data : {};

//   return result;
// };

// const getDataArticlesByTag = async (tag, filter) => {
//   const paramString = queryString.stringify(filter);
//   const url = `${baseUrl}/articles?tag=${tag}&${paramString}`;
//   // console.log(url);
//   const response = await axios.get(url);
//   const result = response.status === 200 ? response.data : {};
//   return result;
// };

export const api = {
  postDataUser,
  postUserLogin,
  getDataUser,
  getProfileUser,
  getDataTags,
  getDataYourFeed,
  getArticlesUser,
  // getDataArticles,
  // getDataArticlesByTag,
  postArticleUser,
  getUserArticle,
  postCommentUser,
  getCommentUser,
};

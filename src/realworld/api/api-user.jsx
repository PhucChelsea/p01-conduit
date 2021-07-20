import axios from "axios";
import { helper } from "../helpers/common";

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

const getDataArticles = async (p = 4, val = 0) => {
  const url = `${baseUrl}/articles?limit=${p}&offset=${val}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getDataArticlesByTag = async (tag, val = 0) => {
  const url = `${baseUrl}/articles?tag=${tag}&limit=10&offset=${val}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getDataYourFeed = async () => {
  const url = `${baseUrl}/articles/feed?limit=10&offset=0`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

export const api = {
  postDataUser,
  postUserLogin,
  getDataUser,
  getProfileUser,
  getDataTags,
  getDataArticles,
  getDataArticlesByTag,
  getDataYourFeed,
};

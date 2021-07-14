import axios from "axios";
import { helper } from "../helpers/common";

const postUserLogin = async ({ username, email, password }) => {
  const url = `https://conduit.productionready.io/api/users/login`;
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
};

const postDataUser = async ({ username, email, password }) => {
  const url = `https://conduit.productionready.io/api/users`;
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
};
const getDataUser = async () => {
  let config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("jwt"),
    },
  };
  const url = `https://conduit.productionready.io/api/user`;
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
  console.log("username:", userName);
  const url = `https://conduit.productionready.io/api/profiles/${userName}`;
  const response = await axios.get(url, config);
  const result = response.status === 200 ? response.data : {};
  return result;
};

export const api = {
  postDataUser,
  postUserLogin,
  getDataUser,
  getProfileUser,
};

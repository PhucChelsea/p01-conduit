import axios from "axios";
import { helper } from "../helpers/common";
import { useHistory } from "react-router-dom";

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
export const api = {
  postDataUser,
  postUserLogin,
};

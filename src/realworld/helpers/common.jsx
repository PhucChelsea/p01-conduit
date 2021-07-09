import jwt_decode from "jwt-decode";

// const KEY_TOKEN = "bhsoft";
const isEmptyObject = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
};

const saveToken = (token) => {
  if (token !== null && token !== "") {
    localStorage.setItem("jwt", token);
  }
};
const removeToken = () => {
  localStorage.removeItem("jwt");
};
const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("jwt");
  return token;
};
const decodeTokenFromLocalStorage = () => {
  let token = getTokenFromLocalStorage();
  let decodeToken = null;
  if (token !== null && token !== "") {
    decodeToken = jwt_decode(token);
  }
  return decodeToken;
};
export const helper = {
  isEmptyObject,
  saveToken,
  removeToken,
  decodeTokenFromLocalStorage,
};

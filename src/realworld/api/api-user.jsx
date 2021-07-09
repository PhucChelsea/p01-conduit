import axios from "axios";

const getDataUser = async () => {
  const url = `https://conduit.productionready.io/api/users/login`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
export const api = {
  getDataUser,
};

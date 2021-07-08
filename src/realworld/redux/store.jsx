import { createStore } from "redux";
import rootReducer from "./rootReducer";

const configStore = () => {
  const store = createStore(rootReducer);
  return { store };
};

export default configStore;

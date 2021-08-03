import RouterApp from "./route/index";
import { Provider } from "react-redux";
import configStore from "./redux/store";

const { store } = configStore();
const AppRealWorld = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};
export default AppRealWorld;

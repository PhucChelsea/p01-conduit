import RouterApp from "./route/index";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configStore();
const AppRealWorld = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterApp />
      </PersistGate>
    </Provider>
  );
};
export default AppRealWorld;

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger, sagaMiddleware));

const configRootPersist = {
  key: "root",
  storage,
  whitelist: ["articleWithTagReducer, articlesReducer"],
};

const rootPersistReducer = persistReducer(configRootPersist, rootReducer);
const configStore = (initialState = {}) => {
  const store = createStore(rootPersistReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configStore;

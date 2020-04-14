import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { reducer as formReducer } from "redux-form";
import saga from "./saga";
const createHistory = require("history").createBrowserHistory;

export const history = createHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authStore"],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistCombineReducers(persistConfig, {...reducers, form: formReducer});
const sagaMiddleware = createSagaMiddleware(history);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);

sagaMiddleware.run(saga);

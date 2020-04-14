import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Router } from "react-router-dom";

import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";

import { App } from "./routes/loadable";
import * as serviceWorker from "./serviceWorker";
import { store, history, persistor } from "./store/store";

import "./index.less";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ConfigProvider locale={ruRU}>
            <App />
          </ConfigProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

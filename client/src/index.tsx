import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Router } from "react-router-dom";

import { App } from "./routes/loadable";
import * as serviceWorker from "./serviceWorker";
import { store, history, persistor } from "./store/store";
import { ThemeProvider, theme } from "./styles/theme";
import "./index.less";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <Router history={history}>
          <App />
        </Router>
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

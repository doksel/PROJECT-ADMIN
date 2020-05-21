import camelCase from "lodash/camelCase";
import { reducer as thunk } from "redux-saga-thunk";

type ReducersType = {
  [storeName: string]: any;
};

const reducers: ReducersType = { thunk };
const req = require.context(".", true, /\.\/.+\/reducer\.ts$/);

req.keys().forEach(key => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, "$1"));
  reducers[storeName] = req(key).default;
});

export default reducers;

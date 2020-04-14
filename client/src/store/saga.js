import { actionChannel, call, takeEvery, put } from "redux-saga/effects";
import { client } from "../services/api.js";

export function* sagaWatch({ payload }) {
  const successAction = payload.actions[1];
  const failedAction = payload.actions[2];
  const requestAction = payload.actions[0];

  try {
    yield put({ type: requestAction, payload: payload.variables });
    const data = yield call(client, payload.variables, payload.query);

    if (data && data.token) {
      saveTokenToLocalStorage(data.token);
    }

    if (data && data.ok === true) {
      yield put({ type: successAction, payload: payload.variables });
    } else {
      yield put({ type: successAction, payload: data });
    }
  } catch (err) {
    if (err && err.authError) {
      yield put({ type: "USER_LOGOUT" });
    }
    yield put({ type: failedAction, payload: err });
  }
}

const saveTokenToLocalStorage = token => {
  localStorage.setItem("token", token);
};

export default function*() {
  const requestChan = yield actionChannel("API");

  yield takeEvery(requestChan, sagaWatch);
}

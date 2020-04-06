import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL
} from "./selectors";

const initialState = {
  email: "",
  password: "",
  token: null,
  admin: false,
  isLoading: false,
  error: false
};

export type InitialStateType = typeof initialState;
// export type InitialType =
//    typeof USER_LOGIN_REQUEST |
//   | USER_LOGIN_SUCCESS
//   | USER_LOGIN_FAIL
//   | USER_LOGOUT_REQUEST
//   | USER_LOGOUT_SUCCESS
//   | USER_LOGOUT_FAIL;

export default (
  state: InitialStateType = initialState,
  { type, payload }
): InitialStateType => {
  switch (type) {
    // LOGIN ACTIONS
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true
      };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        error: false,
        token: payload.token,
        admin: payload.admin
      };

    case USER_LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        error: true,
        isLoading: false
      };

    // LOGOUT ACTIONS
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true
      };

    case USER_LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...initialState
      };

    case USER_LOGOUT_FAIL:
      return {
        ...state,
        error: true,
        isLoading: false
      };

    default:
      return state;
  }
};

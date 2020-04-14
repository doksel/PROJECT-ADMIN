import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "./actions";

const initialState = {
  email: "",
  password: "",
  token: null as string | null,
  admin: false,
  isLoading: false,
  error: false
};

export type InitialStateType = typeof initialState;

export type AuthUserActionType = {
  type: string;
  payload: InitialStateType;
};

export default (
  state: InitialStateType = initialState,
  { type, payload }: AuthUserActionType
): InitialStateType => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true
      };

    case USER_LOGIN_SUCCESS:
      payload.token !== null && localStorage.setItem("token", payload.token);
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

    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...initialState
      };

    case "LOGIN":
      return {
        ...state,
        error: false,
        email: payload.email,
        password: payload.password
      };

    default:
      return state;
  }
};

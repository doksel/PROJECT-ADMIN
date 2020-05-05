import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  USER_LOGOUT
} from "./actions";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

const initialState = {
  email: "",
  password: "",
  reseted: false,
  token: null as string | null,
  admin: false,
  isLoading: false,
  errors: null as ErrorsType | null,
  message: ""
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
        errors: null,
        isLoading: true
      };

    case USER_LOGIN_SUCCESS:
      payload.token !== null && localStorage.setItem("token", payload.token);
      return {
        ...state,
        errors: null,
        isLoading: false,
        token: payload.token,
        admin: payload.admin
      };

    case USER_LOGIN_FAIL:
      localStorage.removeItem("token");
      console.log(payload);

      return {
        ...state,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...initialState
      };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        errors: null,
        reseted: false,
        isLoading: true
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reseted: true,
        isLoading: false
      };

    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
        message: payload.message
      };

    case "LOGIN":
      return {
        ...state,
        errors: null,
        email: payload.email,
        password: payload.password
      };

    default:
      return state;
  }
};

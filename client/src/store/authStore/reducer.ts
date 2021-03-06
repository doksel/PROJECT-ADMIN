import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_FORM,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  USER_LOGOUT
} from "./actions";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialState = {
  userId: null as string | null,
  reseted: false,
  registered: false,
  isLogged: false,
  token: null as string | null,
  user: null as UserType | null,
  admin: false,
  isLoading: true,
  error: false,
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
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
        isLogged: false
      };

    case SIGN_IN_SUCCESS:
      payload.token !== null && localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        userId: payload.userId,
        admin: payload.admin,
        isLogged: true
      };

    case SIGN_IN_FAIL:
      localStorage.removeItem("token");

      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    case SIGN_UP_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        registered: false,
        isLoading: true
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registered: true,
        admin: payload.admin
      };

    case SIGN_UP_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        error: false,
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
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    case RESET_FORM:
      return {
        ...state,
        error: false,
        errors: null,
        message: "",
        isLoading: false
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
        isLogged: false
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        user: payload.user
      };

    case GET_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...initialState
      };
    default:
      return state;
  }
};

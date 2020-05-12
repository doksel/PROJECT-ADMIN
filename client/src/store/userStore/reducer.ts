import {
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
  user: null as UserType | null,
  isLoading: false,
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
    case GET_USER_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
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

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL
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
  avatar: string;
  role?: string;
};

const initialState = {
  users: null as Array<UserType> | null,
  isLoading: false,
  error: false,
  errors: null as ErrorsType | null,
  message: "",
  user: null as UserType | null
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
    case GET_USERS_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload.users
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

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
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false
      };

    default:
      return state;
  }
};

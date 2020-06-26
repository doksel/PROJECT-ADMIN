import { ValuesSignInTypes } from "../../views/pages/Auth/LoginPage";
import { ValuesSignUpTypes } from "../../views/pages/Auth/RegisterPage";
import { ValuesResetPasswordType } from "../../views/pages/Auth/ResetPassword";
import { SagaWatchType } from "../saga";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const USER_LOGOUT = "USER_LOGOUT";

export const RESET_FORM = "RESET_FORM";

const token = localStorage.getItem("token");

export const signIn = (payload: ValuesSignInTypes): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/auth/login`
    },
    variables: payload,
    actions: [SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL]
  }
});

export const signUp = (payload: ValuesSignUpTypes): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/auth/register`
    },
    variables: payload,
    actions: [SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL]
  }
});

export const resetPassword = (
  payload: ValuesResetPasswordType
): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/auth/reset-password`
    },
    variables: payload,
    actions: [
      RESET_PASSWORD_REQUEST,
      RESET_PASSWORD_SUCCESS,
      RESET_PASSWORD_FAIL
    ]
  }
});

export const me = (): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      urlParams: `/users/account`
    },
    variables: null,
    actions: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL]
  }
});

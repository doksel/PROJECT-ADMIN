import { ValuesSignInTypes } from "../../views/pages/Auth/LoginPage";
import { ValuesSignUpTypes } from "../../views/pages/Auth/RegisterPage";
import { ValuesResetPasswordType } from "../../views/pages/Auth/ResetPassword";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const USER_LOGOUT = "USER_LOGOUT";

export const signIn = (payload: ValuesSignInTypes) => ({
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
    actions: [USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL]
  }
});

export const signUp = (payload: ValuesSignUpTypes) => ({
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
    actions: [USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL]
  }
});

export const resetPassword = (payload: ValuesResetPasswordType) => ({
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

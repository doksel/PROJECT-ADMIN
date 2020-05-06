import { ValuesSignInTypes } from "../../views/pages/Auth/LoginPage";
import { ValuesSignUpTypes } from "../../views/pages/Auth/RegisterPage";
import { ValuesResetPasswordType } from "../../views/pages/Auth/ResetPassword";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const RESET_FORM = "RESET_FORM";
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
    actions: [SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL]
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
    actions: [SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL]
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

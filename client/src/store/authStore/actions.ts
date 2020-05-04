import { ValuesPropsSignInTypes } from "../../views/pages/Auth/LoginPage";
import { ValuesPropsSignUpTypes } from "../../views/pages/Auth/RegisterPage";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const USER_LOGOUT = "USER_LOGOUT";

export const signIn = (payload: ValuesPropsSignInTypes) => {
  console.log(payload);

  return {
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
  };
};

export const signUp = (payload: ValuesPropsSignUpTypes) => {
  console.log(payload);

  return {
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
  };
};

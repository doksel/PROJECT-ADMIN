// User login
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

// User Logout
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';

export const userLogin = payload => {
  return {
    type: "API",
    payload: {
      query: {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        urlParams: `/login`
      },
      variables: payload,
      actions: [USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL]
    }
  };
};

export const userLogout = payload => {
  return {
    type: "API",
    payload: {
      query: {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        urlParams: `/logout`
      },
      variables: payload,
      actions: [USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL]
    }
  };
};

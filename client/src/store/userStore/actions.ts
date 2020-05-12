export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

const token = localStorage.getItem("token");

export const getUsers = () => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      urlParams: `/users/all`
    },
    variables: null,
    actions: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL]
  }
});

export const me = () => ({
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

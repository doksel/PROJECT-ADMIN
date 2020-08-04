export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

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
      urlParams: `/users/`
    },
    variables: null,
    actions: [GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL]
  }
});

export const getUserById = (id: string) => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      urlParams: `/users/user/${id}`
    },
    variables: id,
    actions: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL]
  }
});

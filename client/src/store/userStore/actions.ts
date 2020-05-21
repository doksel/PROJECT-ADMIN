export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

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
    actions: [GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL]
  }
});

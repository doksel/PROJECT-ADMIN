import { CategoryType } from "./reducer";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAIL = "GET_CATEGORIES_FAIL";

export const GET_CATEGORY_REQUEST = "GET_CATEGORY_REQUEST";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAIL = "GET_CATEGORY_FAIL";

export const CREATE_CATEGORY_REQUEST = "CREATE_CATEGORY_REQUEST";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAIL = "CREATE_CATEGORY_FAIL";

export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAIL = "DELETE_CATEGORY_FAIL";

const token = localStorage.getItem("token");

export const getCategories = () => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/categories`,
    },
    variables: null,
    actions: [
      GET_CATEGORIES_REQUEST,
      GET_CATEGORIES_SUCCESS,
      GET_CATEGORIES_FAIL,
    ],
  },
});

export const getCategoryById = (id: string) => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/categories/${id}`,
    },
    variables: id,
    actions: [GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL],
  },
});

export const createCategory = (payload: CategoryType) => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/categories`,
    },
    variables: payload,
    actions: [
      CREATE_CATEGORY_REQUEST,
      CREATE_CATEGORY_SUCCESS,
      CREATE_CATEGORY_FAIL,
    ],
  },
});

export const editCategory = (id: string, payload: CategoryType) => {
  console.log(id,payload);
  
  return({
  type: "API",
  payload: {
    query: {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/categories/${id}`,
    },
    variables: payload,
    actions: [
      CREATE_CATEGORY_REQUEST,
      CREATE_CATEGORY_SUCCESS,
      CREATE_CATEGORY_FAIL,
    ],
  },
})};

export const deleteCategory = (id: string) => ({
  type: "API",
  payload: {
    query: {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/categories`,
    },
    variables: id,
    actions: [
      DELETE_CATEGORY_REQUEST,
      DELETE_CATEGORY_SUCCESS,
      DELETE_CATEGORY_FAIL,
    ],
  },
});
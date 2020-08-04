import { ArticleType } from "./reducer";

export const GET_ARTICLES_REQUEST = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAIL = "GET_ARTICLES_FAIL";

export const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAIL = "GET_ARTICLE_FAIL";

export const CREATE_ARTICLE_REQUEST = "CREATE_ARTICLE_REQUEST";
export const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
export const CREATE_ARTICLE_FAIL = "CREATE_ARTICLE_FAIL";

export const DELETE_ARTICLE_REQUEST = "DELETE_ARTICLE_REQUEST";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAIL = "DELETE_ARTICLE_FAIL";

const token = localStorage.getItem("token");

export const getArticles = () => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/articles`,
    },
    variables: null,
    actions: [
      GET_ARTICLES_REQUEST,
      GET_ARTICLES_SUCCESS,
      GET_ARTICLES_FAIL,
    ],
  },
});

export const getArticleById = (id: string) => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/articles/${id}`,
    },
    variables: id,
    actions: [GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL],
  },
});

export const createArticle = (payload: ArticleType) => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/articles`,
    },
    variables: payload,
    actions: [
      CREATE_ARTICLE_REQUEST,
      CREATE_ARTICLE_SUCCESS,
      CREATE_ARTICLE_FAIL,
    ],
  },
});

export const editArticle = (id: string, payload: ArticleType) => ({
  type: "API",
  payload: {
    query: {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/articles/${id}`,
    },
    variables: payload,
    actions: [
      CREATE_ARTICLE_REQUEST,
      CREATE_ARTICLE_SUCCESS,
      CREATE_ARTICLE_FAIL,
    ],
  },
});

export const deleteArticle = (id: string) => ({
  type: "API",
  payload: {
    query: {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      urlParams: `/articles`,
    },
    variables: id,
    actions: [
      DELETE_ARTICLE_REQUEST,
      DELETE_ARTICLE_SUCCESS,
      DELETE_ARTICLE_FAIL,
    ],
  },
});

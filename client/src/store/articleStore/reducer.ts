import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
} from "./actions";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export type ArticleType = {
  name: string;
  description: string;
  owner: string;
};

const initialState = {
  articles: null as Array<ArticleType> | null,
  isLoading: false as boolean | false,
  error: false as boolean | false,
  errors: null as ErrorsType | null,
  message: "" as string | "",
  article: null as ArticleType | null,
};

export type InitialStateType = typeof initialState;

export type ArticleActionType = {
  type: string;
  payload: InitialStateType;
};

export default (
  state: InitialStateType = initialState,
  { type, payload }: ArticleActionType
): InitialStateType => {
  switch (type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: payload.articles,
      };

    case GET_ARTICLES_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false,
      };

    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: payload.article,
      };

    case GET_ARTICLE_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false,
      };

    case CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: payload.article,
      };

    case CREATE_ARTICLE_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false,
      };

    default:
      return state;
  }
};

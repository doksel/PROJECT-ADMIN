import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
} from "./actions";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export type CategoryType = {
  name: string;
};

const initialState = {
  categories: null as Array<CategoryType> | null,
  isLoading: false as boolean | false,
  error: false as boolean | false,
  errors: null as ErrorsType | null,
  message: "" as string | "",
  category: null as CategoryType | null,
};

export type InitialStateType = typeof initialState;

export type CategoryActionType = {
  type: string;
  payload: InitialStateType;
};

export default (
  state: InitialStateType = initialState,
  { type, payload }: CategoryActionType
): InitialStateType => {
  switch (type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload.categories,
      };

    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false,
      };

    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        category: payload.category,
      };

    case GET_CATEGORY_FAIL:
      return {
        ...state,
        error: true,
        errors: payload.errors,
        message: payload.message,
        isLoading: false,
      };

    case CREATE_CATEGORY_REQUEST:
      return {
        ...state,
        error: false,
        errors: null,
        isLoading: true,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        category: payload.category,
      };

    case CREATE_CATEGORY_FAIL:
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

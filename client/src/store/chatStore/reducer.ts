import {
  SEND_TO_CHAT_REQUEST,
  SEND_TO_CHAT_SUCCESS,
  SEND_TO_CHAT_FAIL,
  GET_CHAT_REQUEST,
  GET_CHAT_SUCCESS,
  GET_CHAT_FAIL,
  OPEN_CHAT_REQUEST,
  OPEN_CHAT_SUCCESS,
  OPEN_CHAT_FAIL
} from "./actions";

type ErrorsType = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export type ChatType = {
  name: string;
  message: string;
}

const initialState = {
  isActive: false,
  errors: null as ErrorsType | null,
  isLoading: false,
  chat: [] as Array<ChatType> | []
};

export type InitialStateChatType = typeof initialState;

export type AuthUserActionType = {
  type: string;
  payload: InitialStateChatType;
};

export default (
  state: InitialStateChatType = initialState,
  { type, payload }: AuthUserActionType
): InitialStateChatType => {
  switch (type) {
    case "SHOW_CHAT":
      return {
        ...state,
        isActive: payload.isActive
      };

    case SEND_TO_CHAT_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };

    case SEND_TO_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chat: payload.chat
      };

    case SEND_TO_CHAT_FAIL:
      return {
        ...state,
        errors: payload.errors,
        isLoading: false
      };

    case GET_CHAT_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };

    case GET_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chat: payload.chat
      };

    case GET_CHAT_FAIL:
      return {
        ...state,
        errors: payload.errors,
        isLoading: false
      };

    default:
      return state;
  }
};

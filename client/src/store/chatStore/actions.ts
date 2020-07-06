import { SagaWatchType } from "../saga";

export const GET_CHAT_REQUEST = "GET_CHAT_REQUEST";
export const GET_CHAT_SUCCESS = "GET_CHAT_SUCCESS";
export const GET_CHAT_FAIL = "GET_CHAT_FAIL";

export const SEND_TO_CHAT_REQUEST = "SEND_TO_CHAT_REQUEST";
export const SEND_TO_CHAT_SUCCESS = "SEND_TO_CHAT_SUCCESS";
export const SEND_TO_CHAT_FAIL = "SEND_TO_CHAT_FAIL";

export const OPEN_CHAT_REQUEST = "OPEN_CHAT_REQUEST";
export const OPEN_CHAT_SUCCESS = "OPEN_CHAT_SUCCESS";
export const OPEN_CHAT_FAIL = "OPEN_CHAT_FAIL";

type ChatType = {
  id: string,
  lastName: string
}

export const openChat = (payload: ChatType): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/chat`
    },
    variables: payload,
    actions: [OPEN_CHAT_REQUEST, OPEN_CHAT_SUCCESS, OPEN_CHAT_FAIL]
  }
});

export const getChat = (): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/chat`
    },
    variables: null,
    actions: [GET_CHAT_REQUEST, GET_CHAT_SUCCESS, GET_CHAT_FAIL]
  }
});

export const sendToChat = (message: string): SagaWatchType => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/chat/message`
    },
    variables: {message},
    actions: [SEND_TO_CHAT_REQUEST, SEND_TO_CHAT_SUCCESS, SEND_TO_CHAT_FAIL]
  }
});

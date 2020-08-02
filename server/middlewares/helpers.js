import { HttpStatusCode } from "./constants";

export const getTokenFromHeader = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

export const ErrorHandler = (errors) => {
  const { response } = errors;
  let data = {
    status: response.status,
    error: response.errors,
  };

  if (response.status === HttpStatusCode.BAD_REQUEST) {
    data.error = "Bad request";
  } else if (response.status === HttpStatusCode.NOT_FOUND) {
    data.error = "Not found";
  } else if (response.status === HttpStatusCode.NOT_FORBIDEN) {
    data.error = "Not forbiden";
  } else {
    data.status = 500;
    data.error = "Server error";
  }

  return data;
};

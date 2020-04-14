export const API_URL = "http://localhost:4000/v1/api";

export const client = (variables, query) => {
  const token = localStorage.getItem("token");

  if (query.method !== "GET") {
    return fetch(API_URL + query.urlParams, {
      method: query.method,
      headers: {
        ...query.headers,
        Authorization: token ? `Bearer ${token}` : ""
      },
      body: variables ? JSON.stringify(variables) : null
    })
      .then(async res => {
        if (res.status === 401) {
          throw JSON.stringify({ authError: true });
        }
        if (res.status !== 200) {
          throw await res.json();
        } else {
          return res.json();
        }
      })
      .catch(err => {
        throw err;
      });
  }

  return fetch(API_URL + query.urlParams, {
    method: query.method,
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  })
    .then(res => {
      if (res.status === 401) {
        throw JSON.stringify({ authError: true });
      }
      if (res.status !== 200) {
        throw Error(res._bodyText);
      } else {
        return res.json();
      }
    })
    .catch(err => {
      throw err;
    });
};

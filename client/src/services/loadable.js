import React from "react";
import Loadable from "react-loadable";

export const loadable = (component, params = {}) =>
  Loadable({
    loader: () => component(),
    loading: () => null,
    render(loaded, props) {
      let Component = loaded.default;

      return <Component {...props} {...params} />;
    }
  });

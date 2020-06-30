import React from "react";
import { connect } from "react-redux";
import { Redirect, RouteProps } from "react-router-dom";

import { UserType } from "../store/authStore/reducer";
import { AppDispatchType } from "../store/store";

type PropsType = {
  user?: UserType;
};

const DefaultRoute: React.FC<RouteProps & PropsType> = ({ user }) => {
  let path;

  console.log(user);

  if (user) {
    path = "admin";
  } else {
    path = "auth/login";
  }

  return <Redirect to={path} />;
};

const mapStateToProps: AppDispatchType = ({ authStore }) => ({
  ...authStore
});

export default connect(mapStateToProps)(DefaultRoute);

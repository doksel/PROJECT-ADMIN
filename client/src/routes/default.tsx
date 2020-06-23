import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { InitialStateAuthUserType } from "../store/authStore/reducer";

const DefaultRoute = ({ user }) => {
  let path;

  if (user) {
    path = "admin";
  } else {
    path = "auth/login";
  }

  return <Redirect to={path} />;
};

const mapStateToProps: InitialStateAuthUserType = ({ authStore }) => ({
  ...authStore
});

export default connect(mapStateToProps)(DefaultRoute);

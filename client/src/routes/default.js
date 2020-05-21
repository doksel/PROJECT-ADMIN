import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DefaultRoute = ({ user }) => {
  let path;

  if (user) {
    path = "admin";
  } else {
    path = "auth/login";
  }

  return <Redirect to={path} />;
};

const mapStateToProps = ({ authStore }) => ({ ...authStore });

export default connect(mapStateToProps)(DefaultRoute);

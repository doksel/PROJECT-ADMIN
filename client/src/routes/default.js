import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DefaultRoute = ({ user }) => {
  let path;

  const token = localStorage.getItem("token")

  if (token) {
    path = "admin";
  } else {
    path = "auth/login";
  }

  return <Redirect to={path} />;
};

const mapStateToProps = ({authStore}) => ({
  user: authStore.user
});

export default connect(mapStateToProps)(DefaultRoute);

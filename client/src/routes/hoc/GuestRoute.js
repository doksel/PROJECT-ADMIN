import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, user, ...rest }) => {
  const token = localStorage.getItem("token");

  return(
  <Route
    {...rest}
    render={props => {
      if (!token) {
        return <Component {...props} />;
      }

      return <Redirect to="/" />;
    }}
  />
)};

const mapStateToProps = ({authStore}) => ({
  user: authStore.user
});

export default connect(mapStateToProps)(GuestRoute);

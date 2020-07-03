import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoleRoute = ({
  component: Component,
  user,
  userRole,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (user && user.role === userRole) {
        return <Component {...props} />;
      }

      return <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = ({authStore}) => ({
  user: authStore.user
});

export default connect(mapStateToProps)(UserRoleRoute);

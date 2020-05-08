import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, user, ...rest }) => {
  return(
  <Route
    {...rest}
    render={props => {
      if (!user) {
        return <Component {...props} />;
      }

      return <Redirect to="/" />;
    }}
  />
)};

const mapStateToProps = ({userStore}) => ({...userStore});

export default connect(mapStateToProps)(GuestRoute);

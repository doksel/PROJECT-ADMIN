import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ResetPassword from "./ResetPassword";

const Auth = () => (
  <>
    <Route path="/auth/login" exact render={() => <LoginPage />} />
    <Route path="/auth/register" exact render={() => <RegisterPage />} />
    <Route path="/auth/reset-password" exact render={() => <ResetPassword />} />
  </>
);

export default Auth;

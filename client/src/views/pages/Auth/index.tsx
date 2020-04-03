import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const Auth = () => (
  <>
    <Route path="/auth/login" exact render={() => <LoginPage />} />
    <Route path="/auth/register" exact render={() => <RegisterPage />} />
  </>
);

export default Auth;
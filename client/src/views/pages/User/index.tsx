import React from "react";
import { Route } from "react-router-dom";

import Profile from "./Profile";
import Form from "./Form";

const User: React.FC = () => (
  <>
    <Route path="/admin/user/profile/:id" exact render={() => <Profile />} />
    <Route path="/admin/user/form/:id" exact render={() => <Form />} />
  </>
);

export default User;

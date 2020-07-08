import React from "react";
import { Route } from "react-router-dom";

import List from "./List";
import Form from "./Form";

const Articles: React.FC = () => (
  <>
    <Route path="/admin/articles" exact render={() => <List />} />
    <Route path="/admin/articles/:id/:type?" exact render={() => <Form />} />
  </>
);

export default Articles;

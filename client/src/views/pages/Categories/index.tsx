import React from "react";
import { Route } from "react-router-dom";

import List from "./List";
import Form from "./Form";

const Categories: React.FC = () => (
  <>
    <Route path="/admin/categories" exact render={() => <List />} />
    <Route path="/admin/categories/:id" exact render={() => <Form />} />
  </>
);

export default Categories;

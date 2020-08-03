import React from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { Route } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import Main from "../Main";
import User from "../User";
import Account from "../Account";
import Categories from "../Categories";

type RootState = {
  authStore: any;
};

const Admin: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const user = useTypedSelector(state => state.authStore.user);
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        <Route path="/admin" exact render={() => <Main />} />
        <Route path="/admin/account/profile" exact component={Account.review} />
        <Route path="/admin/account/form" exact component={Account.edit} />
        <Route path="/admin/user/:action?/:id?" exact render={() => <User />} />
        {user.role === "admin" && <Route
          path="/admin/categories/:id?/:type?"
          exact
          render={() => <Categories />}
        />}
      </Content>

      <Footer />
    </>
  );
};

export default Admin;

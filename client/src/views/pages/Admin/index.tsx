import React from "react";
import { Route } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import Main from "../Main";
import User from "../User";
import Account from "../Account";

const Admin: React.FC = () => {  
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        {/* <Route path="/admin/account/:action?" exact render={() => <Account />} /> */}
        <Route path="/admin/account/profile" exact component={Account.review} />
        <Route path="/admin/account/form" exact component={Account.edit} />
        <Route path="/admin/user/:action?/:id?" exact render={() => <User />} />
        <Route path="/admin" exact render={() => <Main />} />
      </Content>

      <Footer />
    </>
  );
};

export default Admin;

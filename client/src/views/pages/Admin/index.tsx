import React from "react";
import { Route } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import Main from "../Main";
import Profile from "../Account/Profile";
import Form from "../Account/Form";

const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        <Route path="/admin" exact render={() => <Main />} />
        <Route path="/admin/account/profile" exact render={() => <Profile />} />
        <Route path="/admin/account/form" exact render={() => <Form />} />
      </Content>

      <Footer />
    </>
  );
};

export default Admin;

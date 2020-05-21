import React from "react";
import { Route } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import Profile from "./Profile";
import Form from "./Form";

const Account: React.FC = () => (
  <>
    <Header />
    <Breadcrumbs crumbs={[]} />

    <Content>
      {/* <Route path="/account/profile" exact render={() => <Profile />} />
      <Route path="/account/form" exact render={() => <Form />} /> */}
    </Content>

    <Footer />
  </>
);

export default Account;

import React from "react";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

const Admin: React.FC = () => (
  <>
    <Header />
    <Breadcrumbs crumbs={[]} />

    <Content>
      <h1>Admin page</h1>
    </Content>

    <Footer />
  </>
);

export default Admin;

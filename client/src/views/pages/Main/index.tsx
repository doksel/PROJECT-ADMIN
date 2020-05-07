import React from "react";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

const Main: React.FC = () => (
  <>
    <Header />
    <Breadcrumbs crumbs={[]} />

    <Content>
      <h1>Main page</h1>
    </Content>

    <Footer />
  </>
);

export default Main;

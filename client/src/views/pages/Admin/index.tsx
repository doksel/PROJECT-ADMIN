import React from "react";
import { useDispatch } from "react-redux";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import { me, getUsers } from "../../../store/userStore/actions";

const Admin: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        <h1>Admin page</h1>
        <button
          onClick={() => {
            dispatch(me());
            console.log("click");
          }}
        >
          Click
        </button>
        <button
          onClick={() => {
            dispatch(getUsers());
          }}
        >
          Click
        </button>
      </Content>

      <Footer />
    </>
  );
};

export default Admin;

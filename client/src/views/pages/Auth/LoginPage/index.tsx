import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import Form from "./Form";

import { userLogin } from "../../../../store/authStore/actions";
import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "./styles";

export type ValuesProps = {
  email: string;
  password: string;
};

let LoginPage: React.FC = props => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state;
  });

  const formSubmit = (values: ValuesProps) => {
    setLoading(true);

    dispatch({ type: "LOGIN", payload: values });

    // dispatch(userLogin(values));

    setLoading(false);
  };
  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={loading} />
    </WrapForm>
  );
};

export default LoginPage;

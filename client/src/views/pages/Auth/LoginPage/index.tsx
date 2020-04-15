import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";
import { message } from "antd";

import Form from "./Form";

import { signIn } from "../../../../store/authStore/actions";
import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesPropsSignIntypes = {
  email: string;
  password: string;
};

let LoginPage: React.FC<InjectedFormProps<ValuesPropsSignIntypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state;
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesPropsSignIntypes) => {
      setLoading(true);

      dispatch({ type: "LOGIN", payload: values });
    })();

    // dispatch(signIn(values));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={loading} />
    </WrapForm>
  );
};

export default reduxForm<ValuesPropsSignIntypes, CustomProps>({
  form: "authForm"
})(LoginPage);

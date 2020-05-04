import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signIn } from "../../../../store/authStore/actions";
import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesPropsSignInTypes = {
  email: string;
  password: string;
};

let LoginPage: React.FC<InjectedFormProps<ValuesPropsSignInTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state;
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesPropsSignInTypes) => {
      setLoading(true);

      dispatch(signIn(values));
    })();

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

export default reduxForm<ValuesPropsSignInTypes, CustomProps>({
  form: "authForm"
})(LoginPage);

import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signUp } from "../../../../store/authStore/actions";
import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesPropsSignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  re_password: string;
};

let RegisterPage: React.FC<InjectedFormProps<
  ValuesPropsSignUpTypes,
  CustomProps
> &
  CustomProps> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state;
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesPropsSignUpTypes) => {
      setLoading(true);

      dispatch(signUp(values));
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

export default reduxForm<ValuesPropsSignUpTypes, CustomProps>({
  form: "RegisterForm"
})(RegisterPage);

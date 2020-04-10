import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";
import { message } from "antd";

import Form from "./Form";

import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "./styles";

interface CustomProps {}

type ValuesProps = {
  email: string;
  password: string;
};

const LoginPage: React.FC<
  InjectedFormProps<ValuesProps, CustomProps> & CustomProps
> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state;
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesProps) => {
      setLoading(true);

      console.log(values);

      // return signIn(values)
      //   .then(() => {
      //     setLoading(false);
      //     message.error("Successful enter");
      //   })
      //   .catch(() => {
      //     setLoading(false);
      //     message.error(ERROR_MESSAGE);
      //   });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
  };
  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={loading} />
    </WrapForm>
  );
};

export default reduxForm<ValuesProps, CustomProps>({
  form: "login",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(LoginPage);

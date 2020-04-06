import React, { useState, FormEvent } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { message } from "antd";

import Form from "./Form";

import { ERROR_MESSAGE } from "../../../../helpers/values";

import { WrapForm } from "./styles";

interface CustomProps {}

const LoginPage: React.FC<InjectedFormProps<{}, CustomProps> & CustomProps> = ({
  handleSubmit
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit(values => {
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
    })();
  };
  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={loading} />
    </WrapForm>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "login",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(LoginPage);

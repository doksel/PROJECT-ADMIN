import React, { useState } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Form, Button, message } from "antd";

import Input from "../../../common/Input";

import { ERROR_MESSAGE } from "../../../../helpers/values";
import { required } from "../../../../helpers/validate";

import Styles from "./styles";

interface CustomProps {}

const LoginPage: React.FC<CustomProps & InjectedFormProps<{}, CustomProps>> = ({
  handleSubmit
}) => {
  const [loading, setLoading] = useState(false);

  const formSubmit = (e: any) => {
    e.preventDefault();

    handleSubmit(values => {
      setLoading(true);

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
    <Styles.WrapForm>
      <form autoComplete="off" onSubmit={formSubmit}>
        <h1>Sing in</h1>
        <Field
          name="email"
          component={Input}
          label="email"
          placeholder=""
          validate={[required]}
          icon="user"
        />

        <Field
          name="password"
          type="password"
          component={Input}
          label="password"
          placeholder=""
          validate={[required]}
          icon="far fa-user"
        />

        <Button htmlType="submit" type="primary" loading={loading}>
          Увійти
        </Button>
      </form>
    </Styles.WrapForm>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "login",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(LoginPage);

import React from "react";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { Form as MainForm, Button } from "antd";

import Input from "../../../common/Input";

import { required } from "../../../../helpers/validate";
import { ValuesProps } from "./index";
type CustomPropsType = {
  loading: boolean;
};

const Form: React.FC<InjectedFormProps<ValuesProps, CustomPropsType> &
  CustomPropsType> = ({ loading, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sing in</h1>
      <Field
        name="email"
        component={Input}
        label="email"
        placeholder=""
        validate={[required]}
        icon="far fa-user"
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
  );
};

export default reduxForm<ValuesProps, CustomPropsType>({
  form: "auth"
})(Form);

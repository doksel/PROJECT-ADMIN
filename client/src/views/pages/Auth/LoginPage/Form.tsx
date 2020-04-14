import React, { FormEvent } from "react";
import { Field } from "redux-form";
import { Form as MainForm, Button } from "antd";

import Input from "../../../common/Input";

import { required } from "../../../../helpers/validate";

type CustomPropsType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

const Form: React.FC<{} & CustomPropsType> = ({ loading, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
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

export default Form;

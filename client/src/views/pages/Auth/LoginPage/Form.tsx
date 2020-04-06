import React from "react";
import { Field } from "redux-form";
import { Form as MainForm, Button } from "antd";
// import { FormComponentProps } from "antd/lib/form/Form";

import Input from "../../../common/Input";

import { required } from "../../../../helpers/validate";

import { WrapForm } from "./styles";

type CustomPropsType = {
  onSubmit: (e: any) => void;
  loading: boolean;
};

const Form: React.FC<{} & CustomPropsType> = ({ onSubmit, loading }) => {
  return (
    <WrapForm>
      <form autoComplete="off" onSubmit={onSubmit}>
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
    </WrapForm>
  );
};

export default Form;

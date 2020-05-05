import React, { FormEvent } from "react";
import { Field } from "redux-form";

import Button from "../../../common/Button";
import Input from "../../../common/Input";

import { email, required } from "../../../../helpers/validate";

type CustomPropsType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  message: string;
  errors: string;
};

const Form: React.FC<{} & CustomPropsType> = ({
  loading,
  onSubmit,
  message,
  errors
}) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <h1>Reset password</h1>

      <Field
        name="email"
        component={Input}
        label="email"
        placeholder="Enter email"
        validate={[required, email]}
        icon="far fa-user"
      />

      {message && <div className={errors ? "error" : "success"}>{message}</div>}

      <Button
        htmlType="submit"
        type="primary"
        loading={loading}
        text="Reset password"
      />
    </form>
  );
};

export default Form;

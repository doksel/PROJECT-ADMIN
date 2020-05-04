import React, { FormEvent } from "react";
import { Link, withRouter } from "react-router-dom";
import { Field } from "redux-form";

import Button from "../../../common/Button";
import Input from "../../../common/Input";

import {
  required,
  email,
  hardpassword,
  checkPasswords
} from "../../../../helpers/validate";

type CustomPropsType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

const Form: React.FC<{} & CustomPropsType> = ({ loading, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <h1>Registration</h1>

      <Field
        name="firstName"
        component={Input}
        label="name"
        placeholder="Enter your name"
        validate={[required]}
      />

      <Field
        name="lastName"
        component={Input}
        label="last name"
        placeholder="Enter your last name"
        validate={[required]}
      />

      <Field
        name="email"
        component={Input}
        label="email"
        placeholder=""
        validate={[email, required]}
      />

      <Field
        name="password"
        type="password"
        component={Input}
        label="password"
        placeholder=""
        validate={[hardpassword, required]}
      />

      <Field
        name="re_password"
        type="password"
        component={Input}
        label="password Confirm"
        placeholder=""
        validate={[required, checkPasswords]}
      />

      <Button htmlType="submit" type="primary" loading={loading} text="Enter" />

      <Link to="/auth/login">
        <span>Login</span>
      </Link>
    </form>
  );
};

export default Form;

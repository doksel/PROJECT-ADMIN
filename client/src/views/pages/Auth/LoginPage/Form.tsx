import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Field } from "redux-form";
import {useTranslation} from "react-i18next";

import Button from "../../../common/Button";
import Input from "../../../common/Input";
import FileUploader from "../../../common/FileUploader";

import { required } from "../../../../helpers/validate";

type CustomPropsType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  message: string;
  error: boolean;
};

const Form: React.FC<{} & CustomPropsType> = ({
  loading,
  onSubmit,
  message,
  error
}) => {
  const {t, i18n} = useTranslation('common');

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <h1>{t('Sing_in')}</h1>

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

      {message && <div className={error ? "error" : "success"}>{message}</div>}

      <Button htmlType="submit" type="primary" loading={loading} text="Enter" />

      <Link to="/auth/reset-password">
        <span>Reset password</span>
      </Link>

      <Link to="/auth/register">
        <span>Register</span>
      </Link>
    </form>
  );
};

export default Form;

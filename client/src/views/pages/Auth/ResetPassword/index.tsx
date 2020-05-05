import React, { FormEvent } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { resetPassword } from "../../../../store/authStore/actions";
import { AppDispatchType } from "../../../../store/store";

import { WrapForm } from "../styles";

interface CustomPropsType {}

export type ValuesResetPasswordType = {
  email: string;
};

type RootState = {
  authStore: any;
};

let RessetPassword: React.FC<InjectedFormProps<
  ValuesResetPasswordType,
  CustomPropsType
> &
  CustomPropsType> = ({ handleSubmit }) => {
  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.authStore.isLoading);
  const message = useTypedSelector(state => state.authStore.message);
  const errors = useTypedSelector(state => state.authStore.errors);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesResetPasswordType) => {
      dispatch(resetPassword(values));
    })();
  };

  return (
    <WrapForm>
      <Form
        onSubmit={formSubmit}
        loading={isLoading}
        message={message}
        errors={errors}
      />
    </WrapForm>
  );
};

export default reduxForm<ValuesResetPasswordType, CustomPropsType>({
  form: "authForm"
})(RessetPassword);

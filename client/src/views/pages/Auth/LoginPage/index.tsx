import React, { FormEvent } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signIn } from "../../../../store/authStore/actions";
import { AppDispatchType } from "../../../../store/store";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesSignInTypes = {
  email: string;
  password: string;
};

type RootState = {
  authStore: any;
};

let LoginPage: React.FC<InjectedFormProps<ValuesSignInTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.authStore.isLoading);
  const message = useTypedSelector(state => state.authStore.message);
  const errors = useTypedSelector(state => state.authStore.errors);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesSignInTypes) => {
      dispatch(signIn(values));
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

export default reduxForm<ValuesSignInTypes, CustomProps>({
  form: "authForm"
})(LoginPage);

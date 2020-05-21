import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signUp } from "../../../../store/authStore/actions";
import { AppDispatchType } from "../../../../store/store";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesSignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  re_password: string;
};

type RootState = {
  authStore: any;
};

let RegisterPage: React.FC<InjectedFormProps<ValuesSignUpTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.authStore.isLoading);
  const message = useTypedSelector(state => state.authStore.message);
  const error = useTypedSelector(state => state.authStore.error);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesSignUpTypes) => {
      dispatch(signUp(values));
    })();
  };

  useEffect(() => {
    dispatch({ type: "RESET_FORM" });
  }, []);

  return (
    <WrapForm>
      <Form
        onSubmit={formSubmit}
        loading={isLoading}
        message={message}
        error={error}
      />
    </WrapForm>
  );
};

export default reduxForm<ValuesSignUpTypes, CustomProps>({
  form: "RegisterForm"
})(RegisterPage);

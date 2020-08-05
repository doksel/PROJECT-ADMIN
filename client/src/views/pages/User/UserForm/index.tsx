import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { getUserById } from "../../../../store/userStore/actions";
import { AppDispatchType } from "../../../../store/store";

interface CustomProps {}

export type ValuesSignInTypes = {
  email: string;
  password: string;
};

type RootState = {
    userStore: any;
};

let UserForm: React.FC<InjectedFormProps<ValuesSignInTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.userStore.isLoading);
  const message = useTypedSelector(state => state.userStore.message);
  const error = useTypedSelector(state => state.userStore.error);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesSignInTypes) => {
      console.log(values);
    })();
  };

  useEffect(() => {
    dispatch(getUserById("1"));
  }, []);

  return (
      <Form
        onSubmit={formSubmit}
        loading={isLoading}
        message={message}
        error={error}
      />
  );
};

export default reduxForm<ValuesSignInTypes, CustomProps>({
  form: "UserForm"
})(UserForm);

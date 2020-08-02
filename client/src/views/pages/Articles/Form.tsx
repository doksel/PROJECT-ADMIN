import React, { useEffect, FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Button from "../../common/Button";
import Input from "../../common/Input";

import { required } from "../../../helpers/validate";
import { AppDispatchType } from "../../../store/store";
import {
  getArticleById,
  createArticle,
} from "../../../store/articleStore/actions";
import { ArticleType } from "../../../store/articleStore/reducer";

import { RootStateFormType, ParamsType } from "./types";

const Form: React.FC<InjectedFormProps<ArticleType>> = ({
  handleSubmit,
  reset,
}) => {
  let history = useHistory();
  let params = useParams<ParamsType>();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateFormType> = useSelector;
  const isLoading = useTypedSelector((state) => state.articleStore.isLoading);
  const category = useTypedSelector((state) => state.articleStore.category);

  useEffect(() => {
    if (params.type !== "create") {
      dispatch(getArticleById(params.id));
    }
  }, []);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const typeParams = params.type;

    handleSubmit((values: ArticleType) => {
      if (typeParams === "create") dispatch(createArticle(values));
      if (typeParams === "edit") dispatch(createArticle(values));
    })();

    history.push("/admin/categories");
    reset();
  };

  console.log(params);

  return (
    <>
      <h1>Article</h1>
      <form onSubmit={formSubmit}>
        <Field
          name="title"
          component={Input}
          defaultValue={category && category.name}
          label="Article's name"
          placeholder="Enter name of articles"
          validate={[required]}
        />

        <Field
          name="description"
          component={Input}
          defaultValue={category && category.name}
          label="Article's description"
          placeholder="Enter description of articles"
          validate={[required]}
        />

        <Button
          htmlType="submit"
          type="primary"
          loading={isLoading}
          text="Enter"
        />
      </form>
    </>
  );
};

export default reduxForm<ArticleType>({
  form: "create",
  enableReinitialize: true,
})(Form);

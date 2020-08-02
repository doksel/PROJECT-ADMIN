import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import Icon from "../../common/Icon";
import AddIcon from "../../../images/icons/add.svg";

import { AppDispatchType } from "../../../store/store";
import { getArticles } from "../../../store/articleStore/actions";
import { RootStateListType } from "./types";

const List: React.FC = () => {
  let history = useHistory();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateListType> = useSelector;
  const isLoading = useTypedSelector((state) => state.articleStore.isLoading);
  const articles = useTypedSelector(
    (state) => state.articleStore.categories
  );

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table
          title="Articles"
          columns={[
            { title: "Name", field: "name" },
            { title: "Create", field: "createAt" },
            { title: "Owner", field: "ownerId" },
          ]}
          data={articles}
          onView={(id: string) => history.push(`/admin/categories/${id}/view`)}
          onEdit={(id: string) => history.push(`/admin/categories/${id}/edit`)}
          onDelete={(id: string) => history.push(`/admin/categories/delete/${id}`)}
          actions={[
            {
              icon: () => (
                <Icon onClick={() => history.push("form")} icon={AddIcon} />
              ),
              tooltip: "Add Category",
              isFreeAction: true,
              onClick: () => history.push(`/admin/categories/0/create`),
            },
          ]}
        />
      )}
    </>
  );
};

export default List;

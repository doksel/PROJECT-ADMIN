import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import moment from "moment";

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import Icon from "../../common/Icon";
import AddIcon from "../../../images/icons/add.svg";

import { AppDispatchType } from "../../../store/store";
import { getArticles } from "../../../store/articleStore/actions";
import {FORMAT_DATA} from "../../../helpers/constants";

import { RootStateType } from "./types";

const List: React.FC = () => {
  let history = useHistory();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
  const isLoading = useTypedSelector((state) => state.articleStore.isLoading);
  const articles = useTypedSelector(
    (state) => state.articleStore.articles
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
            { title: "Name", field: "title" },
            { title: "Create", render: (rowData: any) => <div>{moment(rowData.createdAt).format(FORMAT_DATA)}</div> },
            { title: "Owner", render: (rowData: any) => <div>{rowData.owner && rowData.owner.name}</div> },
            { title: "Category", field: "categoryId" },
          ]}
          data={articles}
          onView={(id: string) => history.push(`/admin/articles/${id}/view`)}
          onEdit={(id: string) => history.push(`/admin/articles/${id}/edit`)}
          onDelete={(id: string) => history.push(`/admin/articles/delete/${id}`)}
          actions={[
            {
              icon: () => (
                <Icon onClick={() => history.push("form")} icon={AddIcon} />
              ),
              tooltip: "Add Article",
              isFreeAction: true,
              onClick: () => history.push(`/admin/articles/0/create`),
            },
          ]}
        />
      )}
    </>
  );
};

export default List;

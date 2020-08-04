import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import Icon from "../../common/Icon";
import AddIcon from "../../../images/icons/add.svg";

import { AppDispatchType } from "../../../store/store";
import { getCategories } from "../../../store/categoryStore/actions";
import { RootStateType } from "./types";

const List: React.FC = () => {
  let history = useHistory();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
  const isLoading = useTypedSelector((state) => state.categoryStore.isLoading);
  const categories = useTypedSelector(
    (state) => state.categoryStore.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table
          title="Categories"
          columns={[
            { title: "Name", field: "name" },
            { title: "Create", field: "createAt" },
            { title: "Owner", field: "ownerId" },
          ]}
          data={categories}
          onView={(id: string) => history.push(`/admin/categories/${id}/view`)}
          onEdit={(id: string) => history.push(`/admin/categories/${id}/edit`)}
          onDelete={(id: string) =>
            history.push(`/admin/categories/delete/${id}`)
          }
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
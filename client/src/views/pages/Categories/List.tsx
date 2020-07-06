import React, { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import Icon from "../../common/Icon";
import EditIcon from "../../../images/icons/edit-tools.svg";

import { AppDispatchType } from "../../../store/store";
import { getCategories } from "../../../store/categoryStore/actions";

type RootStateType = {
  userStore: any;
  categoryStore: any;
};

const List: React.FC = () => {
  let history = useHistory();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
  const isLoading = useTypedSelector(state => state.categoryStore.isLoading);
  const categories = useTypedSelector(state => state.categoryStore.categories);

  useEffect(()=>{
    dispatch(getCategories())
  },[])

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table
          columns={[
            { title: "Name", field: "name" },
            { title: "Create", field: "createAt" },
            { title: "Owner", field: "ownerId" }
          ]}
          data={categories}
          onView={id => history.push(`/admin/categories/${id}`)}
          onEdit={id => history.push(`/admin/categories/${id}`)}
          onDelete={id => history.push(`/admin/categories/profile/${id}`)}
        />
      )}
    </>
  );
};

export default List;

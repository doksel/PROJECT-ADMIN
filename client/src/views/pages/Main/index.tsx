import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Table from "../../components/Table";

import { getUsers } from "../../../store/userStore/actions";

import { MainTitle } from "./styles";

type RootState = {
  userStore: any;
};

const Main: React.FC = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.userStore.isLoading);
  const message = useTypedSelector(state => state.userStore.message);
  const error = useTypedSelector(state => state.userStore.error);
  const usersList = useTypedSelector(state => state.userStore.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <MainTitle>Main page</MainTitle>

      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <Table
          columns={[
            { title: "firstName", field: "firstName" },
            { title: "lastName", field: "lastName" },
            { title: "email", field: "email" }
          ]}
          data={usersList}
        />
      )}
    </>
  );
};

export default Main;

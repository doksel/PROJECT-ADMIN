import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import ChatIcon from '@material-ui/icons/Chat';

import { getUsers } from "../../../store/userStore/actions";

import { WrapMainTitle, MainTitle, ChatButton } from "./styles";

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

  const handleClick = () => {
    dispatch({ type: 'SHOW_CHAT', payload: {isActive: true} })
  }

  return (
    <>
      <WrapMainTitle>
        <MainTitle>Main page</MainTitle>
        
        <ChatButton onClick={handleClick}>
          <ChatIcon/>
        </ChatButton>
      </WrapMainTitle>

      {isLoading ? (
        <MainLoader />
      ) : (
        <Table
          columns={[
            { title: "firstName", field: "firstName" },
            { title: "lastName", field: "lastName" },
            { title: "email", field: "email" }
          ]}
          data={usersList}
          onView={id => history.push(`/admin/user/profile/${id}`)}
          onEdit={id => history.push(`/admin/user/form/${id}`)}
          onDelete={id => history.push(`/admin/user/profile/${id}`)}
        />
      )}
    </>
  );
};

export default Main;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import ChatIcon from '@material-ui/icons/Chat';

import Table from "../../components/Table";
import MainLoader from "../../components/MainLoader";
import ManIcon from "../../../images/icons/man.svg";


import { getUsers } from "../../../store/userStore/actions";
import { openChat, getChat } from "../../../store/chatStore/actions";

import { WrapMainTitle, MainTitle, ChatButton } from "./styles";

type RootState = {
  userStore: any;
  authStore: any;
};

const Main: React.FC = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.userStore.isLoading);
  const message = useTypedSelector(state => state.userStore.message);
  const error = useTypedSelector(state => state.userStore.error);
  const usersList = useTypedSelector(state => state.userStore.users);
  const profile = useTypedSelector(state => state.authStore.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleClick = () => {
    dispatch(openChat(profile && {id: profile._id, lastName: profile.lastName}));
    dispatch(getChat());
    dispatch({ type: 'SHOW_CHAT', payload: {isActive: true} })
  }

  const columns = [
    {
      field: "avatar",
      title: "Avatar",
      tooltip: "Avatar",
      render: (rowData: any) =>
        rowData.avatar && rowData.avatar.length ? (
          <img src={""} style={{ width: 50, borderRadius: "50%" }} />
        ) : (
          <img
            src={ManIcon}
            style={{ width: 40, borderRadius: "50%" }}
          />
        )
    },
    { title: "firstName", field: "firstName" },
    { title: "lastName", field: "lastName" },
    { title: "email", field: "email" }
  ]

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
          title="Users"
          columns={columns}
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

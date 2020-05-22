import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Icon from "../../common/Icon";
import UserIcon from "../../../images/icons/eye.svg";

import { getUsers } from "../../../store/userStore/actions";

import { Title } from "./styles";

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
      <h1>Main page</h1>
      {usersList &&
        usersList.map((user: any, index: number) => {
          return (
            <div>
              <Title>
                <div>User {index} </div>
                <Icon
                  onClick={() => history.push("/admin/account/profile")}
                  icon={UserIcon}
                />
              </Title>
              <div>FirstName: {user.firstName}</div>
              <div>LastName: {user.lastName}</div>
              <div>Email: {user.email}</div>
              <span>----------------------------</span>
            </div>
          );
        })}
    </>
  );
};

export default Main;

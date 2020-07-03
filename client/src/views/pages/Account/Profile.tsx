import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";

import MainLoader from "../../components/MainLoader";
import Icon from "../../common/Icon";
import Button from "../../common/Button";
import EditIcon from "../../../images/icons/edit-tools.svg";

import { AppDispatchType } from "../../../store/store";

type RootState = {
  authStore: any;
};

const Profile: React.FC = () => {
  let history = useHistory();
  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const isLoading = useTypedSelector(state => state.authStore.isLoading);
  const user = useTypedSelector(state => state.authStore.user);

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <h1>Profile</h1>
          <div>FirstName: {user.firstName}</div>
          <div>LastName: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <Icon onClick={() => history.push("form")} icon={EditIcon} />
          <Button text="Create article" onClick={()=>{}}/>
        </>
      )}
    </>
  );
};

export default Profile;

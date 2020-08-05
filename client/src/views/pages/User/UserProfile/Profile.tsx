import React, { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import MainLoader from "../../../components/MainLoader";
import Icon from "../../../common/Icon";
import EditIcon from "../../../images/icons/edit-tools.svg";

import { AppDispatchType } from "../../../../store/store";
import { getUserById } from "../../../../store/userStore/actions";

type RootStateType = {
  userStore: any;
};

type ParamsType = {
  id: string;
};

const Profile: React.FC = () => {
  let history = useHistory();
  let params = useParams<ParamsType>();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
  const isLoading = useTypedSelector(state => state.userStore.isLoading);
  const user = useTypedSelector(state => state.userStore.user);
  
  useEffect(()=>{
    dispatch(getUserById(params.id))
  },[])

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <h1>Profile: {user && user.lastName} </h1>
          <div>FirstName: {user && user.firstName}</div>
          <div>LastName: {user && user.lastName}</div>
          <div>Email: {user && user.email}</div>
        </>
      )}
    </>
  );
};

export default Profile;

import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatchType } from "../../../store/store";

import Icon from "../../common/Icon";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { WrapHeader, Profile } from "./styles";

type RootState = {
  authStore: any;
};

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");
  const dispatch: AppDispatchType = useDispatch();

  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const User = useTypedSelector(state => state.authStore.user);

  return (
    <WrapHeader>
      <h2>
        Header : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>

      <Profile>
        {User ? (
          <>
            <div>{User.firstName}</div>
            <Icon
              onClick={() => history.push("/admin/account/profile")}
              icon={UserIcon}
            />
            <Icon
              onClick={() => dispatch({ type: "USER_LOGOUT" })}
              icon={ExitIcon}
            />
          </>
        ) : (
          <Icon onClick={() => console.log("enter")} icon={EnterIcon} />
        )}
      </Profile>
    </WrapHeader>
  );
};

export default Header;

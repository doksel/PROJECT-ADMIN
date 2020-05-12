import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatchType } from "../../../store/store";

import Icon from "../../common/Icon";
import Exit from "../../../images/icons/exit.svg";
import User from "../../../images/icons/user.svg";

import { WrapHeader, Profile } from "./styles";

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");
  const dispatch: AppDispatchType = useDispatch();

  return (
    <WrapHeader>
      <h2>
        Header : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>

      <Profile>
        <Icon onClick={() => console.log("profile")} icon={User} />
        <Icon onClick={() => dispatch({ type: "USER_LOGOUT" })} icon={Exit} />
      </Profile>
    </WrapHeader>
  );
};

export default Header;

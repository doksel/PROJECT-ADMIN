import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

import Icon from "../../common/Icon";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { AppDispatchType } from "../../../store/store";
import { WrapHeader, Row, Profile, Langs, Lang } from "./styles";

type RootState = {
  authStore: any;
};

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");
  const dispatch: AppDispatchType = useDispatch();
  const [lang, setLang] = useState("en")

  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const User = useTypedSelector(state => state.authStore.user);

  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  }

  return (
    <WrapHeader>
      <h2>
        Header : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>

      <Row>
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

        <Row>
          <Langs>
            <Lang active={lang === "en"} onClick={()=>changeLanguage("en")}>en</Lang>
            <Lang active={lang === "ru"} onClick={()=>changeLanguage("ru")}>ru</Lang>
            <Lang active={lang === "ua"} onClick={()=>changeLanguage("ua")}>ua</Lang>
          </Langs>
        </Row>
      </Row>
    </WrapHeader>
  );
};

export default Header;

import React from "react";
import { useHistory } from "react-router-dom";

import { WrapHeader } from "./styles";

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");

  return (
    <WrapHeader>
      <h2>
        Header : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>
    </WrapHeader>
  );
};

export default Header;

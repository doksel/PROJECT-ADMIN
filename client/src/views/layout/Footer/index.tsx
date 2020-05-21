import React from "react";
import { useHistory } from "react-router-dom";

import { WrapFooter } from "./styles";

const Footer: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");

  return (
    <WrapFooter>
      <h2>
        Footer : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>
    </WrapFooter>
  );
};

export default Footer;

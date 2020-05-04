import React from "react";

import { WrapLoader } from "./styles";

const Loader = () => (
  <WrapLoader>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </WrapLoader>
);

export default Loader;

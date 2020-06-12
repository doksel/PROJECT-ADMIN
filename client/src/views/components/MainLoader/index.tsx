import React from "react";

import { MainLoaderType } from "./types";
import { WrapLoader, Loader } from "./styles";

const MainLoader: React.FC<MainLoaderType> = ({ loading }) => (
  <WrapLoader loading={loading}>
    <Loader />
  </WrapLoader>
);

export default MainLoader;

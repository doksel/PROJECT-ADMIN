import React from "react";

import { WrapLoader, Loader } from "./styles";

type MainLoaderType = {
  loading?: boolean;
};

const MainLoader: React.FC<MainLoaderType> = ({ loading }) => (
  <WrapLoader loading={loading}>
    <Loader />
  </WrapLoader>
);

export default MainLoader;

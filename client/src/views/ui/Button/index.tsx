import React, { MouseEvent } from "react";

import Loader from "../../components/Loader";

import { CustomButtonTypes } from "../../common/Button";
import { WrapButton } from "./styles";

const Button: React.FC<CustomButtonTypes> = ({
  text,
  disabled,
  onClick,
  loading,
  htmlType = "button",
  type
}) => (
  <WrapButton type={type}>
    <button
      onClick={(e: MouseEvent) => onClick && !loading && onClick(e)}
      disabled={disabled || loading}
      type={htmlType}
    >
      {loading ? <Loader /> : text}
    </button>
  </WrapButton>
);

export default Button;

import React, { MouseEvent } from "react";

import { CustomButtonTypes } from "../../common/Button";
import { WrapButton } from "./styles";

const Button: React.FC<CustomButtonTypes> = ({
  text,
  disabled,
  onClick,
  loading,
  htmlType = "button"
}) => (
  <WrapButton>
    <button
      onClick={(e: MouseEvent) => onClick && !loading && onClick(e)}
      disabled={disabled}
      type={htmlType}
    >
      {loading ? "Loading..." : text}
    </button>
  </WrapButton>
);

export default Button;

import React from "react";
import { Button as MainButton } from "antd";

import "../FormComponents.less";

const Button = ({
  input,
  disabled,
  icon,
  className,
  size,
  type,
  text,
  onClick,
  ghost,
  loading
}) => (
  <MainButton
    style={{ width: "100%" }}
    ghost={ghost}
    disabled={disabled}
    loading={loading}
    type={type}
    size={size}
    className={className}
    icon={icon}
    onClick={e => {
      input.onChange(true);
      onClick(e);
    }}
  >
    {text}
  </MainButton>
);

export default Button;

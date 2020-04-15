import React from "react";
import { Button as MainButton } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import { WrappedFieldInputProps } from "redux-form/lib/Field";

type CustomButtonTypes = {
  input?: WrappedFieldInputProps;
  text?: string;
};

const Button: React.FC<ButtonProps & CustomButtonTypes> = ({
  input,
  disabled,
  icon,
  className,
  size,
  type,
  htmlType,
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
    htmlType={htmlType}
    size={size}
    className={className}
    icon={icon}
    onClick={e => {
      input && input.onChange(true);
      onClick && onClick(e);
    }}
  >
    {text}
  </MainButton>
);

export default Button;

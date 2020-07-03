import React, { MouseEvent } from "react";
import ButtonUI from "../../ui/Button";
import { WrappedFieldInputProps } from "redux-form/lib/Field";

export type CustomButtonTypes = {
  input?: WrappedFieldInputProps;
  className?: string;
  size?: string;
  type?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  text?: string;
  onClick?: (e: React.MouseEvent) => void;
  ghost?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<CustomButtonTypes> = ({
  input,
  disabled,
  className,
  size,
  type,
  htmlType,
  text,
  onClick,
  ghost,
  loading
}) => (
  <ButtonUI
    ghost={ghost}
    disabled={disabled}
    loading={loading}
    type={type}
    htmlType={htmlType}
    size={size}
    text={text}
    className={className}
    onClick={(e: React.MouseEvent) => {
      input && input.onChange(true);
      onClick && onClick(e);
    }}
  />
);

export default Button;

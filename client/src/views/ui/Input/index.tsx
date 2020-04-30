import React, { ChangeEvent } from "react";

import { InputTypes } from "../../common/Input";
import { WrapInput } from "./styles";

type CustomInputTypes = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  touched: boolean;
  error: string;
  onKeyUp?: any;
};

const InputUI: React.FC<InputTypes & CustomInputTypes> = ({
  placeholder,
  type,
  onChange,
  touched,
  error,
  maxLength,
  onKeyUp,
  ...props
}) => (
  <WrapInput>
    <input
      type={type}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onChange={onChange}
      {...props}
    />
  </WrapInput>
);

export default InputUI;

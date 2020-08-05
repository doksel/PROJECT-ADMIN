import React from "react";

import { InputTypes } from "../../common/Input/types";
import {CustomInputTypes} from "./types";

import { WrapInput } from "./styles";

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

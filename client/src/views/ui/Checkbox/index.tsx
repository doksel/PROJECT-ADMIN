import React from "react";

import { CheckboxPropsType } from "./types";
import { WrapCheckbox } from "./styles";

const CheckboxUI: React.FC<CheckboxPropsType> = ({ name, id, disabled, value, ...props }) => (
  <WrapCheckbox>
    <input
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      value={value}
      checked={!!value}
      hidden
      {...props}
    />

    <label htmlFor={id}></label>
  </WrapCheckbox>
);

export default CheckboxUI;

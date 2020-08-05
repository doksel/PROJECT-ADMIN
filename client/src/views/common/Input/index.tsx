import React, { FormEvent, ChangeEvent, useEffect } from "react";

import InputUI from "../../ui/Input";

import { CustomInputTypes, InputTypes } from "./types";

import { WrapInput } from "./styles";

const Input: React.FC<InputTypes & CustomInputTypes> = ({
  label,
  input,
  type = "text",
  meta: { touched, error },
  placeholder,
  initValue,
  defaultValue,
  disabled,
  invisible,
  required,
  maxLength,
  mask
}) => {
  useEffect(()=>{
    if (initValue && !input.value) {
      input.onChange(initValue);
    }
  
    if (defaultValue) {
      input.onChange(defaultValue);
    }
  },[defaultValue, initValue])

  return (
    <WrapInput labelTransform="capitalize">
      {label ? (
        <label className={required ? "required" : undefined}>{label}:</label>
      ) : (
        <label>&nbsp;</label>
      )}

      <InputUI
        {...input}
        placeholder={placeholder}
        touched={touched}
        error={error}
        type={type}
        disabled={disabled}
        maxLength={maxLength}
        onKeyUp={mask && ((e: FormEvent<HTMLFormElement>) => mask(e, input))}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          input.onChange(e.target.value)
        }
      />

      {touched && error && <span className="error">{error}</span>}
    </WrapInput>
  );
};
export default Input;

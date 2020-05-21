import React, { FormEvent, ChangeEvent } from "react";
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps
} from "redux-form/lib/Field";

import InputUI from "../../ui/Input";
import { WrapInput } from "./styles";

type CustomInputTypes = {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  defaultValue: string | number;
  required: boolean;
  initialValue: string | number;
  notification: string;
  invisible: boolean;
  label: string;
};

export type InputTypes = {
  type?: string;
  placeholder?: string;
  initValue?: string;
  disabled?: boolean;
  maxLength?: number;
  mask?: (e: FormEvent<HTMLFormElement>, input: WrappedFieldInputProps) => void;
};

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
  if (initValue && !input.value) {
    input.onChange(initValue);
  }

  if (defaultValue) {
    input.onChange(defaultValue);
  }

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

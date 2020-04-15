import React, { useEffect, useState } from "react";
import { Form, Input as MainInput } from "antd";
import { InputProps } from "antd/lib/input/Input";
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps
} from "redux-form/lib/Field";

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

const Input: React.FC<InputProps & CustomInputTypes> = ({
  input,
  placeholder,
  meta: { touched, error },
  type = "text",
  label,
  disabled,
  required,
  initialValue,
  notification,
  invisible,
  defaultValue
}) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    initialValue && input.onChange(initialValue);
    !input.value && defaultValue && input.onChange(defaultValue);
  }, [initialValue]);

  return !invisible ? (
    <Form.Item
      hasFeedback
      validateStatus={touched ? (error ? "error" : "success") : ""}
      className={`create-form-item ${touched && error ? "has-error" : ""}`}
    >
      {label ? (
        <label className={required ? "required" : undefined}>
          {label}:{" "}
          {notification && (
            <span className="notification">( {notification} )</span>
          )}
        </label>
      ) : (
        <label>&nbsp;</label>
      )}

      <MainInput
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...input}
        name={input.name}
        value={value}
        onChange={e => {
          setValue(e.target.value);
          input.onChange(e);
        }}
      />

      <p className="form-item_error ant-form-explain">{touched && error}</p>
    </Form.Item>
  ) : null;
};

export default Input;

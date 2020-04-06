import React, { useEffect, useState } from "react";
import { Form, Input as MainInput } from "antd";

const Input = ({
  input,
  placeholder,
  meta: { touched, error },
  type,
  label,
  disabled,
  required,
  initialValue,
  notification,
  invisible,
  defaultValue
}) => {
  const [value,setValue]=useState();
  
  useEffect(() => {
    initialValue && input.onChange(initialValue);
    !input.value && defaultValue && input.onChange(defaultValue);
  }, [initialValue]);

  return (
    !invisible && (
      <Form.Item
        hasFeedback
        validateStatus={touched ? (error ? "error" : "success") : ""}
        className={`create-form-item ${touched && error ? "has-error" : ""}`}
        style={{ width: "100%" }}
      >
        {label === "empty" ? (
          <label>&nbsp;</label>
        ) : (
          <label className={required && "required"}>
            {label}:{" "}
            {notification && (
              <span className="notification">( {notification} )</span>
            )}
          </label>
        )}
    <MainInput
      type={type || "text"}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={e=>setValue(e.target.value)
      }
    />


        <p className="form-item_error ant-form-explain">{touched && error}</p>
      </Form.Item>
    )
  );
};

export default Input;

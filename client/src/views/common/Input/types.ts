import { FormEvent } from "react";
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps
} from "redux-form/lib/Field";

export type CustomInputTypes = {
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

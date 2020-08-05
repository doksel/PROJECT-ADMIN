import { FormEvent } from "react";
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps
} from "redux-form";

export type CustomInputTypes = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    defaultValue: string | number;
    required: boolean;
    initialValue: string | number;
    notification: string;
    invisible: boolean;
    label: string;
    multiple: string;
    accepts :string;
    maxFileSize: number;
};
  
export type InputTypes = {
    multiple?: boolean;
    encType?: string;
    size?: number;
    placeholder?: string;
    initValue?: string;
    disabled?: boolean;
    maxLength?: number;
    mask?: (e: FormEvent<HTMLFormElement>, input: WrappedFieldInputProps) => void;
};
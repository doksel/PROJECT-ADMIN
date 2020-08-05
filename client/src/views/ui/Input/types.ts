import { ChangeEvent } from "react";

export type CustomInputTypes = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    touched: boolean;
    error: string;
    onKeyUp?: any;
  };
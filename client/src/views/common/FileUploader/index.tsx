import React, { ChangeEvent, useEffect } from "react";

import FileUploaderUI from "../../ui/FileUploader";

import { CustomInputTypes, InputTypes } from "./types";
import { WrapInput } from "./styles";


const Input: React.FC<InputTypes & CustomInputTypes> = ({
  label,
  input: { name },
  meta: { touched, error },
  accepts,
  maxFileSize,
}) => {
  useEffect(()=>{

  },[]);

  const customRequest = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    const file = e.target.files && e.target.files[0];
    let formData = new FormData();
    
    file && formData.append(name, file);
  };

  return (
    <WrapInput labelTransform="capitalize">
      {label && <label>{label}:</label>}

      <input
        name={name}
        multiple={true}
        type="file"
        size={maxFileSize || 10000000}
        accept={accepts || ".jpg,.jpeg,.png"}
        onChange={e => customRequest(e) }
      />

      {touched && error && <span className="error">{error}</span>}
    </WrapInput>
  );
};
export default Input;

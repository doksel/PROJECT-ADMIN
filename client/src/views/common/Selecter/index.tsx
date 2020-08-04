import React, { useState, useEffect } from "react";
import Select from "react-select";

import {PropsTypes, ValueTypes} from "./types";

const Selecter: React.FC<PropsTypes> = ({
  input, 
  label, 
  meta: {touched, error}, 
  placeholder, 
  options = [],
  defaultValue,
  disabled
}) => {
  const [selectedOption, setselectedOption] = useState<ValueTypes | null>(null)
  useEffect(()=>{
    defaultValue && input.onChange(defaultValue);
  },[]);

  return (
    <div>
      {label ? <label>{label}</label> : <label>&nbsp;</label>}

      <Select
        {...input}
        className="react-select-container"
        classNamePrefix="react-select"
        // styles={customStyles}
        onChange={(value: ValueTypes) => {
          input.onChange(typeof value === "object" ? value && value.value : value);
          setselectedOption(value);
        }}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
        error={touched && error}
        name={input.name}
        onBlur={e => {
          e.preventDefault();
        }}
        noOptionsMessage={() => "No found"}
      />

      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default Selecter;

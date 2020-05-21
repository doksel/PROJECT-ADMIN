import React from "react";
import { WrapIcon } from "./styles";

export type CustomIconTypes = {
  icon: string;
  onClick?: (e: React.MouseEvent) => void;
};

const Icon: React.FC<CustomIconTypes> = ({ icon, onClick }) => {
  const array = icon.split("/");
  const alt = array[array.length - 1].split(".")[0];

  return (
    <WrapIcon onClick={onClick}>
      <img src={icon} alt={alt} />
    </WrapIcon>
  );
};

export default Icon;

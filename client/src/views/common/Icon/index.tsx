import React, { MouseEvent } from "react";
import { WrapIcon } from "./styles";

export type CustomIconTypes = {
  icon: string;
  onClick?: (e: React.MouseEvent) => void;
};

const Icon: React.FC<CustomIconTypes> = ({ icon, onClick }) => (
  <WrapIcon onClick={onClick}>
    <img src={icon} />
  </WrapIcon>
);

export default Icon;

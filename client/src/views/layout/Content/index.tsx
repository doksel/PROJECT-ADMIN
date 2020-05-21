import React from "react";
import { WrapContent } from "./styles";

const Content: React.FC = ({ children }) => (
  <WrapContent>{children}</WrapContent>
);

export default Content;

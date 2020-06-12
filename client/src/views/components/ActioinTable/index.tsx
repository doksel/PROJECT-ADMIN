import React from "react";
import { Clear, Edit } from "@material-ui/icons";

import { ActionTableType } from "./types";
import { WrapActionTable } from "./styles";

const ActionTable: React.FC<ActionTableType> = ({ view, edit, remove }) => {
  return (
    <WrapActionTable>
      <Edit />
      <Clear />
    </WrapActionTable>
  );
};

export default ActionTable;

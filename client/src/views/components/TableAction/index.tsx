import React from "react";
import { EditOutlined, Visibility, DeleteForever } from "@material-ui/icons";

import { ActionTableType } from "./types";
import { theme } from "../../../styles/theme";
import { WrapTableAction } from "./styles";

const TableAction: React.FC<ActionTableType> = ({
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <WrapTableAction>
      {!!onView && (
        <Visibility style={{ color: theme.colors.primary }} onClick={onView} />
      )}
      {!!onEdit && (
        <EditOutlined
          style={{ color: theme.colors.primary }}
          onClick={onEdit}
        />
      )}
      {!!onDelete && (
        <DeleteForever
          style={{ color: theme.colors.red }}
          onClick={onDelete}
        />
      )}
    </WrapTableAction>
  );
};

export default TableAction;

import React from "react";
import { EditOutlined, Visibility, DeleteForever } from "@material-ui/icons";

import { ActionTableType } from "./types";
import { theme } from "../../../styles/theme";
import { WrapTableAction } from "./styles";

const TableAction: React.FC<ActionTableType> = ({
  canView,
  canEdit,
  canDelete
}) => {
  return (
    <WrapTableAction>
      {!!canView && (
        <Visibility style={{ color: theme.colors.primary }} onClick={canView} />
      )}
      {!!canEdit && (
        <EditOutlined
          style={{ color: theme.colors.primary }}
          onClick={canEdit}
        />
      )}
      {!!canDelete && (
        <DeleteForever
          style={{ color: theme.colors.red }}
          onClick={canDelete}
        />
      )}
    </WrapTableAction>
  );
};

export default TableAction;

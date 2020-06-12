import React from "react";
import { MaterialTableProps } from "material-table";

import TableUI from "../../ui/Table";

import { TableType } from "./types";
import { WrapTable } from "./styles";
import { EditOutlined, Visibility, DeleteForever } from "@material-ui/icons";

import { theme } from "../../../styles/theme";
const Table: React.FC<MaterialTableProps<TableType>> = ({
  title,
  columns,
  data
}) => {
  return (
    <WrapTable>
      {data && (
        <TableUI
          columns={columns}
          data={data}
          title={title}
          actions={[
            {
              icon: () => (
                <Visibility style={{ color: theme.colors.primary }} />
              ),
              tooltip: "Add User",
              onClick: (event, rowData) => console.log("You saved ", rowData)
            },
            {
              icon: () => (
                <EditOutlined style={{ color: theme.colors.primary }} />
              ),
              tooltip: "Edit User",
              iconProps: { color: "error" },
              onClick: (event, rowData) =>
                console.log("You want to Edit ", rowData),
              disabled: false
            },
            {
              icon: () => <DeleteForever style={{ color: theme.colors.red }} />,
              tooltip: "Delete User",
              iconProps: { color: "error" },
              onClick: (event, rowData) =>
                console.log("You want to delete ", rowData),
              disabled: false
            }
          ]}
        />
      )}
    </WrapTable>
  );
};

export default Table;

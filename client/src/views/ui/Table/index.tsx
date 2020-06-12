import React, { forwardRef } from "react";
import MaterialTable, { MaterialTableProps, Icons } from "material-table";

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  EditOutlined,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  Visibility,
  DeleteForever
} from "@material-ui/icons";

import { theme } from "../../../styles/theme";
import { TableType, PropsTableType } from "./types";
import { WrapTable } from "./styles";

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const TableUI: React.FC<MaterialTableProps<TableType & PropsTableType> &
  PropsTableType> = ({ title, columns, data, actions }) => {
  return (
    <WrapTable>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data}
        title={title}
        options={{
          actionsColumnIndex: -1
        }}
        actions={actions}
        // actions={[
        //   {
        //     icon: () => <Visibility style={{ color: theme.colors.primary }} />,
        //     tooltip: "Add User",
        //     onClick: (event, rowData) => console.log("You saved ", rowData)
        //   },
        //   {
        //     icon: () => (
        //       <EditOutlined style={{ color: theme.colors.primary }} />
        //     ),
        //     tooltip: "Edit User",
        //     iconProps: { color: "error" },
        //     onClick: (event, rowData) =>
        //       console.log("You want to Edit ", rowData),
        //     disabled: false
        //   },
        //   {
        //     icon: () => <DeleteForever style={{ color: theme.colors.red }} />,
        //     tooltip: "Delete User",
        //     iconProps: { color: "error" },
        //     onClick: (event, rowData) =>
        //       console.log("You want to delete ", rowData),
        //     disabled: false
        //   }
        // ]}
      />
    </WrapTable>
  );
};

export default TableUI;

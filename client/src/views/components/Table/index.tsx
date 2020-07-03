import React from "react";
import { MaterialTableProps } from "material-table";

import TableUI from "../../ui/Table";
import TableAction from "../TableAction";
import ManIcon from "../../../images/icons/man.svg";

import { TablePropsType } from "./types";
import { WrapTable } from "./styles";

const Table: React.FC<MaterialTableProps<{}> & TablePropsType> = ({
  title,
  columns,
  data,
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <WrapTable>
      {data && (
        <TableUI
          columns={[
            {
              field: "avatar",
              title: "Avatar",
              tooltip: "Avatar",
              render: (rowData: any) =>
                rowData.avatar && rowData.avatar.length ? (
                  <img src={""} style={{ width: 50, borderRadius: "50%" }} />
                ) : (
                  <img
                    src={ManIcon}
                    style={{ width: 40, borderRadius: "50%" }}
                  />
                )
            },
            ...columns,
            {
              title: "Actions",
              tooltip: "Actions",
              render: (rowData: any)=>{
                  return (
                    <TableAction
                      onView={()=>onView && onView(rowData && rowData._id)}
                      onEdit={()=>onEdit && onEdit(rowData && rowData._id)}
                      onDelete={()=>onDelete && onDelete(rowData && rowData._id)}
                    />
                  )}
              
            }
          ]}
          data={data}
          title={title}
        />
      )}
    </WrapTable>
  );
};

export default Table;

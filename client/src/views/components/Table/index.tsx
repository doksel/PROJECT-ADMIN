import React from "react";
import { MaterialTableProps } from "material-table";

import TableUI from "../../ui/Table";
import TableAction from "../TableAction";

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

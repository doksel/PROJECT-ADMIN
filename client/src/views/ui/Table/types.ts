type IType =
  | "string"
  | "boolean"
  | "numeric"
  | "date"
  | "datetime"
  | "time"
  | "currency";

type TypeColumns = {
  title?: string;
  field?: string;
  type?: IType;
  lookup?: any;
};

type TypeData = {
  firstName: string;
  lastName: string;
  email: string;
};

export type TableType = {
  title?: string;
  columns?: Array<TypeColumns>;
  data?: Array<TypeData>;
};

export type PropsTableType = {
  actions?: Array<{
    icon: () => Element;
    tooltip: string;
    onClick: (event: any, rowData: any) => void;
  }>;
};

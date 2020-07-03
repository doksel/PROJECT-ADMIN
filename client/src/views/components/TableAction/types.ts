import {MouseEvent} from "react";
export type ActionTableType = {
  onView?: (id: MouseEvent) => void;
  onEdit?: (id: MouseEvent) => void;
  onDelete?: (id: MouseEvent) => void;
};

export type ModalType = {
  title?: string;
  onCancel: (id: MouseEvent) => void;
  onSave?: (id: MouseEvent) => void;
};

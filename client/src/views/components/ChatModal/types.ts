export type ActionChatType = {
  onCancel: (id: MouseEvent) => void;
  onSave: (id: MouseEvent) => void;
};

export type RootState = {
    authStore: any;
    chatStore: any;
};
import React from "react";
import { EditOutlined, Visibility, DeleteForever } from "@material-ui/icons";

import { ModalType } from "./types";
import { theme } from "../../../styles/theme";
import { WrapChatModal, ChatModal, Title, Content } from "./styles";

const Chat: React.FC<ModalType> = ({title,children, onCancel, onSave}) => {
  return (
    <WrapChatModal>
      <ChatModal>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </ChatModal>
    </WrapChatModal>
  );
};

export default Chat;
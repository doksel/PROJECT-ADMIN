import React from "react";
import { Save, Close, Person } from "@material-ui/icons";

import { 
    WrapChatModal, 
    ChatModal, 
    Title, 
    WrapContent, 
    Content, 
    WrapButton, 
    Message, 
    Avatar, 
    MessageBody,
    NameUser,
    MessageText,
    Textarea
} from "./styles";

const Chat: React.FC = () => {
    const onCancel = () => {
        console.log("onCancel");
    }

    const onSave = () => {
        console.log("onSave");
    }

    const data = [
        {userName: "Vlad", comment: "comment 1"},
        {userName: "Name", comment: "comment 2"},
        {userName: "Vasia", comment: "comment 3"}
    ]

  return (
    <WrapChatModal>
      <ChatModal>
        <Title>
            <div>Chat</div> 
            <Close onClick={onCancel}/>
        </Title>

        <WrapContent>
            <Content>
                {data.map((message, index) => (
                    <Message key={index}>
                    <Avatar>
                        <Person />
                    </Avatar>

                    <MessageBody>
                        <NameUser>{message.userName}</NameUser>

                        <MessageText>{message.comment}</MessageText>
                    </MessageBody>
                    </Message>
                ))}

            </Content>
        </WrapContent>
        
        <Textarea name="text" placeholder="Enter your comment..." />

        <WrapButton>
            <Save onClick={onSave}/>
        </WrapButton>
      </ChatModal>
    </WrapChatModal>
  );
};

export default Chat;
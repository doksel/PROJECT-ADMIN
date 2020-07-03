import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Save, Close, Person } from "@material-ui/icons";
import socket from "../../../helpers/socket";

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


type RootState = {
    chatStore: any;
};

const Chat: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const isActive = useTypedSelector(state => state.chatStore.isActive);

    const onSave = () => {
        console.log(value);
        
        socket.emit('chat message', value)
        dispatch({ type: 'SHOW_CHAT', payload: {isActive: false} })
        setValue('')
    }

    const data = [
        {userName: "Vlad", message: "message 1"},
        {userName: "Name", message: "message 2"},
        {userName: "Vasia", message: "message 3"}
    ]

  return (
    <WrapChatModal active={isActive}>
      <ChatModal>
        <Title>
            <div>Chat</div> 
            <Close onClick={()=>dispatch({ type: 'SHOW_CHAT', payload: {isActive: false} })}/>
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
                        <MessageText>{message.message}</MessageText>
                    </MessageBody>
                    </Message>
                ))}

            </Content>
        </WrapContent>
        
        <Textarea name="message" placeholder="Enter your message..." value={value} onChange={(e)=>setValue(e.target.value)}/>

        <WrapButton>
            <Save onClick={onSave}/>
        </WrapButton>
      </ChatModal>
    </WrapChatModal>
  );
};

export default Chat;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Save, Close, Person } from "@material-ui/icons";

import socket from "../../../helpers/socket";
import { getChat } from "../../../store/chatStore/actions";

import {RootState} from "./types";
import {ChatType} from "../../../store/chatStore/reducer";

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
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const isActive = useTypedSelector(state => state.chatStore.isActive);
    const chat = useTypedSelector(state => state.chatStore.chat);
    const user = useTypedSelector(state => state.authStore.user);
    
    useEffect(()=>{
        dispatch(getChat());
    },[])

    const onSave = () => {
        const data = {
            name: user && user.lastName,
            message: value
        }
        
        socket.emit('CHAT', data)        
        setValue('')
    }

    socket.on('CHATED', (data: Array<ChatType>) => {        
        dispatch({type: "GET_CHAT_SUCCESS", payload: { chat: data }});
    });

  return (
    <WrapChatModal active={isActive}>
      <ChatModal>
        <Title>
            <div>Chat</div> 
            <Close onClick={()=>dispatch({ type: 'SHOW_CHAT', payload: {isActive: false} })}/>
        </Title>

        <WrapContent>
            <Content>
                {chat.map((userChat: ChatType, index: number) => (
                    <Message key={index} owner={user && (userChat.name == user.lastName)}>
                        <Avatar owner={user && (userChat.name == user.lastName)}>
                            <Person />
                        </Avatar>

                        <MessageBody owner={user && (userChat.name == user.lastName)}>
                            <NameUser>{userChat.name}</NameUser>
                            <MessageText>{userChat.message}</MessageText>
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
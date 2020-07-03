import styled from "styled-components";

type ChatPropsType = {
  color?: string;
  loading?: boolean;
  active: boolean;
};

export const WrapChatModal = styled.div<ChatPropsType>`
  width: 100vw;
  height: 100vh;
  display: ${props =>  props.active ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(103, 103, 103, 0.5);
`;

export const ChatModal = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  background: ${props =>  props.theme.colors.primary};
`;

export const WrapContent = styled.div`
  width: 100%;
  padding: 20px;
  overflow: auto;
  flex-grow: 1;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding: 20px;
  background: ${props =>  props.theme.colors.primary};
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px dashed #f0f0f0;
`;

export const Avatar = styled.div`
  height: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #575757;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 5px;
`;

export const MessageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const NameUser  = styled.span`
  font-weight: 900;
  color: #b0b0b0;
`;

export const MessageText = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
`;

export const Textarea = styled.textarea`
  height: 60px;
  font-weight: 300;
  font-size: 14px;
  border: 1px solid #f0f0f0;
  padding: 10px;
  margin: 10px 20px;
  resize: none;
`;
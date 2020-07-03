import styled from "styled-components";

type ChatPropsType = {
  color?: string;
  loading?: boolean;
};

export const WrapChatModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
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
  background: #fff;
  border-radius: 5px;


  svg {
    cursor: pointer;
  }
`;

export const Title = styled.div<ChatPropsType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  background: ${props => (props.color ? props.color : "#fff")};
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
`;
import styled from "styled-components";

type ChatType = {
  onClick?: ()=>void;
};

export const WrapMainTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainTitle = styled.h1`
  margin: 10px 0;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const ChatButton = styled.div<ChatType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 5px 2px ${props => props.theme.colors.primary_hover};
  cursor: pointer;
`;
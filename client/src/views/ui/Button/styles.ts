import styled from "styled-components";

export const WrapButton = styled.div`
  button {
    width: 100%;
    background: ${props => props.theme.colors.success};
    padding: 10px;
    border: ${props => props.theme.colors.success};
    border-radius: 4px;
    margin: 10px 0;
  }
`;

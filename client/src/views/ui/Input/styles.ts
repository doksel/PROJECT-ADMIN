import styled from "styled-components";

export const WrapInput = styled.div`
  width: 100%;

  input {
    width: 100%;
    background-color: white !important;
    padding: 10px;
    border: ${props => props.theme.borders.main};
    border-radius: 4px;
    margin: 10px 0;
  }

  img {
    width: 22px;
  }
`;

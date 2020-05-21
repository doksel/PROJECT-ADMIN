import styled from "styled-components";

export const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  border-top: ${props => props.theme.borders.main};
  padding: 20px;
  height: 100px;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  box-shadow: 2px 2px 8px 1px ${props => props.theme.colors.disabled};

  h1 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 1px;
  }
`;

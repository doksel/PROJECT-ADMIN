import styled from "styled-components";

type ButtonPropsType = {
  type?: string;
};

export const WrapBreadcrumb = styled.div<ButtonPropsType>`
  padding: 10px 20px;
  color: ${props => props.theme.colors.disabled};
  border-bottom: 1px solid ${props => props.theme.colors.disabled};

  span {
    margin: 0 10px;
  }

  a {
    color: ${props => props.theme.colors.main};
    text-decoration: none;

    span {
      margin: 0;
      &:hover {
        border-bottom: solid 1px ${props => props.theme.colors.main_hover};
      }
    }
  }
`;

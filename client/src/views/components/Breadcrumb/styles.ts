import styled from "styled-components";

type ButtonProps = {
  type?: string;
};

export const WrapBreadcrumb = styled.div<ButtonProps>`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.disabled};

  span {
    margin: 0 10px;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    span {
      margin: 0;
      &:hover {
        border-bottom: solid 1px ${props => props.theme.colors.main_hover};
      }
    }
  }
`;

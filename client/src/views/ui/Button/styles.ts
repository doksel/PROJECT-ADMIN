import styled from "styled-components";

type ButtonType = {
  type?: string;
};

export const WrapButton = styled.div<ButtonType>`
  width: 100%;

  button {
    width: 100%;
    max-width: max-content;
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    background: ${props =>
      props.type === "primary"
        ? props.theme.colors.primary
        : props.type === "success"
        ? props.theme.colors.success
        : props.type === "danger"
        ? props.theme.colors.error
        : "#fff"};
    border: 1px solid ${props =>
      props.type === "primary"
        ? props.theme.colors.primary
        : props.type === "success"
        ? props.theme.colors.success
        : props.type === "danger"
        ? props.theme.colors.error
        : props.theme.colors.main};
    color: ${props => (props.type ? "#fff" : props.theme.colors.main)};

    &:hover {
      background: ${props =>
        props.type === "primary"
          ? props.theme.colors.primary_hover
          : props.type === "success"
          ? props.theme.colors.success_hover
          : props.type === "danger"
          ? props.theme.colors.error_hover
          : "#fff"};
      padding: 10px;
      border: 1px solid ${props =>
        props.type === "primary"
          ? props.theme.colors.primary_hover
          : props.type === "success"
          ? props.theme.colors.success_hover
          : props.type === "danger"
          ? props.theme.colors.error_hover
          : props.theme.colors.main_hover};
    }
  }
`;

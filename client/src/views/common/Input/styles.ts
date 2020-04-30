import styled from "styled-components";

type InputProps = {
  labelTransform?: string;
  error?: boolean;
};

export const WrapInput = styled.div<InputProps>`
  margin-top: 20px;
  width: 100%;

  label {
    display: block;
    font-weight: 500;
    width: 100%;
    text-transform: ${props =>
      props.labelTransform ? props.labelTransform : "inherit"};
    color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.main};
  }
`;

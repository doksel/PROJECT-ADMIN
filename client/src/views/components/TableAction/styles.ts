import styled from "styled-components";

type TableActionPropsType = {};

export const WrapTableAction = styled.div<TableActionPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

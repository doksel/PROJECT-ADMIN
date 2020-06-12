import styled from "styled-components";

type TablePropsType = {
  color?: string;
  loading?: boolean;
};

export const WrapTable = styled.div<TablePropsType>`
  width: 100%;
  color: ${props => (props.color ? props.color : "black")};
  background: rgba(226, 226, 226, 0.5);
`;

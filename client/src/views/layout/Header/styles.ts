import styled from "styled-components";

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => props.theme.borders.main};
  padding: 20px;
  height: 100px;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  box-shadow: 2px 2px 8px 1px ${props => props.theme.colors.disabled};

  .burger-menu {
    margin-right: 10px;
    display: none;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}) {
      display: block;
    }
  }

  h1 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 1px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

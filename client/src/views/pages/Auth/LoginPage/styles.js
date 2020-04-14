import styled from "styled-components";

export const WrapForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cececece;
  position: fixed;

  form{
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);

    h1{ 
      text-align: center;
    }
  }
`;
 
export const WrapButton = styled.div`
  margin-top: 60px;
`;

export const WrapInput = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  img {
    width: 22px;
  }
`;
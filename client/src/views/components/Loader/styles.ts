import styled from "styled-components";

type LoaderPropsType = {
  color?: string;
};

export const WrapLoader = styled.div<LoaderPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => (props.color ? props.color : "#fff")};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => (props.color ? props.color : "#fff")} transparent
      transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

import React from "react";
import styled, { css } from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    position: absolute;
    left: 35px;
    top: 22px;
    content: " ";
    height: 33px;
    width: 10px;
    ${(props) =>
      props.large &&
      css`
        height: 162px;
        width: 55px;
        top: 0;
        left: 0rem;
      `};
    ${(props) =>
      !props.checked &&
      css`
        opacity: 0.3;
      `};
    ${(props) =>
      props.secondScreen &&
      css`
        left: -4rem;
      `};
    background: linear-gradient(to bottom, #00c6ff, #0072ff);
  }
  &::before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

function CrossIcon({ large, checked, secondScreen }) {
  return (
    <Div
      large={large}
      checked={checked}
      secondScreen={secondScreen}
      className="cross"
    ></Div>
  );
}

export default CrossIcon;

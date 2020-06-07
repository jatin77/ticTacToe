import React from "react";
import styled, { css } from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 45px;
    width: 45px;
    ${(props) =>
      props.large &&
      css`
        height: 145px;
        width: 145px;
        left: 0rem;
      `};
    ${(props) =>
      props.secondScreen &&
      css`
        left: -1.5rem;
      `};
    ${(props) =>
      !props.checked &&
      css`
        opacity: 0.3;
      `};
    background: linear-gradient(to bottom, #ff9966, #ff5e62);
    border-radius: 50%;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 18px;
      width: 18px;
      ${(props) =>
        props.large &&
        css`
          height: 50px;
          width: 50px;
        `};
      background: #fff;
      border-radius: 50%;
    }
  }
`;

function ZeroIcon({ large, checked, secondScreen }) {
  return (
    <Div large={large} checked={checked} secondScreen={secondScreen}>
      <span></span>
    </Div>
  );
}

export default ZeroIcon;

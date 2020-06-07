import React from "react";
import ZeroIcon from "../common/zeroIcon/ZeroIcon";
import CrossIcon from "../common/crossIcon/CrossIcon";
import styled, { css } from "styled-components";
import "./square.style.css";

const Button = styled.button`
  background: #fff;
  border: 1px solid #dcdcdc;
  float: left;
  font-weight: bold;
  height: 80px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 80px;
  position: relative;
  ${(props) => {
    if (props.index === 2 || props.index === 5 || props.index === 8) {
      return css`
        border-right: 0;
      `;
    }
  }}
  ${(props) => {
    if (props.index === 0 || props.index === 1 || props.index === 2) {
      return css`
        border-top: 0;
      `;
    }
  }}
  ${(props) => {
    if (props.index === 6 || props.index === 7 || props.index === 8) {
      return css`
        border-bottom: 0;
      `;
    }
  }}
  ${(props) => {
    if (props.index === 0 || props.index === 3 || props.index === 6) {
      return css`
        border-left: 0;
      `;
    }
  }}
`;

const Square = (props) => {
  let display = null;
  if (props.value === "O") {
    display = <ZeroIcon checked />;
  } else if (props.value === "X") {
    display = <CrossIcon checked />;
  }
  return (
    <Button className="square" onClick={props.onClick} index={props.index}>
      {display}
    </Button>
  );
};

export default Square;

import styled from "styled-components";
import React from "react";
import { colors } from "../../GlobalStyle";

export const Button = styled.button`
  background-color: ${colors.pink};
  color: ${colors.brown1};
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${colors.pink2};
    transform: translateY(-1px);
    color: ${colors.white};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: transparent; /* 흐린 베이지 */
    color: rgb(108, 102, 93);
    border: none;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const RestAside = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

export const RestTitle = styled.h1`
  font-size: 42px;
  padding-bottom: 30px;
  text-decoration: underline;
  color: blue;
`;

export const RestLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  color: #008000;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s all linear;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  &:hover {
    scale: 1.1;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &.active {
    color: blueviolet;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:not(.active) {
    pointer-events: ${(props) => (props.meals.length > 0 ? "none" : "auto")};
    opacity: ${(props) => (props.meals.length > 0 ? 0.5 : 1)};
  }
`;

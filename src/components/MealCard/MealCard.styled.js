import styled from "styled-components";

export const CardWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #ffffff;
  transition: 0.2s all linear;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const CardImg = styled.img`
  display: inline-block;
  width: 300px;
  height: 200px;
`;

export const CardTitle = styled.p``;
export const CardBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

export const CardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100px;
  color: #ffffff;
  background-color: #008000;
  transition: 0.2s all linear;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }

  &:disabled {
    background-color: blueviolet;
    opacity: 0.5;
  }
`;

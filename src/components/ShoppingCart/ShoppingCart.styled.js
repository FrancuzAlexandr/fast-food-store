import styled from "styled-components";

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;
export const FormWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
`;
export const FormCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: hidden;
  max-height: 500px;
  padding: 25px;
  border-radius: 25px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 0;
  justify-content: flex-start;
  padding: 25px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.7);

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
`;

export const SubmitLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 15px;
`;

export const SubmitInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  background-color: #ffffff;
  border: none;
  width: 100%;
  height: 52px;
  padding: 0 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

export const ErrorText = styled.span`
  display: flex;
  position: absolute;
  top: 80px;

  &:last-of-type {
    top: 190px;
  }
`;

export const SubmitBtnBlock = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -130px;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  width: calc((100% - 30px) / 2);
  height: 100px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SubmitBtn = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #008000;
  transition: 0.2s all linear;

  &:hover {
    scale: 1.1;
  }
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const FormCardWrapper = styled.li`
  list-style: none;
  display: flex;
  position: relative;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const FormCardImg = styled.img`
  display: inline-block;
  width: 200px;
  height: 135px;
`;

export const FormCardTitle = styled.p``;
export const FormCardInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const FormCardInput = styled.input`
  width: 100%;
  max-width: 200px;
  margin-top: 30px;
`;

export const FormCardDelBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  transition: 0.2s all linear;
  &:hover {
    background-color: blueviolet;
  }
`;

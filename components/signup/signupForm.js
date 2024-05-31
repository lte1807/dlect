import React from "react";
import { styled } from "styled-components";

function signupForm() {
  return (
    <>
      <InputForm>
        <h3>NAME</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>ID</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>PASSWORD</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>CONFIRM PASSWORD</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>E-MAIL</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>HEIGHT</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>WEIGHT</h3>
        <Input />
      </InputForm>

      <InputForm>
        <h3>DATE OF BIRTH</h3>
        <Input type="date" />
      </InputForm>
      <SignUpBtn>회원가입</SignUpBtn>
    </>
  );
}

export default signupForm;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  border: 1px solid #d4d4d4;
  border-radius: 0.8rem;
`;

const SignUpBtn = styled.div`
  width: 100%;
  height: 4rem;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

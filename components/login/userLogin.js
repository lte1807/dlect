import React from "react";
import { styled } from "styled-components";

function userLogin() {
  return (
    <>
      <InputForm>
        <h3>ID</h3>
        <Input />
      </InputForm>
      <InputForm>
        <h3>PASSWORD</h3>
        <Input />
      </InputForm>
    </>
  );
}

export default userLogin;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  border: 1px solid #d4d4d4;
  border-radius: 0.8rem;
`;

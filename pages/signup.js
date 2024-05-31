import { DEVICE_SIZE } from "@/styles/DeviceSize";
import React from "react";
import { styled } from "styled-components";
import SignupForm from "@/components/signup/signupForm";

function signUp() {
  return (
    <Container>
      <Wrapper>
        <h1>SIGN UP</h1>
        <InputContainer>
          <SignupForm />
        </InputContainer>
      </Wrapper>
    </Container>
  );
}

export default signUp;

const Container = styled.div`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 14rem;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 0 4rem;
  }
`;

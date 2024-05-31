import { DEVICE_SIZE } from "@/styles/DeviceSize";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import UserLogin from "@/components/login/userLogin";
import GuestLogin from "@/components/login/guestLogin";

function Login() {
  const [activeButton, setActiveButton] = useState("user");

  const onClickEvent = (button) => {
    setActiveButton(button);
  };

  return (
    <Container>
      <Wrapper>
        <h1>SIGN IN</h1>
        <UserLoginContainer>
          <UserLoginButton
            active={activeButton === "user"}
            onClick={() => onClickEvent("user")}
          >
            일반회원 로그인
          </UserLoginButton>
          <UserLoginButton
            active={activeButton === "guest"}
            onClick={() => onClickEvent("guest")}
          >
            비회원 배송조회
          </UserLoginButton>
        </UserLoginContainer>
        <InputContainer>
          {activeButton === "user" ? <UserLogin /> : <GuestLogin />}
        </InputContainer>
      </Wrapper>
    </Container>
  );
}

export default Login;

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

  gap: 3rem;
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

const UserLoginContainer = styled.div`
  display: flex;
`;

const UserLoginButton = styled.div`
  background-color: ${(props) => (props.active ? "black" : "#e9e9e9")};
  color: ${(props) => (props.active ? "white" : "#a5a5a5")};
  padding: 2rem;
  border-radius: 0.5rem;
  cursor: pointer; /* Added cursor pointer for better UX */
  box-shadow: ${(props) => props.active && "0 4px rgba(0, 0, 0, 0.09)"};
  font-weight: ${(props) => props.active && "bold"};
`;

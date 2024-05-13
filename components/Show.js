import React, { useState } from "react";
import { styled } from "styled-components";

function Show() {
  const [isChange, setIsChange] = useState(false);

  const clickEvent = () => {
    setIsChange(!isChange);
  };

  const clickAlert = () => {
    alert("주소가 복사되었습니다.");
  };

  return (
    <Container>
      {isChange ? (
        <div>
          <ButtonComponent>
            <URL>주소</URL>
            <ButtonCopy onClick={clickAlert}>copy</ButtonCopy>
          </ButtonComponent>
        </div>
      ) : (
        <>
          <ButtonComponent>디자인 전후 비교</ButtonComponent>
          <ButtonLink onClick={clickEvent}>디자인 자랑하기</ButtonLink>
        </>
      )}
    </Container>
  );
}

export default Show;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const ButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border: 2px solid black;
  border-radius: 20px;
  gap: 20px;
`;

const ButtonLink = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const URL = styled.div`
  width: 300px;
  height: 30px;
  border: 1px solid black;
`;

const ButtonCopy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border: 1px solid black;
`;

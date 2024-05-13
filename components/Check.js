import React, { useState } from "react";
import { styled } from "styled-components";

function Check() {
  const [isOpen, setIsOpen] = useState(false);
  const openClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Information>
          product
          <br /> Information
        </Information>
        <ModelCut onClick={openClick}>model cut</ModelCut>
      </Wrapper>
      <Flex>
        <Review>review</Review>
      </Flex>
      {isOpen && (
        <ModalContainer>
          <CloseModal onClick={openClick}>닫기</CloseModal>
        </ModalContainer>
      )}
    </Container>
  );
}

export default Check;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Information = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 300px;
  height: 180px;
  border-radius: 20px;
`;

const ModelCut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 300px;
  height: 180px;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Review = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 20px;
  width: 620px;
  height: 70px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 12%;
  left: 5%;
  width: 380px;
  height: 700px;
  z-index: 1000;
  border: 2px solid gray;
  background-color: white;
`;

const CloseModal = styled.div`
  text-align: right;
`;

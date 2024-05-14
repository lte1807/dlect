import React, { useState } from "react";
import { keyframes, styled } from "styled-components";
import Modal from "./modal/Modal";

function Check() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container>
      <Wrapper>
        <ProductionInfo>
          product infomation
        </ProductionInfo>
        <ReivewButton onClick={openModal}>
          review
        </ReivewButton>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <button onClick={closeModal}>Close</button>
          <h2>This is a Modal</h2>
          <p>You can put any content you like in here.</p> 
        </Modal>
      </Wrapper>
    </Container>
  );
}

export default Check;

const HoverAnimation = keyframes`
  0% {
    width: 50%;
    height: 90%;
    font-size: 1.6rem;
    font-weight: bold;
  }
  30% {
    width: 60%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: bold;
  }
  100% {
    width: 60%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  
`
const CheckItemStyle = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 2rem;
  
  &:hover,
  &:focus {
      animation: ${HoverAnimation} 1s forwards;
  }
    

    
`

const ProductionInfo = styled(CheckItemStyle)`
  
  
`
const ReivewButton = styled(CheckItemStyle)`
  
`
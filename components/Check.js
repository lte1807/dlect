import React, { useState } from "react";
import { keyframes, styled } from "styled-components";
import Modal from "./modal/Modal";

function Check() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isInfomation, setIsInfomation] = useState(false);
  const openReivewModal = () => setIsReviewOpen(!isReviewOpen);
  const openInfomationModal = () => setIsInfomation(!isInfomation);

  return (
    <Container>
      <Wrapper>
        <ProductionInfo onClick={openInfomationModal}>
          product infomation
        </ProductionInfo>
        <ReivewButton onClick={openReivewModal}>
          review
        </ReivewButton>
        <Modal isOpen={isReviewOpen}>
          <div onClick={openReivewModal}>Close</div>
          <h2>This is a Modal</h2>
          <p>You can put any content you like in here.</p> 
        </Modal>
        <Modal isOpen={isInfomation}>
          <div onClick={openInfomationModal}>Close</div>
          <h2>This is a Product Infomation</h2>
          <p>You can put any content you like in here.</p> 
        </Modal>
      </Wrapper>
    </Container>
  );
}

export default Check;

const boxShadowAnimation = keyframes`
  from {
    
    box-shadow: inset 0 0 0px 0px rgba(0, 0, 250, .6);
    
  }
  to{
    
    box-shadow: inset 0 0 10px 0px rgba(0, 0, 250, .6);
    
  }
`


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
const CheckItemStyle = styled.button`
  background-color: white;
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  
  &:hover{
    margin-right:1px;
    top:4px;
    border: 0.5px solid #eeeeee;
    margin-right:-2px;
    animation: ${boxShadowAnimation} .9s alternate infinite;
  }
`

const ProductionInfo = styled(CheckItemStyle)`
  
`
const ReivewButton = styled(CheckItemStyle)`
  
`
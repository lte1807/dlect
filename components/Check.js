import React, { useState } from "react";
import { keyframes, styled } from "styled-components";
import Modal from "./modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Check() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isInfomation, setIsInfomation] = useState(false);

  const openReivewModal = () => setIsReviewOpen(!isReviewOpen);
  const openInfomationModal = () => setIsInfomation(!isInfomation);

  return (
    <Container>
      <Wrapper>
        <h1>Product Image</h1>
        <ProductionInfo onClick={openInfomationModal}>
          <StyledSwiper pagination={{ clickable: true }} modules={[Pagination]}>
            {Array.from({ length: 2 }, (_, i) => (
              <StyledSwiperSlide key={i}>Slide {i + 1}</StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </ProductionInfo>
        <h1>Model Cut</h1>
        <ReivewButton onClick={openReivewModal}>
          <StyledSwiper pagination={{ clickable: true }} modules={[Pagination]}>
            {Array.from({ length: 4 }, (_, i) => (
              <StyledSwiperSlide key={i}>Slide {i + 1}</StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </ReivewButton>
        <AddList>
          My own hooie zip-up
          <br />
          129,000 won <br />
          - part1 zipper Select <br />
          - part2 poket Select
          <br />
          - 전면 주머니 절개 디테일
          <br />- 후면 핀턱 디테일로 재밌는 실루엣 연출
        </AddList>
        <ConfirmedSelection>Confirmed Selection</ConfirmedSelection>
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
  to {
    box-shadow: inset 0 0 10px 0px rgba(0, 0, 250, .6);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
`;

const CheckItemStyle = styled.button`
  background-color: white;
  width: 100%;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;

  &:hover {
    margin-right: 1px;
    top: 4px;
    border: 0.5px solid #eeeeee;
    margin-right: -2px;
    animation: ${boxShadowAnimation} 0.9s alternate infinite;
  }
`;

const ProductionInfo = styled(CheckItemStyle)``;
const ReivewButton = styled(CheckItemStyle)``;

const AddList = styled.div``;

const ConfirmedSelection = styled.button`
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0 auto;
  &:hover {
    margin: 0 auto;
  }
`;

// Styled Swiper components
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet {
    background-color: #a9a9a9;
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #f06eff;
  font-size: 24px;
  font-weight: bold;
`;

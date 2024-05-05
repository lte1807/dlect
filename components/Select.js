import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const selectArr = [
  { name: "zipper", items: ["A", "B", "C"] },
  { name: "poket", items: ["D", "E", "F"] },
  { name: "size", items: ["G", "H", "I"] },
];

function Select() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickShowItem = (index) => {
    setActiveIndex(index + 1);
    console.log(activeIndex);
  };

  return (
    <SelectContainer>
      <Wrapper>
        <Left>
          {selectArr.map((select, index) => (
            <Accessory key={index} onClick={() => onClickShowItem(index)}>
              {select.name}
            </Accessory>
          ))}
        </Left>
        <Right>
          <Items>
            {selectArr.map((item, index) => (
              <FlexBox key={index} activeIndex={activeIndex}>
                {item.items.map((el) => (
                  <AccessoryItem>{el}</AccessoryItem>
                ))}
              </FlexBox>
            ))}
          </Items>
        </Right>
      </Wrapper>
    </SelectContainer>
  );
}

export default Select;

const RibbonAnimation = keyframes`
  0% {
    transform: translateY(48px);

  }
  30%{
    transform: translateY(0px);

  }
  100% {

  }
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Accessory = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  border: 1px solid black;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 6rem;
    height: 6rem;
    font-size: large;
    font-weight: bold;
  }
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  visibility: hidden;
`;

const AccessoryItem = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  &:nth-child(${(props) => props.activeIndex}) {
    visibility: visible;
    :nth-child(1) {
      animation: ${RibbonAnimation} 1.2s ease-in-out;
    }
    :nth-child(2) {
      animation: ${RibbonAnimation} 2.2s ease-in-out;
    }
    :nth-child(3) {
      animation: ${RibbonAnimation} 3s ease-in-out;
    }
  }
`;

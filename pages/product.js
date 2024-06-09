import Check from "@/components/Check";
import Select from "@/components/Select";
import Show from "@/components/Show";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useSpring } from "@react-spring/three";
import Scene from "@/components/models/Scene";
import resetIcon from "../public/img/return.png";

function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [model, setModel] = useState("");
  const [layer, setLayer] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [{ position, scale, rotation }, set] = useSpring(() => ({
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
  }));
  const childRef = useRef();

  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  const ClickMenu = (index) => {
    setActiveIndex(index);
  };

  const zoomToPosition = (newPosition, newScale) => {
    set({ position: newPosition, scale: newScale, config: { duration: 500 } });
  };

  const onSetModel = (url) => {
    setModel(url);
    zoomToPosition([0, -2, 0], [1.5, 1.5, 1.5]);
  };

  const layerClickEvent = () => {
    setLayer(!layer);
  };

  // 카메라 위치를 초기화하는 함수
  const resetCameraPosition = () => {
    // reset 함수 호출
    set({
      position: [0, 0, 0],
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
      config: { duration: 500 },
    });
    childRef.current.resetClick();
  };

  const menuArr = [
    { name: "SELECT", component: <Select updateModel={onSetModel} /> },
    { name: "CHECK", component: <Check /> },
  ];
  return (
    <Container>
      <Section>
        <Model>
          <Suspense
            fallback={
              <LoadingOverlay>
                <LoadingSpinner />
                <LoadingText>Loading...</LoadingText>
              </LoadingOverlay>
            }
          >
            <Canvas camera={{ fov: 100 }} style={{ background: "#e6e6e5" }}>
              <Scene
                ref={childRef}
                position={position}
                scale={scale}
                rotation={rotation}
                model={model}
                resetCameraPosition={resetCameraPosition}
                handleModelLoaded={handleModelLoaded}
                layer={layer}
              />
            </Canvas>
            <RotateResetBtn onClick={resetCameraPosition}>
              <Image width={25} height={25} alt="reset" src={resetIcon} />
            </RotateResetBtn>
            <ToggleSwitch onClick={layerClickEvent} SwitchOnOff={layer}>
              <SwithchBall SwitchOnOff={layer} />
            </ToggleSwitch>
          </Suspense>
        </Model>
      </Section>
      <Section>
        <Menu>
          <TabMenu>
            {menuArr.map((menu, index) => (
              <MenuStyle
                clicked={activeIndex === index}
                key={index}
                onClick={() => ClickMenu(index)}
              >
                {menu.name}
              </MenuStyle>
            ))}
          </TabMenu>
          <SelectItems>{menuArr[activeIndex].component}</SelectItems>
          <CtaButton>
            <CtaButtonStyle>Cart</CtaButtonStyle>
            <CtaButtonStyle>Buy</CtaButtonStyle>
          </CtaButton>
        </Menu>
      </Section>
    </Container>
  );
}

export default Product;

const toggleOnAnimation = keyframes`
  from {
    background: white;
    
  }

  to {
    background: #000000;
    
  }
`;

const toggleOffAnimation = keyframes`
  from {
    background: #000000;
  }

  to {
    background: white;
  }
`;

const switchOnAnimation = keyframes`
  from {
    background: #000000;
    transform: translateX(0px);
  }

  to {
    background: white;
    transform: translateX(20px);
  }
`;

const switchOffAnimation = keyframes`
  from {
    background: white;
    transform: translateX(20px);
  }

  to {    
    background: #000000;
    
    transform: translateX(0px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 93%;
`;

const Section = styled.div`
  width: 100%;
  height: 50%;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TabMenu = styled.div`
  display: flex;
  flex-basis: 8%;
  justify-content: center;
  gap: 2rem;
  margin-top: 10px;
`;

const MenuStyle = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  background-color: white;
  ${(props) =>
    props.clicked &&
    css`
      top: 5px;
      box-shadow: 0 4px 3px 1px #fcfcfc inset;
      border: 0.5px solid #eeeeee;
      margin-right: -2px;
    `}
`;

const SelectItems = styled.div`
  flex-basis: 80%;
`;
const CtaButton = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-basis: 12%;
  bottom: 0;
  z-index: 1000;
`;

const CtaButtonStyle = styled.button`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 4rem;
  margin-bottom: 15px;
`;

const Model = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const RotateResetBtn = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background-color: black;
  position: absolute;
  bottom: 50px;
  right: 27px;
  z-index: 1;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
`;

const LoadingText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ToggleSwitch = styled.div`
  position: absolute;
  display: flex;
  padding: 1px;
  align-items: center;
  bottom: 10px;
  right: 25px;
  z-index: 1;
  width: 40px;
  height: 20px;
  background: white;
  border-radius: 2rem;
  animation: ${(props) =>
    props.SwitchOnOff
      ? css`
          ${toggleOnAnimation} 1s forwards
        `
      : css`
          ${toggleOffAnimation} 1s forwards
        `};
`;

const SwithchBall = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  animation: ${(props) =>
    props.SwitchOnOff
      ? css`
          ${switchOnAnimation} 1s forwards
        `
      : css`
          ${switchOffAnimation} 1s forwards
        `};
`;

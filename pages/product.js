import Check from "@/components/Check";
import Wear from "@/components/models/Wear";
import Zipper from "@/components/models/Zipper";
import Select from "@/components/Select";
import Show from "@/components/Show";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import layerIcon from '../public/icons/layer.png'


function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [model, setModel] = useState("");
  const [layer, setLayer] = useState(false);

  const [modelLoaded, setModelLoaded] = useState(false);

  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  const ClickMenu = (index) => {
    setActiveIndex(index);
  };

  const onSetModel = (url) => {
    setModel(url);
  };

  const layerClickEvent = () => {
    setLayer(!layer);
    console.log(layer);
  }
  

  const menuArr = [
    { name: "SELECT", component: <Select updateModel={onSetModel} /> },
    { name: "CHECK", component: <Check /> },
    { name: "SHOW", component: <Show /> },
  ];
  return (
    <Container>
      <Section>
      <Model>
      <Suspense fallback={(
                <LoadingOverlay>
                  <LoadingSpinner />
                  <LoadingText>Loading...</LoadingText>
                </LoadingOverlay>
              )}>
          <Canvas camera={{ fov: 100 }} style={{ background: "#e6e6e5" }}>
            <OrbitControls target={[0, 0, 0]} />
            <group>
              
                <mesh position={[0, -14, 0]} scale={[10.5, 10.5, 10.5]}>
                  {/* 모델이 로딩 완료되면 handleModelLoaded 호출 */}
                  <Wear onLoad={handleModelLoaded} />
                </mesh>
                {model && (
                  <mesh position={[-0.1, -4, 1]} scale={[0.2, 0.2, 0.01]}>
                    <Zipper model={model} />
                    <meshStandardMaterial attach="material" color={0xa3b18a} />
                  </mesh>
                )}
              
            </group>
            <Environment
              background={true}
              files={[`/hdr/${layer ? 'studio' : 'whiteBackground'}.hdr`]}
            />
            <axesHelper args={[5]} />
          </Canvas>
          <LayerChangeBtn src={layerIcon} width={40} height={40} alt="레이어" onClick={layerClickEvent}/>
        </Suspense>
        </Model>
      </Section>
      <Section>
        <Menu>
          <TabMenu>
            {menuArr.map((menu, index) => (
              <MenuStyle clicked={activeIndex === index} key={index} onClick={() => ClickMenu(index)}>
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



const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

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
  justify-content: space-around;
  gap: 2rem;
  margin-top: 10px;
`;

const MenuStyle = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  background-color: white;
  ${props => props.clicked && css`
      top:5px;
      box-shadow: 0 4px 3px 1px #FCFCFC inset;
      border: 0.5px solid #eeeeee;
      margin-right:-2px;
  `
  }
  
`;

const SelectItems = styled.div`
  flex-basis: 80%;
`;
const CtaButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-basis: 12%;
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

const LayerChangeBtn = styled(Image)`
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 1;
`

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
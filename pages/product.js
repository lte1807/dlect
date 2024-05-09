import Check from "@/components/Check";
import Wear from "@/components/models/Wear";
import Select from "@/components/Select";
import Show from "@/components/Show";
import {
  Backdrop,
  CameraControls,
  Environment,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import styled from "styled-components";

function Product() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuArr = [
    { name: "SELECT", component: <Select /> },
    { name: "CHECK", component: <Check /> },
    { name: "SHOW", component: <Show /> },
  ];

  const ClickMenu = (index) => {
    setActiveIndex(index);
  };
  return (
    <Container>
      <Section>
        <Model>
          <Canvas camera={{ fov: 100 }} style={{ background: "#e6e6e5" }}>
            <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
            <OrbitControls target={[0, -0, 0]} />
            <ambientLight intensity={Math.PI / 2} />
            <group position={[0, -14, 0]} scale={[10.5, 10.5, 10.5]}>
              <Suspense>
                <Wear />
              </Suspense>
            </group>
            <Environment preset="apartment" background />
            <axesHelper args={[5]} />
          </Canvas>
        </Model>
      </Section>
      <Section>
        <Menu>
          <TabMenu>
            {menuArr.map((menu, index) => (
              <MenuStyle key={index} onClick={() => ClickMenu(index)}>
                {menu.name}
              </MenuStyle>
            ))}
          </TabMenu>
          <SelectItems>{menuArr[activeIndex].component}</SelectItems>
          <CtaButton>
            <CtaButtonStyle>장바구니</CtaButtonStyle>
            <CtaButtonStyle>구매하기</CtaButtonStyle>
          </CtaButton>
        </Menu>
      </Section>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  width: 100%;
  height: 93%;
`;

const Section = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
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
`;

const MenuStyle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid black;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  padding: 0.5rem 2rem;

  &:hover {
    background-color: #e5e5e5;
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

const CtaButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 1rem 1rem 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 4rem;
`;

const Model = styled.div`
  width: 100%;
  height: 100%;
`;

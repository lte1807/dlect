import { DEVICE_SIZE } from "@/styles/DeviceSize";
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Link href="/list">
          <ImageContainer></ImageContainer>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  gap: 3rem;
  position: relative;
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/img/intro2.gif");
  background-color: red;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    height: 55rem;
    position: absolute;
    top: 17%;
    left: 1rem;
  }
`;

import styled from "styled-components";
import MenuIcon from "@/public/icons/HeaderMenu.js";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "@/components/SideMenu";
import LogoImg from "@/public/img/logo.png";
import Image from "next/image";
import { DEVICE_SIZE } from "@/styles/DeviceSize";

function Header() {
  const [active, setActive] = useState(false);

  const ClickSideMenu = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Wrap>
        <Link href="/">
          <Logo>
            <Image width={80} height={20} src={LogoImg} alt="로고" />
          </Logo>
        </Link>
        <HeaderNav>
          <Language>언어</Language>
          <div onClick={ClickSideMenu}>
            <MenuIcon width={30} height={30} />
          </div>
        </HeaderNav>
      </Wrap>
      {active && <SideMenu ActiveState={ClickSideMenu} />}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 100%;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2.5rem;
`;

const Logo = styled.div`
  margin-top: 0.4rem;
`;
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const Language = styled.div`
  font-size: 1.5rem;
`;

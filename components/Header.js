import styled from "styled-components";
import MenuIcon from "@/public/icons/HeaderMenu.js";
import Link from "next/link";

function Header() {
  return (
    <Container>
      <Wrap>
        <Link href="/">
          <Logo>D.LECT</Logo>
        </Link>
        <HeaderNav>
          <Language>언어</Language>
          <MenuIcon width={30} height={30} />
        </HeaderNav>
      </Wrap>
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
  font-size: 2rem;
  font-weight: bold;
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

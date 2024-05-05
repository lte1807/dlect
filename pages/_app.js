import Header from "@/components/Header";
import GlobalStyle from "@/styles/globalStyles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderStyle>
          <Header />
        </HeaderStyle>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #d5d5d5;
`;

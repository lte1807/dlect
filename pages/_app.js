import Header from "@/components/Header";
import GlobalStyle from "@/styles/globalStyles";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noHeaderPages = ["/"];

  return (
    <>
      <GlobalStyle />
      <Container>
        {!noHeaderPages.includes(router.pathname) && (
          <HeaderStyle>
            <Header />
          </HeaderStyle>
        )}

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
  height: 7%;
  border-bottom: 1px solid #d5d5d5;
`;

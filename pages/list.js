import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

function list() {
  return (
    <Container>
      <Wrapper>
        <Link href="/product">
          <Section></Section>
        </Link>
        <Link href="/product">
          <Section></Section>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default list;

const Container = styled.div`
  width: 100%;
  height: 93%;
  border: 1px solid black;
  padding: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const Section = styled.div`
  height: 50%;
  border: 1px solid black;
`;

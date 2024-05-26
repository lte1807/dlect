import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

function list() {
  return (
    <Container>
      <Wrapper>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
        <ProductStyle>
          <Link href="/product">
            <ProductList></ProductList>
          </Link>
        </ProductStyle>
      </Wrapper>
    </Container>
  );
}

export default list;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ProductStyle = styled.div``;

const ProductList = styled.button`
  background-color: white;
  width: 16rem;
  height: 15rem;
  border-radius: 2rem;
`;

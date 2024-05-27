import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";
import kakaoImg from "@/public/img/kakaotalk.png";
import naverImg from "@/public/img/naver.png";
import instagramImg from "@/public/img/instagram.png";
import Modal from "./modal/Modal";

function Show() {
  
  const [isClick, setIsClick] = useState(false);
  const [isCompareModal, setIsCompareModal] = useState(false);

  const clickEvent = () => {
    setIsClick(!isClick);
  }

  const openCompareModal = () => {
    setIsCompareModal(!isCompareModal);
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        
        {isClick ? (
          <>
            <CopyButton>
              <Adress>https://m.dlect.co.kr</Adress>
              <Copy onClick={() => handleCopyClipBoard('https://delightful-torrone-946274.netlify.app')}>copy</Copy>
              <SocialBtnGroup>
                <SnsButton>
                  <Image width={35} height={35} alt="카카오" src={kakaoImg}/>
                </SnsButton>
                <SnsButton>
                  <Image width={35} height={35} alt="네이버" src={naverImg}/>
                </SnsButton>
                <SnsButton>
                  <Image width={35} height={35} alt="인스타그램" src={instagramImg}/>
                </SnsButton>                
              </SocialBtnGroup>
            </CopyButton>
          </>
        ) : (
          <>
            <CompareButton onClick={setIsCompareModal}>
              디자인 전 후 비교
            </CompareButton>
            <Boast onClick={clickEvent}>디자인 자랑하기</Boast>
            <Modal isOpen={isCompareModal}>
              <div onClick={openCompareModal}>Close</div>
              <h2>This is a CompareModal</h2>
              <p>You can put any content you like in here.</p> 
          </Modal>          
          </>
          
        )}
      </Wrapper>      
    </Container>
  );
}

export default Show;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:4rem;
`
const CompareButton = styled.button`
  width: 100%;
  height: 8rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`
const Boast = styled.div`
  font-size: 1.3rem;
  text-decoration: underline;
`

const CopyButton = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  color: black;
    -webkit-text-fill-color: #000000;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 3px 1px #FCFCFC,
            0 6px 5px #D6D7D9,
            0 -3.5px 2px #CECFD1,
            inset 0 0 1.5px 0 #CECFD1;
`

const Adress = styled.div`
  width: 70%;
  height: 3rem;
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 1rem;
`

const Copy = styled.div`
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
    -webkit-text-fill-color: #000000;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 3px 1px #FCFCFC,
            0 6px 5px #D6D7D9,
            0 -3.5px 2px #CECFD1,
            inset 0 0 1.5px 0 #CECFD1;
    

    &:active {
      top:5px;
      box-shadow: 0 4px 3px 1px #FCFCFC inset;
      border: 0.5px solid #eeeeee;
      margin-right:-2px;
      margin-left: 2px;
    }
`

const SocialBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

const SnsButton = styled.div`
border-radius: 3rem;
color: black;
    -webkit-text-fill-color: #000000;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 3px 1px #FCFCFC,
            0 6px 5px #D6D7D9,
            0 -3.5px 2px #CECFD1,
            inset 0 0 1.5px 0 #CECFD1;
    

    &:active {
      top:5px;
      box-shadow: 0 4px 3px 1px #FCFCFC inset;
      border: 0.5px solid #eeeeee;
      margin-right:-2px;
      margin-top: -2px;
    }
  
`
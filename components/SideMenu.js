import styled from "styled-components";

function SideMenu() {
  
    return (
      <Container>
        <Wrapper>
           <Introdution>                
                COMPANY :HIRAETH<br/>
                OWNER : SEO DONG MIN , KANG JIN WOO<br/>
                BUSINESS LICENSE : 745-03-02887<br/>
                MAIL ORDER LICENSE : 2022-GOYANG DEOGYANG DISTRICT-2235<br/>
                ADDRESS : 63, Tongil-ro 742beon-gil, Deogyang-gu, Goyang-si,<br/>
                Gyeonggi-do, Republic of Korea 103-2204<br/>
                TEL : 010-4388-1562 , 010-5509-0639<br/>
                MAIL : HI_RAETH@NAVER.COM
           </Introdution>
        </Wrapper>
      </Container>
    );
  }
  
  export default SideMenu;

  const Container = styled.div`
    position: fixed;
    background-color : rgb(0,0,0,0.5);
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  `
  const Wrapper = styled.div`
    background-color: white;
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  `

  const Introdution = styled.div`
    width: 100%;
    white-space: pre-line;
    border-top: 2px solid black;
    padding: 1rem 0
  `
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import landingbg from "../../../src/assets/Landingpage/backgroundslide.png";
import homepagebg from "../../assets/Landingpage/homepagebg.png";

const HeaderWrapper = styled.header`
  height: 3.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem;
`;

const Wrapper = styled.div`
  /* background: url('./GroupImageBg'); */
  height: 100%;
  
  background: url(${landingbg}) no-repeat right center;
  /* background-image: url('src/assets/Landingpage/backgroundslide.png') ; */
  /* background-image: url('../..assets/Landingpage/homepagebg.png'); */
`;
const SectionRight = styled.section`
  background: url(${homepagebg}) no-repeat right center ;
  background-size: contain;
  height: 32rem;
  width: calc(100% - 50%);

`;

const SectionLeft = styled.section`
  padding: 10rem;
  width: 60%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
    gap: 2rem;
  & div{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
  }
`;



const Button = styled.button`
padding:1rem;
padding: 0.5rem 1.5rem;
height:1.65rem;

text-align:center;
color:${props => (props.active ? "white" : "black")};
background-color:${props => (props.active ? "#111B47" : "#fff")};
align-items:center;
display:flex;
`

const Main = styled.main`
display: flex;
justify-content: space-between;
align-items: center;
gap:3rem;
height:100%;
`

const Landingpage = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>
        <SectionLeft>
          <h3 style={{fontSize:'30px'}}>Introduce Your Product Quickly & Effectively</h3>
          <p style={{fontSize:'16px'}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div>
            <Button active={true}>Purchase UI Kit</Button>
            <Button active={false}>LearnMore</Button>
          </div>
        </SectionLeft>
        <SectionRight></SectionRight>
      </Main>
    </Wrapper>
  );
};

export default Landingpage;

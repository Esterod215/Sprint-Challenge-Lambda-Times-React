import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const MainDiv =styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container=styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    
      width: 1280px;
    
  }
  
  ${props => (props.type === 'left' ? 
  `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `: null)}

  ${props => (props.type === 'center' ? 
  `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  `: null)}

  ${props => (props.type === 'right' ? 
  `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  `: null)}

`;

const BarSpan=styled.span`
&:hover{
  text-decoration: underline;
}
${props => (props.type === 'leftSpan' ? 
  `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  `: null)}

  ${props => (props.type === 'centerSpan' ? 
  `
  cursor: pointer;
  margin-right: 5%;
  `: null)}

  ${props => (props.type === 'last' ? 
  `
  cursor: pointer;
  
  margin-right: 0;
  `: null)}

  ${props => (props.type === 'rightSpan' ? 
  `
  cursor: pointer;
  `: null)}

`;



const TopBar = () => {
  return (
    <MainDiv>
      <Container>
        <Container type="left">
          <BarSpan type="leftSpan">TOPICS</BarSpan><BarSpan type="leftSpan">SEARCH</BarSpan>
        </Container>
        <Container type="center">
          <BarSpan type="centerSpan">GENERAL</BarSpan><BarSpan type="centerSpan">BROWNBAG</BarSpan><BarSpan type="centerSpan" >RANDOM</BarSpan><BarSpan type="centerSpan">MUSIC</BarSpan><BarSpan type="last">ANNOUNCEMENTS</BarSpan>
        </Container>
        <Container type="right">
          <BarSpan type="rightSpan">LOG IN</BarSpan>
        </Container>
      </Container>
    </MainDiv>
  )
}

export default TopBar;
import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items:center;
  color: white;
  position: relative;

  @media(max-width: 768px) {
    align-items: flex-start;
  }
`

export const LandingPageSection = styled.div`
  .message {
    text-align:center;
  }

  .loginButton {
    display: flex;
    margin-right: auto;
    color: white;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  @media (max-width: 768px){
    width: 80%;

    .loginButton{
      
      flex-direction: column;
      height: 150px;
    }  
  }
`

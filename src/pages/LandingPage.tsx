import Button from "@mui/material/Button";
import styled from 'styled-components';



export default function LandingPage() {
  return (
    <LandingPageContainer>
      <LandingPageSection>
        <div className="message">
          <h1>The MLB Survivor Game</h1>
          <h5>Sample Landing Page</h5>
        </div>
        <div className="loginButton">
          <Button variant="contained" color="success" href="/login">
            GO TO LOGIN
          </Button>
          <Button variant="contained" color="success" href="/register">
            GO TO REGISTER
          </Button>
        </div>
      </LandingPageSection>
    </LandingPageContainer>
  );
}



const LandingPageContainer = styled.div`
  width: 100vw;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items:center;
  color: white;
  position: relative;
`

const LandingPageSection = styled.div`
  .message {
    text-align:center;
  }

  .loginButton {
    display: flex;
    margin-right: auto;
    color: white;
    justify-content: space-evenly;
  }

  @media (max-width: 768px){
    width: 80%;

    .loginButton{
      flex-direction: column;
      height: 150px;
    }  
  }
`



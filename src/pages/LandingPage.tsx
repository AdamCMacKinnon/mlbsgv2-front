import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

//Components
import Button from "@mui/material/Button";
import LeaderBoard from "../components/LeaderBoard";

//Styles
import { LandingPageContainer, LandingPageSection, CloseRegistration } from "./LandingPage.styles";


const LandingPage = () => {
  const [closeRegistration] = useState(false);
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <LandingPageContainer>
      <LandingPageSection closeRegistration={closeRegistration}>
        <div className="message">
          <h1>The MLB Survivor Game</h1>
  </div>
        <div>
          <LeaderBoard />
        </div>
        <div className="loginButton">
          <Button variant="contained" color="success" onClick={e => handleClick('/login')}>
            GO TO LOGIN
          </Button>
          {
            closeRegistration ?
            <CloseRegistration>We are not accepting new registrations since the season has started</CloseRegistration>
            :
            <Button variant="contained" color="success"  onClick={e => handleClick('/register')}>
            GO TO REGISTER
          </Button>
          }

        </div>
      </LandingPageSection>
    </LandingPageContainer>
  );
}

export default LandingPage;
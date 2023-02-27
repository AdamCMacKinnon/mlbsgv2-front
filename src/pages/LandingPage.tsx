import {useNavigate} from 'react-router-dom';

//Components
import Button from "@mui/material/Button";
import LeaderBoard from "../components/LeaderBoard";

//Styles
import { LandingPageContainer, LandingPageSection } from "./LandingPage.styles";


const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <LandingPageContainer>
      <LandingPageSection>
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
          <Button variant="contained" color="success" onClick={e => handleClick('/register')}>
            GO TO REGISTER
          </Button>
        </div>
      </LandingPageSection>
    </LandingPageContainer>
  );
}

export default LandingPage;
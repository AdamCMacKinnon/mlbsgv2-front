//Components
import Button from "@mui/material/Button";
import LeaderBoard from "../components/LeaderBoard";

//Styles
import { LandingPageContainer, LandingPageSection } from "./LandingPage.styles";


const LandingPage = () => {
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

export default LandingPage;
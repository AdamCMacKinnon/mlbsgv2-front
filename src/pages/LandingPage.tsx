import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Button from "@mui/material/Button";
import LeaderBoard from "../components/LeaderBoard";

//Styles
import {
  LandingPageContainer,
  LandingPageSection,
  CloseRegistration,
  LandingContent,
} from "./LandingPage.styles";
import LandingInfo from "../components/LandingInfo";

const LandingPage = () => {
  const [closeRegistration] = useState(false);
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <LandingPageContainer>
      <LandingPageSection closeRegistration={closeRegistration}>
        <div className="message">
          <h1>The "ORIGINAL" MLB Survivor Game</h1>
          <h3>A New way to Engage with Baseball</h3>
        </div>
        <LandingContent>
          <LandingInfo />
          <div className="loginButton">
            <Button
              variant="contained"
              color="success"
              onClick={(e) => handleClick("/login")}
            >
              GO TO LOGIN
            </Button>
            {closeRegistration ? (
              <CloseRegistration>
                We are not accepting new registrations since the season has
                started
              </CloseRegistration>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={(e) => handleClick("/register")}
              >
                GO TO REGISTER
              </Button>
            )}
          </div>
        </LandingContent>
        <h6 style={{ color: "white", marginLeft: "auto", textAlign: "center" }}>
          A LayrFIVE Application. Questions for the dev team?{" "}
          <a
            style={{ color: "violet", textDecoration: "none" }}
            href="mailto:layrfive_mlbsgv2@hotmail.com"
          >
            Email us!
          </a>
        </h6>
      </LandingPageSection>
    </LandingPageContainer>
  );
};

export default LandingPage;

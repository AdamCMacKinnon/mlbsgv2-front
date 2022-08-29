import React from "react";
import "../styles/landing.css";
import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <div className="greeting">
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
    </div>
  );
}

export default LandingPage;

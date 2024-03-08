import React from "react";

export default function LandingInfo() {
  return (
    <>
      <div>
        <h3>The Rules are Simple:</h3>
        <ul style={{ textAlign: "left" }}>
          <li>Each week, pick an MLB Team</li>
          <li>If they score more runs than their opponent, you advance!</li>
          <li>If the don't.... you're eliminated!</li>
          <li>Oh, and you can only pick the same team once in a season...</li>
          <li>
            For a full listing of the rules, click on the "Rules" tab above!
          </li>
          <li style={{fontWeight: "bold"}}>It is completely free</li>
        </ul>
        <h3>New Features Coming in 2024 Including...</h3>
        <ul style={{ textAlign: "left" }}>
          <li>Create your own private Leagues!</li>
          <li>New Profile Section to track your progress!</li>
          <li>New Game Modes!</li>
        </ul>
      </div>
    </>
  );
}

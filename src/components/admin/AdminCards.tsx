import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { CardStack } from "./AdminCards.styles";
import LeagueInfo from "./LeagueInfo";

const APcard = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: "lightgray", textAlign: "center" }}>
      <Typography sx={{ fontSize: 22}} color="green">
        18 <br></br>Active Users<br></br>
        <Button variant="contained" color="success">See League Leaderboard</Button>
      </Typography>
    </CardContent>
  </React.Fragment>
);

const BPcard = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: "lightgray", textAlign: "center" }}>
      <Typography sx={{ fontSize: 22}} color="blue">
        5 <br></br>Blank Picks This Week<br></br>
        <Button variant="contained">Send Reminder Email</Button>
      </Typography>
    </CardContent>
  </React.Fragment>
);

const DPcard = (
    <React.Fragment>
    <CardContent sx={{ backgroundColor: "lightgray", textAlign: "center" }}>
      <Typography sx={{ fontSize: 22}} color="red">
      Close League
      <br></br>
      <br></br>
      <Button variant="contained" color="error">Close League</Button>
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <>
    <CardStack>
      <Box sx={{ minWidth: 275, margin: "10px" }}>
        <Card variant="outlined">{APcard}</Card>
      </Box>
      <Box sx={{ minWidth: 275, margin: "10px" }}>
        <Card variant="outlined">{BPcard}
        </Card>
      </Box>
      <Box sx={{ minWidth: 275, margin: "10px" }}>
        <Card variant="outlined">{DPcard}
        </Card>
      </Box>
      </CardStack>
      <div>
        <LeagueInfo />
      </div>
      </>
  );
}

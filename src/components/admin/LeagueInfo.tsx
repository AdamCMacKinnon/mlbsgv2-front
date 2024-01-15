import React from "react";
import { LeagueInfoContainer } from "./LeagueInfo.styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, MenuItem, Select } from "@mui/material";


const LeagueInfo = (props: any) => {
  const { leagueUsers, leagueName } = props;
  console.log(leagueUsers, leagueName);

  return (
    <LeagueInfoContainer>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="leagueName"
                  fullWidth
                  id="leagueName"
                  label="League Name"
                  placeholder={leagueName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Game Mode: &nbsp; &nbsp;
        <Select
          labelId="demo-simple-select-label"
          defaultValue={10}
          id="demo-simple-select"
          label="Game Mode"
          disabled={true}
        >
          <MenuItem value={10}>Total Diff</MenuItem>
          <MenuItem value={20}>Survival</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
        <Select
        fullWidth
          labelId="demo-simple-select-label"
          defaultValue={10}
          id="demo-simple-select"
        >
            <MenuItem value={10} disabled={true}>Select Current commish...</MenuItem>
          <MenuItem value={15}>AdamCMacKDev (adamcmackdev@gmail.com)</MenuItem>
          <MenuItem value={20}>PassonJim (passonjim@gmail.com)</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="leaguePasscode"
                  id="leaguePasscode"
                  placeholder={`League Passcode: ${leagueUsers[0].passcode}`}
                  autoFocus
                  disabled={true}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="splitLeague" color="warning" />}
                  label="Split League at All-Star Break"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="closeReg" color="error" />}
                  label="Close Registration"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Update League Info
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
    </LeagueInfoContainer>
  );
};


export default LeagueInfo;

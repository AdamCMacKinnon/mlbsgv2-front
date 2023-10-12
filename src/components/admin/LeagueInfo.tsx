import React from "react";
import { LeagueInfoContainer } from "./LeagueInfo.styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Checkbox, Link, MenuItem, Select } from "@mui/material";

const LeagueInfo = () => {
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
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Game Mode: &nbsp; &nbsp;
        <Select
          labelId="demo-simple-select-label"
          defaultValue={10}
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Total Diff</MenuItem>
          <MenuItem value={20}>Survival</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  fullWidth
                  id="email"
                  label="Current Commish"
                  name="email"
                  autoComplete="email"
                /> */}
        <Select
        fullWidth
          labelId="demo-simple-select-label"
          defaultValue={10}
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>AdamCMacKDev (adamcmackdev@gmail.com)</MenuItem>
          <MenuItem value={20}>PassonJim (passonjim@gmail.com)</MenuItem>
        </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="leaguePasscode"
                  label="League Passcode"
                  type="text"
                  id="leaguePasscode"
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Update League Info
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/gamepage" variant="body2">
                  Go to your Player Page
                </Link>
              </Grid>
            </Grid>
    </LeagueInfoContainer>
  );
};

export default LeagueInfo;

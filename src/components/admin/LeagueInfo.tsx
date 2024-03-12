import React, { useState } from "react";
import { LeagueInfoContainer } from "./LeagueInfo.styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Spinner from "../gamepage/Spinner";
import { updateUserLeagues } from "../../functions";
import LeagueUpdateConfirm from "./LeagueUpdateConfirm";

const LeagueInfo = (props: any) => {
  const { leagueUsers, leagueName, token, leagueid } = props;
  const [loading, setLoading] = useState(false);
  const [leagueShortname, setLeagueShortname] = useState(leagueName);
  const [response, setResponse] = useState<any>({});
  const [regStatus, setRegStatus] = useState(false);
  const [resetCode, setResetCode] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(leagueUsers);

  const handleUpdateLeague = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response: any = await updateUserLeagues(
        token,
        leagueid,
        leagueShortname,
        resetCode,
        regStatus
      );
      setOpen(true);
      console.log(response);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <LeagueInfoContainer>
        <Spinner />
      </LeagueInfoContainer>
    );
  }

  return (
    <LeagueInfoContainer>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleUpdateLeague}
      >
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8}>
          <TextField
            autoComplete="given-name"
            name="leagueName"
            fullWidth
            id="leagueName"
            label="League Name"
            placeholder={leagueName}
            onChange={(e) => setLeagueShortname(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Select
            labelId="demo-simple-select-label"
            defaultValue={20}
            id="demo-simple-select"
            label="Game Mode"
          >
            <MenuItem value={10} disabled={true}>
              Total Diff
            </MenuItem>
            <MenuItem value={20}>Survival</MenuItem>
          </Select>
        </Grid>
        {/* <Grid item xs={12}>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            defaultValue={10}
            id="demo-simple-select"
          >
            <MenuItem value={10} disabled={true}>
              Select Current commish...
            </MenuItem>
            <MenuItem value={15}>
              AdamCMacKDev (adamcmackdev@gmail.com)
            </MenuItem>
            <MenuItem value={20}>PassonJim (passonjim@gmail.com)</MenuItem>
          </Select>
        </Grid> */}
        <Grid item sm={8} xs={8}>
          <TextField
            fullWidth
            name="leaguePasscode"
            id="leaguePasscode"
            label="League Passcode"
            value={`${leagueUsers[0].passcode === undefined ? 'null' : leagueUsers[0].passcode}`}
            autoFocus
            disabled={true}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() =>
              navigator.clipboard.writeText(`${leagueUsers[0].passcode === undefined ? 'null' : leagueUsers[0].passcode}`)
            }
          >
            Copy to Clipboard
          </Button>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                value="refreshCode"
                color="warning"
                onChange={(e) => setResetCode(true)}
              />
            }
            label="Refresh Passcode"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                value="closeReg"
                color="error"
                disabled={true}
                onChange={(e) => setRegStatus(true)}
              />
            }
            label="Close Registration (Coming Soon!)"
          />
        </Grid>
      </Grid>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="success"
        onClick={handleUpdateLeague}
        sx={{ mt: 3, mb: 2 }}
      >
        Update League Info
      </Button>
      <Grid container justifyContent="flex-end"></Grid>
      {open === false ? null : <LeagueUpdateConfirm open={open} setOpen={setOpen} response={response} />}
    </LeagueInfoContainer>
  );
};

export default LeagueInfo;

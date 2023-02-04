import { useState } from 'react';
import axios from 'axios';

//Components
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

//Admin Functions
import { fetchAdminUsers} from '../../functions';
import { getWeekNumbers, getTeamsArray } from './functions';

//Styles
import { SelectTeamContainer } from '../gamepage/PickTeam.styles';
import { RunDifferentialContainer, MessageContainer, FilterContainer } from './RunDifferential.styles';



const RunDifferential = (props: any) => {
  const [team, setTeam] = useState('');
  const [week, setWeek] = useState('');
  const [diff, setDiff] = useState('');
  const [userUpdatedCount, setUserUpdatedCount] = useState(0);

  const { token, setUsers } = props;

  const handleWeekChange = (event: SelectChangeEvent) => {
    setWeek(event.target.value as string);
  };

  const handleTeamChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const handleDiffChange = (event: any) => {
    setDiff(event.target.value as string);
  }

  const updateRunDiff = async () => {
    console.log(week, team, diff);
    const requestData = {
      week: Number(week),
      team,
      diff: Number(diff)
    }

    console.log(requestData);
      try {
        const response = await axios.patch(`${process.env.REACT_APP_SERVER}/admin/updatediffbyteam`, requestData ,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.data;

        const updatedUsers = await fetchAdminUsers(token);
        setUsers(updatedUsers);

        const updatedUserCount = data.raw.length;
        setUserUpdatedCount(updatedUserCount);

      } catch (error) {
        console.log(error)
      }    
  }

  return (
    <RunDifferentialContainer>
      <h1>Run Differential</h1>
      <FilterContainer>
      <SelectTeamContainer sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Select Week</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={week}
            label="Select Week"
            onChange={handleWeekChange}
          >
          {getWeekNumbers().map((week: any) => <MenuItem value={week} key={week}>Week {week}</MenuItem>)}
          </Select>
        </FormControl>
      </SelectTeamContainer>
      <SelectTeamContainer sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Select Team</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={team}
            label="Select Team"
            onChange={handleTeamChange}
          >
          {getTeamsArray().map((team: any) => <MenuItem value={team} key={team}>{team}</MenuItem>)}
          </Select>
        </FormControl>
      </SelectTeamContainer>
      <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={diff}
          onChange={handleDiffChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </FilterContainer>
      <Button variant="contained" size="small" onClick={updateRunDiff}>Update</Button>
      <MessageContainer>
      {(userUpdatedCount > 0) ? (<p>Updated users {userUpdatedCount}</p>) : null}
      </MessageContainer>
      
      </RunDifferentialContainer>
  )
}

export default RunDifferential;


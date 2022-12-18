import { useEffect, useState } from 'react';
import styled from 'styled-components'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { makePick, fetchUsers } from '../../functions';

export default function PickTeam(props: any) {
  const [team, setTeam] = useState('');
  const [week, setWeek] = useState('');
  const [selections, setSelections] = useState([]);
  const { pickTeams, token, user, setUsers } = props;

  const handleWeekChange = (event: SelectChangeEvent) => {
    setWeek(event.target.value as string);
  };

  const handleTeamChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTeam('')
    await makePick(token, week, team);
    const updatedUsers = await fetchUsers(token);
    setUsers(updatedUsers);
  }



  useEffect(() => {
    const weekSelections: any = () => {
      const weekNumbers:any = []
      for (let i = 1; i <= 26; i++) {
        weekNumbers.push(i)
      }
      const pickedWeekNumbers: any = []
      user.picks.forEach((pick: any) => {
      pickedWeekNumbers.push(pick.week)
      }
      );
  
      const filteredWeekNumbers = weekNumbers.filter((week: any) => !pickedWeekNumbers.includes(week));
  
      return filteredWeekNumbers;
      
    }
    const currentWeekSelection = weekSelections()[0];
    setSelections(weekSelections());
    setWeek(currentWeekSelection);
  },[user])

  return ( 
    <SelectTeamForm onSubmit={e => handleSubmit(e)}>
      <h3>Team Select</h3>
      <SelectTeamContainer sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Select Week</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={week}
            label="Select Team"
            onChange={handleWeekChange}
          >
          {selections.map((week: any) => <MenuItem value={week} key={week}>Week {week}</MenuItem>)}
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
          {pickTeams.map((team: any) => <MenuItem value={team} key={team.name}>{team.name}</MenuItem>)}
          </Select>
        </FormControl>
      </SelectTeamContainer>
      {user.isactive ? (<SelectTeamButton>Submit</SelectTeamButton>) : (<p>Inactive</p>)}
      
    </SelectTeamForm>
  )}


  
  const SelectTeamForm = styled.form`
    position: relative;
  `

  const SelectTeamContainer = styled(Box)`
    color: white;
    margin: 10px;
  `

  const SelectTeamButton = styled.button`
    background-color: #ffc107;
    outline: none;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    color: white; 
    font-weight: bold;
    text-transform: uppercase; 
  `
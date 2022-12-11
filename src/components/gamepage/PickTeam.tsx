import { useState } from 'react';
import styled from 'styled-components'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function PickTeam(props: any) {
  const [team, setTeam] = useState('')
  const { pickTeams, setSelectedTeam } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTeam('')
    setSelectedTeam(team);
  }

  return ( 
    <SelectTeamForm onSubmit={e => handleSubmit(e)}>
      <h3>Team Select</h3>
      <SelectTeamContainer sx={{ minWidth: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Select Team</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={team}
            label="Select Team"
            onChange={handleChange}
          >
          {pickTeams.map((team: any) => <MenuItem value={team} key={team.name}>{team.name}</MenuItem>)}
          </Select>
        </FormControl>
      </SelectTeamContainer>
      <SelectTeamButton>Submit</SelectTeamButton>
    </SelectTeamForm>
  )}


  
  const SelectTeamForm = styled.form`
    position: relative;
  `

  const SelectTeamContainer = styled(Box)`
    color: white;
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
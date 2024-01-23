import { useEffect, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ConfirmPickModal from './ConfirmPickModal';

import { SelectTeamContainer, SelectTeamForm } from './PickTeam.styles';

import { makePick, getLoggedInUser } from '../../functions';
import PickTeamConfirm from './PickTeamConfirm';

const PickTeam = (props: any) => {
  const [team, setTeam] = useState('');
  const [week, setWeek] = useState('');
  const [response, setResponse] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [selections, setSelections] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const { pickTeams, token, user, setUser, userPickList, leagueid } = props;

  const handleWeekChange = (event: SelectChangeEvent) => {
    setWeek(event.target.value as string);
  };

  const handleTeamChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTeam('')
    const response: any = await makePick(token, week, team, leagueid);
    setOpen(true);
    console.log(response);
    setResponse(response);
    let user = await getLoggedInUser(token)
    setUser(user);
  }

  useEffect(() => {
    const weekSelections: any = () => {
      const weekNumbers:any = []
      for (let i = 1; i <= 26; i++) {
        weekNumbers.push(i)
      }
      const pickedWeekNumbers: any = []
      userPickList.forEach((pick: any) => {
      pickedWeekNumbers.push(pick.week)
      }
      );
  
      const filteredWeekNumbers = weekNumbers.filter((week: any) => !pickedWeekNumbers.includes(week));
  
      return filteredWeekNumbers;
      
    }
    const currentWeekSelection = weekSelections()[0];
    setSelections(weekSelections());
    setWeek(currentWeekSelection);
  },[user, userPickList])

  return ( 
    <SelectTeamForm>
      <h3>Team Select</h3>
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
      {user.isactive ? (<ConfirmPickModal modalOpen={modalOpen} setModalOpen={setModalOpen} handleSubmit={handleSubmit} team={team} week={week}/>) : (<p>Inactive</p>)}
      {open === false ? null : <PickTeamConfirm open={open} setOpen={setOpen} response={response} />}
    </SelectTeamForm>
  )}

  export default PickTeam;
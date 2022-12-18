import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { teams } from '../../data/teams';

export default function SelectedTeam(props: any) {
  const [image, setImage] = useState('');
  const { user } = props;

  const currentSelection = user.picks[user.picks.length - 1];

  useEffect(() => {
    if (currentSelection) {
      const currentTeamImage = teams.filter((team: any) => team.name === currentSelection.pick)[0].image;
      setImage(currentTeamImage);
    }
  }, [currentSelection]);


  return(
    <SelectedTeamContainer>
      {currentSelection ? (
        <>
        <p>Selected Team</p>
        <SelectedTeamWeek>Week {currentSelection.week}</SelectedTeamWeek>
        <h2>{currentSelection.pick}</h2>
        {currentSelection.pick ? <SelectedTeamImage alt={currentSelection.pick} src={`./images/${image}`} />: ''} 
        </>
      ) : (
        <p>Make your first pick selection</p>
      )}
         
    </SelectedTeamContainer>
  )
} 



const SelectedTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
  width: 90%;
`
const SelectedTeamWeek = styled.p`
  margin: 0;
`

const SelectedTeamImage = styled.img`
  height: 50px;
`
import { useState, useEffect } from 'react';

import { teams } from '../../data/teams';

import { SelectedTeamContainer, SelectedTeamWeek, SelectedTeamImage } from './SelectedTeam.styles';

const SelectedTeam = (props: any) => {
  const [image, setImage] = useState('');
  const { userPickList } = props;

  console.log(userPickList);

  const currentSelection = userPickList[userPickList.length - 1];

  useEffect(() => {
    if (currentSelection) {
      const currentTeamImage = teams.filter((team: any) => team.name === currentSelection)[0].image;
      setImage(currentTeamImage);
    }
  }, [currentSelection]);


  return(
    <SelectedTeamContainer>
      {currentSelection ? (
        <>
        <p>Selected Team</p>
        <SelectedTeamWeek>Week {}</SelectedTeamWeek>
        <h2>{currentSelection}</h2>
        {currentSelection ? <SelectedTeamImage alt={currentSelection} src={`../../images/${image}`} />: ''} 
        </>
      ) : (
        <p>Make your first pick selection</p>
      )}
         
    </SelectedTeamContainer>
  )
} 

export default SelectedTeam;
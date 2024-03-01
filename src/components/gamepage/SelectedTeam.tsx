import { useState, useEffect } from 'react';

import { teams } from '../../data/teams';

import { SelectedTeamContainer, SelectedTeamImage } from './SelectedTeam.styles';

const SelectedTeam = (props: any) => {
  const [image, setImage] = useState('');
  const { userPickList, currentWeek } = props;

  // const startDate = dates.start_date.split('T')[0].replaceAll('-', '/');
  // const endDate = dates.end_date.split('T')[0].replaceAll('-', '/');

  console.log(userPickList);

  const currentSelection = userPickList[currentWeek];

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
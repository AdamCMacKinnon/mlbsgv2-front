import styled from 'styled-components';



export default function SelectedTeam(props: any) {
  const { selectedTeam } = props;

  return(
    <SelectedTeamContainer>
      <p>Selected Team</p>
      <h2>{selectedTeam.name}</h2>
      {selectedTeam.name ? <SelectedTeamImage alt={selectedTeam.name} src={`./images/${selectedTeam.image}`} />: ''}    
    </SelectedTeamContainer>
  )
} 



const SelectedTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
`

const SelectedTeamImage = styled.img`
  height: 50px;
`
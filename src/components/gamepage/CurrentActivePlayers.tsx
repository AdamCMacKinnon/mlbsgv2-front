import styled from 'styled-components'



export default function CurrentActivePlayers() {
  return(
    <CurrentActivePlayersContainer>
      <p className="active-heading">Current Active Players:</p>
      <p className="active-player-number">35</p>
    </CurrentActivePlayersContainer>
  )
}



const CurrentActivePlayersContainer = styled.div`
  background-color: #fff3cd;
  color: #856404;
  width: 50%;
  margin: 0px auto;

  .active-heading {
    padding: 10px 0 0 0;
    margin: 0px;
  }

  .active-player-number {
    margin: 0px;
    padding: 5px 0 10px;
    font-size: 24px
  }
`
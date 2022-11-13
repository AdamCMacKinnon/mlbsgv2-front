import styled from 'styled-components';



export default function UserPicks(props: any) {
  const { userPicks } = props;

  return (
    <UserPicksContainer>
      <h3>Past Picks (By Week)</h3>
      <UserPicksList>
        {userPicks.map((pick: any, idx: number) => {
            return <li key={pick}>{(idx + 1)}. {pick}</li>
        })}
      </UserPicksList>
    </UserPicksContainer>)
}



const UserPicksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const UserPicksList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 70%; 
  text-align: left;
`
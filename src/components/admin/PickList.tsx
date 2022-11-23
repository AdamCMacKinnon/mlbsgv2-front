import { useState, useEffect } from 'react';
import styled from 'styled-components';

import FilterBy from './FilterBy';



export default function PickList(props: any) {
  const [week, setWeek] = useState(1);
  const [filteredPicks, setFilteredPicks] = useState<{userId: string, week: number, pick: string, id: string}[]>([])

  const { picks, users} = props;

  useEffect(() => {
    function getFilteredList(week: number) {
      const filteredPicks = picks.filter((pick: any) => pick.week === week)
      setFilteredPicks(filteredPicks);
    }
    getFilteredList(week)
  }, [picks, week])

  function getUserName(userId: string) {
    const userNameById = users.filter((user: any) => user.id === userId)
    return userNameById[0].username
  }

  return (<>
    <h3>Picks List</h3>
    <FilterBy week={week} setWeek={setWeek} picks={picks}/>
    <PickListContainer>
      <thead>
      <tr>
        <th>UserName</th>
        <th>Week</th>
        <th>Pick</th>
      </tr>
      </thead>

      <tbody>
      {filteredPicks.map(pick => {
      return(
        <tr key={pick.id}>
          <td>{getUserName(pick.userId)}</td>
          <td>{pick.week}</td>
          <td>{pick.pick}</td>
        </tr>
      )
    })}
      </tbody>

    </PickListContainer>
    
  </>)
}

const PickListContainer = styled.table`
  margin: 0 auto;
  background-color: white;
  padding: 0;
  width: 80%;
  padding: 10px;

  th {
    border-bottom: 1px solid;
    padding: 0 0 10px 0
  }
`
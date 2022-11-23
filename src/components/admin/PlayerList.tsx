import styled from 'styled-components';

export default function PlayerList(props: any) {
  const { users } = props;
  return(
    <>
      <h3>Player List</h3>

      <PlayersListContainer>
      <thead>
      <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>Inactive</th>
      </tr>
      </thead>

      <tbody>
      {users.map((user:any) => {
      return(
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.isactive}</td>
        </tr>
      )
    })}
      </tbody>

    </PlayersListContainer>
    </>
  )
}

const PlayersListContainer = styled.table`
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
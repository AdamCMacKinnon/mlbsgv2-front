import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import styled from 'styled-components';

export default function PlayerListRow(props: any) {
  const [checked, setChecked] = React.useState(false);
  const { user, eliminateUserList, setEliminateUserList } = props;

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      setEliminateUserList([...eliminateUserList, user.username])
    }

    if (!event.target.checked) {
      const userList = eliminateUserList.filter((eUser: any) => user.username !== eUser);
      setEliminateUserList(userList);
    }
  };

  return (
    <tr key={user.id}>
    <TableData>{user.isactive ? (user.username) : (<span>{user.username}</span>)}</TableData>
    <TableData>{user.isactive ? (user.diff): (<span>{user.diff}</span>)}</TableData>
    <td>{user.isactive}</td>
    <td>
      {user.isactive ? (<Checkbox
      checked={checked}
      onChange={handleCheck}
      size="small"
      inputProps={{ 'aria-label': 'controlled' }}
    />) : (<Checkbox
      checked={false}
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
      disabled
      size="small"
    />)}

    </td>
  </tr>
  )

}

const TableData = styled.td`
  font-weight: bold;
  span {
    color: black;
    font-weight: 100;
    font-style: italic;
  }
`;


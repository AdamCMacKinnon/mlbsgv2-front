import * as React from 'react';

import styled from 'styled-components';

export default function PlayerListRow(props: any) {

  const { user, eliminateUserList, setEliminateUserList, allChecked } = props;

  const [checked, setChecked] = React.useState(allChecked);

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
    <TableData width="30%">{user.isactive ? (user.username) : (<span>{user.username}</span>)}</TableData>
    <TableData width="10%">{user.isactive ? (user.diff): (<span>{user.diff}</span>)}</TableData>
    <TableData width="50%">{user.isactive ? (user.pick): (<span>{user.pick}</span>)}</TableData>
    <td width="10%">
      {user.isactive ? (<input type="checkbox"
      checked={checked}
      onChange={handleCheck}
      // size="small"
      // inputProps={{ 'aria-label': 'controlled' }}
    />) : (<input type="checkbox"
      checked={false}
      onChange={handleCheck}
      // inputProps={{ 'aria-label': 'controlled' }}
      disabled
      // size="small"
    />)}

    </td>
  </tr>
  )

}

const TableData = styled.td`
  span {
    color: black;
    font-weight: 100;
    font-style: italic;
  }
`;


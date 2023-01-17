import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function PlayerListRow(props: any) {

  const { user, handleClick, isChecked } = props;

  const navigate = useNavigate();

  const handleNameClick = (e: any) => {
    navigate(`/admin/player/${user.username}`)
  }

  return (
    <tr key={user.id}>
    <TableData  width="30%">{user.isactive ? (<span className="link" onClick={handleNameClick}>{user.username}</span>) : (<span className="inactive link" onClick={handleNameClick}>{user.username}</span>)}</TableData>
    <TableData width="10%">{user.isactive ? (user.diff): (<span  className="inactive">{user.diff}</span>)}</TableData>
    <TableData width="50%">{user.isactive ? (user.pick): (<span  className="inactive">{user.pick}</span>)}</TableData>
    <td width="10%">
      {user.isactive ? (<input type="checkbox"
      id={user.username}
      onChange={handleClick}
      checked={isChecked.includes(user.username)}
    />) : (<input type="checkbox"
      checked={false}
      disabled
    />)}

    </td>
  </tr>
  )

}

const TableData = styled.td`
  .link {
    cursor: pointer;
  }

  .inactive {
    color: black;
    font-weight: 100;
    font-style: italic;
  }
`;


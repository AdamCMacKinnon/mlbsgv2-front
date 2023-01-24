import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from "@mui/material/Button";
import PlayerWeekList from './PlayerWeekList';

import { fetchAdminUsers } from '../../functions';



export default function Player(props: any) {
  const { users, token, setUsers } = props;
  const { username } = useParams();
  const navigate = useNavigate();

  const player = users.filter((user: any) => username === user.username)[0]

  const handleDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER}/admin/deleteuser/${player.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      const newUsers = await fetchAdminUsers(token);
      setUsers(newUsers);
      navigate('/admin/players');
    }
  }

  return(
    <PlayerInfoContainer>
      <PlayerInfoSection>
        <h2>{player.username}</h2>
        {player.isactive ? (<div className="active-tag tag">ACTIVE</div>) : (<div className="inactive-tag tag">INACTIVE</div>)}
        <p>Run Diff: {player.diff}</p>
        <ul>
          {player.picks.map((pick: any) => <PlayerWeekList key={pick.id} pick={pick}/>)}
        </ul>
        <Button variant="contained" color="error" onClick={handleDeleteUser}>DELETE USER</Button>
      </PlayerInfoSection>

    </PlayerInfoContainer>
  )
}

const PlayerInfoSection = styled.div`
  width: 100%;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  position: relative;

  .tag {
    margin-top: 0;
    padding: 5px 20px;
    border-radius: 5px;
    color: white;
  }

  .active-tag {
    background-color: rgb(6, 128, 55);
  }

  .inactive-tag {
    background-color: grey;
  }

  ul {
    list-style-type: none;
    text-align: left;
  }
`

const PlayerInfoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
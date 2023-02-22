import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

//Components
import Button from "@mui/material/Button";
import PlayerWeekList from './PlayerWeekList';

//Global functions
import { fetchAdminUsers } from '../../functions';

//Styles
import { PlayerInfoContainer, PlayerInfoSection } from './Player.styles';



const Player = (props: any) => {
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

export default Player;
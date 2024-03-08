import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { LeagueCards } from './LeagueCard.styles';
import { Link } from 'react-router-dom';
import NullMessage from './NullMessage';

export default function LeagueCard(props: any) {
    const { user } = props;
    console.log(user.subsUsers);
  return (
    <LeagueCards>
        {user.subsUsers.length > 0 ? user.subsUsers.map((subs: any) => (
            <Link to={`gamepage/${subs.league_id}`} state={{leagueid: subs.league_id, leagueName: subs.league_name, leagueRole: subs.league_role}} style={{textDecoration: 'none'}}>
          <Card
          style={{"margin": "10px"}}
          key={subs.league_id}
          >
            <CardContent sx={{backgroundColor: subs.run_diff >= 0 ? 'rgba(6,128,55)' : '#CC3433', color: subs.run_diff >= 0 ? 'white' : 'black', textDecoration: 'none'}}>
              <Typography sx={{fontWeight: 'bold'}}>
                League Name: {subs.league_name}
                <br />
                Status: {subs.active === true ? 'ACTIVE' : 'INACTIVE' }
                <br />
                Run Diff: {subs.run_diff}
                <br />
              </Typography>
            </CardContent>
          </Card>
          </Link>
        )) : <NullMessage />}
    </LeagueCards>
  )
}

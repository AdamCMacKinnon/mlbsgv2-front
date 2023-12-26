import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { LeagueCards } from './LeagueCard.styles';
import { Link } from 'react-router-dom';

export default function LeagueCard(props: any) {
    const { user } = props;
    console.log(user);
  return (
    <LeagueCards>
        {user.subsUsers.map((subs: any) => (
            <Link to={subs.league_role === 'commish' ? 'admin' : 'gamepage'} style={{textDecoration: 'none'}}>
          <Card
          style={{"margin": "10px"}}
          key={subs.league_id}
          >
            <CardContent sx={{backgroundColor: 'lightgray', textDecoration: 'none'}}>
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
        ))}
    </LeagueCards>
  )
}


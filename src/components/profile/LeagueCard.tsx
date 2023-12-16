import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { LeagueCards } from './LeagueCard.styles';

export default function LeagueCard(props: any) {
    const { user } = props;
    console.log(user);
  return (
    <LeagueCards>
        {user.subsUsers.map((subs: any) => (
          <Card
          style={{"margin": "10px"}}
          key={subs}
          >
            <CardContent sx={{backgroundColor: "lightgray"}}>
              <Typography>
                League Name: {subs.league_name}
                <br />
                Status: {subs.active.toString()}
                <br />
                Run Diff: {subs.run_diff}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </LeagueCards>
  )
}


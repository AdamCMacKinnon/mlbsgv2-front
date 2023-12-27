import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import PublicIcon from '@mui/icons-material/Public'
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import AddIcon from '@mui/icons-material/Add';
import LeagueCard from './LeagueCard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GlobalLeague from './GlobalLeague';


export default function ProfileNavBar(props: any) {
  const { user, token } = props;
    const [value, setValue] = useState(0);
  return (
    <>
            <Box sx={{ width: "75%", marginLeft: "auto", marginRight: "auto", marginBottom: "30px" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Current Leagues"
              icon={<SportsBaseballIcon />}
            />
            <BottomNavigationAction
              label="Global League"
              icon={<PublicIcon />}
            />
              <BottomNavigationAction
              label="Join Private League"
              icon={<PersonAddAlt1Icon />}
            />
            <BottomNavigationAction
              label="Create Private League"
              icon={<AddIcon />}
            />
          </BottomNavigation>
        </Box>
        <div>
          {value === 0 ? <LeagueCard user={user} /> : null}
          {value === 1 ? <GlobalLeague user={user} token={token} /> : null}
        </div>
    </>
  )
}


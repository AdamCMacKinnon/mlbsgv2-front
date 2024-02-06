import { useEffect, useState } from "react";

//Styles
import Box from "@mui/material/Box";
import { AdminMenuContainer, AdminContent } from "./AdminMenu.styles";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BottomNavigation from "@mui/material/BottomNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LeagueInfo from "./LeagueInfo";
import ComingSoon from "../profile/ComingSoon";
import PlayerManagement from "./PlayerManagement";

const AdminMenu = (props: any) => {
  const { user, leagueUsers, leagueName, leagueid, token } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <AdminMenuContainer>
        <Box sx={{ width: "100%" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="League Management"
              icon={<SportsBaseballIcon />}
            />
            <BottomNavigationAction
              label="Player Management"
              icon={<AccountCircleIcon />}
            />
            <BottomNavigationAction
              label="League Data"
              icon={<QueryStatsIcon />}
            />
          </BottomNavigation>
        </Box>
      </AdminMenuContainer>
      <AdminContent>
        {value === 0 ? <LeagueInfo user={user} token={token} leagueUsers={leagueUsers} leagueName={leagueName} leagueid={leagueid}/> : null}
        {value === 1 ? <PlayerManagement leagueUsers={leagueUsers} token={token} /> : null}
        {value === 2 ? <ComingSoon /> : null}
      </AdminContent>
    </>
  );
};

export default AdminMenu;

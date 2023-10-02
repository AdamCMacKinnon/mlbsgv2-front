/**
 * This component should list the following items:
 * - League Name (Headline at top of the page, passed in dynamically)
 * - Bottom Nav (League Management/PlayerManagement/League Data tabs)
 * - League Info div.  Should be like a general box/card stack that gives all the league information.
 */

import { useEffect, useState } from "react";

//Styles
import Box from "@mui/material/Box";
import { AdminMenuContainer } from "./AdminMenu.styles";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BottomNavigation from "@mui/material/BottomNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RunDifferential from "./RunDifferential";
import { Outlet } from "react-router-dom";
import AdminCards from "./AdminCards";

const AdminMenu = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <h1 style={{ color: "white" }}><i>League Name</i></h1>
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
      <div>
        {value === 0 ? <AdminCards /> : null}
        {value === 1 ? <Outlet /> : null}
        {value === 2 ? <RunDifferential /> : null}
      </div>
    </>
  );
};

export default AdminMenu;

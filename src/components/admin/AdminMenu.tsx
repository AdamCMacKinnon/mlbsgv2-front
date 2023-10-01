
import { useEffect, useState } from 'react';

//Styles
import Box from '@mui/material/Box';
import { AdminMenuContainer } from './AdminMenu.styles';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BottomNavigation from '@mui/material/BottomNavigation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RunDifferential from './RunDifferential';
import { Outlet } from 'react-router-dom';
import AdminCards from './AdminCards';



const AdminMenu = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
      console.log(value)
  }, [value])
  return(
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
        <BottomNavigationAction  label="League Management" icon={<SportsBaseballIcon />} />
        <BottomNavigationAction label="Player Management" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="League Data" icon={<QueryStatsIcon />} />
      </BottomNavigation>
    </Box>
    </AdminMenuContainer>
    <div>
    { value === 0 ? <AdminCards /> : null }
    { value === 1 ? <Outlet /> : null }
    { value === 2 ? <RunDifferential /> : null }
    </div>
    </>
  )
}

export default AdminMenu;
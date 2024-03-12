import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logout from "./Logout";
// import LeaderBoardModal from "./LeaderBoardModal";
import Rules from "./Rules";

//Styles
import { AppBarContainer, DropdownMenuItemContainer } from "./NavBar.styles";
import { ModalButton } from "./LeaderBoardModal.styles";
import IssueTrackerFormModal from "./IssueTrackerFormModal";

const settings = [{ title: "Account", route: "/account" }];

const NavBar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { user, setUser, setToken } = props;

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRoute = (route: string) => {
    navigate(route);
  };

  const handleIconClick = () => {
    navigate("/");
  };

  return (
    <AppBarContainer position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleIconClick}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MLBSVG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <DropdownMenuItemContainer onClick={handleCloseNavMenu}>
                <Rules />
              </DropdownMenuItemContainer>
              <DropdownMenuItemContainer onClick={handleCloseNavMenu}>
                <ModalButton onClick={(e: any) => handleRoute("/schedule")}>
                  Schedule
                </ModalButton>
              </DropdownMenuItemContainer>
              <DropdownMenuItemContainer onClick={handleCloseNavMenu}>
                <IssueTrackerFormModal user={user} />
              </DropdownMenuItemContainer>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleIconClick}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MLBSVG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div onClick={handleCloseNavMenu}>
              <Rules />
            </div>
            <div onClick={handleCloseNavMenu}>
              <ModalButton onClick={(e: any) => handleRoute("/schedule")}>
                Schedule
              </ModalButton>
            </div>

            <div onClick={handleCloseNavMenu}>
              <IssueTrackerFormModal user={user} />
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar
                    alt={user?.username.toUpperCase()}
                    src="/static/images/avatar/2.jpg"
                  />
                ) : (
                  ""
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Link to={setting.route}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key="profile">
                <Link to="profile">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseUserMenu}>
                <Logout setToken={setToken} setUser={setUser} />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBarContainer>
  );
};

export default NavBar;

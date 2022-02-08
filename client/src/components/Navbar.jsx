import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NavDrawer from "./NavDrawer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useAuth0 } from "@auth0/auth0-react";

export default function ButtonAppBar({ theme, setTheme }) {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavDrawer />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={loginWithRedirect}>
              Login
            </Button>
          )}
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

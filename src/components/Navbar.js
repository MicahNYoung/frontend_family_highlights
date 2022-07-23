import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router";
import { Searchbar } from "./Searchbar";

export default function Navbar({ page, setSearchInput }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setTimeout(() => {
      navigate({
        pathname: "/homepage",
      });
    }, 100);
  };

  const handleLogOutClick = () => {
    sessionStorage.clear();
    navigate({
      pathname: "/",
    });
  };

  const handleLoginClick = () => {
    setTimeout(() => {
      navigate({
        pathname: "/",
      });
    }, 100);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div></div>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Button onClick={handleHomeClick} style={{ color: "#000000" }}>
              Family Highlights
            </Button>
          </Typography>

          {page === "createuser" && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Button onClick={handleLoginClick} style={{ color: "#000000" }}>
                Login
              </Button>
            </Typography>
          )}

          {page === "home" && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Button onClick={handleLogOutClick} style={{ color: "#000000" }}>
                Logout
              </Button>
            </Typography>
          )}

          <div id="addModalContainer"></div>
          {page === "home" && <Searchbar setSearchInput={setSearchInput} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

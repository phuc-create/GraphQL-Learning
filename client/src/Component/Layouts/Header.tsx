import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import { Ctx } from "../../Contexts/Context";
import { Link, Redirect } from "react-router-dom";
interface HeaderProps {
  auth?: boolean;
  infor?: any;
}
const Header: React.FC<HeaderProps> = ({ auth, infor }) => {
  const { isLogin, checkLogin } = useContext(Ctx);
  const handleLogoutUser = () => {
    localStorage.removeItem("user");
    if (localStorage["user"]) {
      localStorage.removeItem("user");
    } else {
      window.location.href = "o2auth"
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MonetizationOnRoundedIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Owe Web
            </Typography>
            {auth ? (
              <>
                <Button variant="outlined">
                  <Link className="link-control" to="/debt">
                    Your Debts
                  </Link>
                </Button>
                &nbsp;&nbsp;
                <Button variant="outlined">
                  <Link className="link-control" to="/borrow">
                    Borrow yours
                  </Link>
                </Button>
                &nbsp;&nbsp;
                <Button variant="outlined" className="link-control" onClick={() => handleLogoutUser()}>
                  Exit
                </Button>
                &nbsp;&nbsp;
              </>
            ) : null}
            {auth ? (
              <Button
                variant="text"
                color="secondary"
                className="link-control"
              >{`Hello ${infor.username}.`}</Button>
            ) : (
              <Button color="inherit" onClick={() => checkLogin()}>
                {isLogin ? "Create Account" : "LOGIN NOW"}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

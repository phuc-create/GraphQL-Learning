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

const Header: React.FC = () => {
  const { isLogin, checkLogin } = useContext(Ctx);
  console.log(isLogin);

  return (
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
          <Button color="inherit" onClick={() => checkLogin()}>
            {isLogin ? "Create Account" : "LOGIN NOW"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

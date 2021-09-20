import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Money from "../../img/money.jpg";
import { Ctx } from "../../Contexts/Context";
import FormControl from "./FormControl";

const Auth: React.FC = () => {
  const { isLogin } = useContext(Ctx);
  return (
    <div className="auth">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Money}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Welcome to the Owe Website!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isLogin ? "Login to continues" : "Create an account"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <FormControl />
      </Card>
    </div>
  );
};

export default Auth;

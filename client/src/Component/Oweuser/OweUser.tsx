import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Layouts/Header";
import ListDebt from "./ListDebt";
import ListBorrow from "./ListBorrow";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NumFormatter } from "../../Utils/NumberFormarter";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const OweUser: React.FC = () => {
  const { isAuthenticated, inforUser } = useSelector(
    (state: { user: any }) => state.user
  );
  return (
    <Router>
      <Header auth={isAuthenticated} infor={inforUser} />
      <div className="component-wrap">
        <CurrentInforSaved infor={inforUser} />
        <Switch>
          <Route exact path="/debt" component={ListDebt} />
          <Route exact path="/borrow" component={ListBorrow} />
        </Switch>
      </div>
    </Router>
  );
};

export default OweUser;

interface UserSavedProps {
  infor: any;
}
const CurrentInforSaved: React.FC<UserSavedProps> = ({ infor }) => {
  const { username, Saves, draws, balances } = infor;
  const TotalSaved = () => {
    let total: number = 0;
    Saves.forEach((save: { received: number }) => (total += save.received));
    return total;
  };
  return (
    <>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography gutterBottom component="div">
            Hello:{username}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Available balances : {NumFormatter.format(balances)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Take care about your money if you don't want to lossing them :D
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Draw</Button>
          <Button size="small">transfer money to accounts</Button>
        </CardActions>
      </Card>
      <div className="draw-history">
        {/* <ListDraw draws={draws} /> */}
        <ListDraw2 draws={draws} />
      </div>
    </>
  );
};

const ListDraw2 = ({ draws }: any) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "50px", borderRadius: "7px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Total Draw</TableCell>
            <TableCell align="center">After Balances</TableCell>
            <TableCell align="center">Before Balances</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {draws &&
            draws.map(
              (row: {
                id_draw: React.Key | null | undefined;
                date_draw: Date;
                total_draw: number;
                after_balance: number;
                before_balance: number;
                script_draw: string;
              }) => (
                <TableRow
                  key={row.id_draw}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date_draw}
                  </TableCell>
                  <TableCell align="center">
                    {NumFormatter.format(row.total_draw)}
                  </TableCell>
                  <TableCell align="center">
                    {NumFormatter.format(row.after_balance)}
                  </TableCell>
                  <TableCell align="center">
                    {NumFormatter.format(row.before_balance)}
                  </TableCell>
                  <TableCell align="center">{row.script_draw}</TableCell>
                  <TableCell align="center">
                    <Button>
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

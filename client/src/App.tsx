import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { getAllInforOfUser } from "./redux/actions/User.action";
import LoginRegister from "./Component/Pages/LoginRegister";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Owe from "./Component/Pages/Owe";
import ProtectedRoute from "./Protected/ProtectedRoute";

const App: React.FC = () => {
  const idUserDemo = localStorage["user"];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInforOfUser(idUserDemo));
  }, [dispatch, idUserDemo]);
  return (
    <Router>
      <Switch>
        <Route path="/o2auth" component={LoginRegister} />
        <ProtectedRoute exact path="/" component={Owe} />
      </Switch>
    </Router>
  );
};

export default App;
//hello world

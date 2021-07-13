import './App.css';
import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LeaderBoard from './LeaderBoard';
import LeftSide from './LeftSide';
import CentreComp from './CentreComp';
import classes from './App.module.css';
import Header from './Header';
function App() {
  return (
    <Router>
    <div>
      <nav className={classes.TopBar}>
       <Header />
      </nav>
      <div className={classes.MainBody}>
      <div className="row">
    <div className="col-md-1"></div>
    <LeftSide></LeftSide>
    <div className="col-md-3">
    <CentreComp></CentreComp></div>
<div className="col-md-3">
  <div className={classes.Right}>
  <LeaderBoard /></div>
</div>
</div>
</div>
</div>
</Router>  );
}

export default App;
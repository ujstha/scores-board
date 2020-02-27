import React from "react";
import { Route, Switch } from "react-router-dom";
import AddScoreContainer from "./container/AddScoreContainter";
import EditScoreContainer from "./container/EditScoreContainer";
import ScoresContainer from "./container/ScoresContainer";
import ErrorPage from "./component/ErrorPage";

export default (
  <Switch>
    <Route path="/" exact component={ScoresContainer}></Route>
    <Route path="/add-score" exact component={AddScoreContainer}></Route>
    <Route path="/edit-score/:id" exact component={EditScoreContainer}></Route>
    <Route path="*" exact component={ErrorPage}></Route>
  </Switch>
);

import React, { Component } from "react";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";

//css
import "./assets/css/addScore.css";
import "./assets/css/errorPage.css";
import "./assets/css/scores.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="uk-container">{routes}</div>
      </BrowserRouter>
    );
  }
}

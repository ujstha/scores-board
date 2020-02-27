import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="error">
        <h1 style={{fontFamily: "Cookie", fontStyle: "italic"}}>Score Board</h1>
        <h1>Error 404 - Page Not Found</h1>
        <a className="uk-button uk-button-primary" href="/"><i className="fa fa-arrow-left"></i>&emsp;Back to Home</a>
      </div>
    );
  }
}

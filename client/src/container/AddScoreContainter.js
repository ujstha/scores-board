import React, { Component } from "react";
import { message } from "antd";
import { store } from "../utils/httpUtils";
import AddScore from "../component/AddScore";

message.config({
  duration: 2
});

export default class AddScoreContainer extends Component {
  state = {
    player: "",
    score: null,
    success: false
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const { player, score } = this.state;
    store(`/`, {
      player: player,
      score: score
    }).then(res => {
      message.success(res.data.msg);
      this.setState({
        success: true
      });
    });
  };
  render() {
    const { success, player, score } = this.state;
    return (
      <div className="addScore">
        {success && (
          <a href="/" className="uk-button uk-button-primary">
            <i className="fa fa-arrow-left"></i>&ensp;Back to Home
          </a>
        )}
        <AddScore
          player="player"
          score="score"
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          btnDisabled={
            player === "" || score === null || score < 0 ? true : false
          }
        />
      </div>
    );
  }
}

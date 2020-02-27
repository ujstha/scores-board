import React, { Component } from "react";
import { message } from "antd";
import { update, fetch } from "../utils/httpUtils";
import EditScore from "../component/EditScore";

message.config({
  duration: 2
});

export default class EditScoreContainer extends Component {
  state = {
    player: "",
    score: null
  };
  componentDidMount() {
    fetch(`/${this.props.match.params.id}`).then(res => {
      this.setState({
        player: res.data.player,
        score: res.data.score
      });
    });
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const { player, score } = this.state;
    update(`/${this.props.match.params.id}`, {
      player: player,
      score: score
    }).then(res => {
      message.success(res.data.msg);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    });
  };
  render() {
    const { player, score } = this.state;
    return (
      <div className="addScore">
        <EditScore
          player={player}
          score={score}
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

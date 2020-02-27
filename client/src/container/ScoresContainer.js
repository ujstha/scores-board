import React, { Component } from "react";
import Scores from "../component/Scores";
import { fetch } from "../utils/httpUtils";

export default class ScoresContainer extends Component {
  state = {
    scoreBoard: [],
    total: "",
    limit: 5,
    sortedScore: false,
    sortBy: ""
  };
  componentDidMount() {
    fetch(`/`).then(res =>
      this.setState({
        scoreBoard: res.data
          .sort((a, b) => a.score - b.score)
          .slice(0, this.state.limit),
        total: res.data.length
      })
    );
  }
  onChange = e => {
    this.setState({
      limit: e.target.value
    });
    this.componentDidMount();
  };
  sortScore = () => {
    this.setState({
      sortBy: "score",
      scoreBoard: this.state.scoreBoard.sort((a, b) => b.score - a.score)
    });
  };
  sortPlayer = () => {
    this.setState({
      sortBy: "player",
      scoreBoard: this.state.scoreBoard.sort((a, b) =>
        a.player.toUpperCase() > b.player.toUpperCase() ? 1 : -1
      )
    });
  };
  clearSort = () => {
    this.setState({ sortBy: "" });
    this.componentDidMount();
  };
  render() {
    const { scoreBoard, total, limit, sortBy } = this.state;
    return (
      <Scores
        scoreBoards={scoreBoard}
        total={total}
        onChange={this.onChange}
        limit={limit}
        sortScore={sortBy !== "score" && this.sortScore}
        sortPlayer={this.sortPlayer}
        clearSort={this.clearSort}
        sortBy={sortBy}
      />
    );
  }
}

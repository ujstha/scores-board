import React, { Component } from "react";
import Scores from "../component/Scores";
import { fetch } from "../utils/httpUtils";

export default class ScoresContainer extends Component {
  state = {
    scoreBoard: [],
    total: "",
    limit: 5,
    sortedScore: false,
    sortBy: "date"
  };
  componentDidMount() {
    fetch(`/`).then(res => {
      if (this.state.sortBy === "score") {
        this.setState({
          scoreBoard: res.data
            .sort((a, b) => b.score - a.score)
            .slice(0, this.state.limit)
        });
      } else if (this.state.sortBy === "player") {
        this.setState({
          scoreBoard: res.data
            .sort((a, b) =>
              a.player.toUpperCase() > b.player.toUpperCase() ? 1 : -1
            )
            .slice(0, this.state.limit)
        });
      } else {
        this.setState({
          scoreBoard: res.data
            .sort(
              (a, b) => Date.parse(a.updatedDate) - Date.parse(b.updatedDate)
            )
            .slice(0, this.state.limit)
        });
      }
      this.setState({
        total: res.data.length
      });
    });
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
  sortDate = () => {
    this.setState({
      sortBy: "date"
    });
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
        sortScore={this.sortScore}
        sortPlayer={this.sortPlayer}
        sortDate={this.sortDate}
        sortBy={sortBy}
      />
    );
  }
}

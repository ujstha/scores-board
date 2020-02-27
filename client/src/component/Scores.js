import React, { Component } from "react";
import { destroy } from "../utils/httpUtils";
import { message } from "antd";
import moment from "moment";

export default class Scores extends Component {
  render() {
    const {
      scoreBoards,
      onChange,
      limit,
      total,
      sortScore,
      clearSort,
      sortPlayer,
      sortBy
    } = this.props;
    return (
      <>
        <div
          className="uk-card-body scores"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="clearfix">
            <h3 className="float-left">Score Board</h3>
            <button
              className="uk-button uk-button-small uk-button-primary float-right"
              onClick={() => (window.location.href = "/add-score")}
            >
              Add Scores
            </button>
          </div>
          <div className="uk-card-title">
            <button
              onClick={sortScore}
              className={`uk-button uk-button-small uk-text-capitalize ${
                sortBy === "score" ? "uk-button-secondary" : "uk-button-default"
              }`}
            >
              Sort Score
            </button>
            &nbsp;
            <button
              onClick={sortPlayer}
              className={`uk-button uk-button-small uk-text-capitalize ${
                sortBy === "player"
                  ? "uk-button-secondary"
                  : "uk-button-default"
              }`}
            >
              Sort Player
            </button>
            &nbsp;
            <button
              onClick={clearSort}
              className="uk-button uk-button-default uk-button-small uk-text-capitalize"
            >
              Clear sorters
            </button>
          </div>
          <table className="table table-responsive-lg uk-table-striped uk-table-divider mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th onClick={sortPlayer}>Player Name</th>
                <th onClick={sortScore}>Scores</th>
                <th>Updated on</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody uk-scrollspy="cls: uk-animation-slide-bottom; target: tr; delay: 300; repeat: true">
              {scoreBoards.map((board, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{board.player}</td>
                  <td>{board.score}</td>
                  <td>
                    <span style={{ display: "inline" }}>
                      {moment(board.updatedDate).format(
                        "Do MMM, YYYY | hh:mm a"
                      )}
                    </span>
                  </td>
                  <td>
                    <button
                      className="uk-button uk-button-small uk-button-primary"
                      onClick={() => {
                        window.location.href = `/edit-score/${board._id}`;
                      }}
                    >
                      <i className="fa fa-edit"></i>&ensp;Update
                    </button>{" "}
                    &ensp;
                    <button
                      className="uk-button uk-button-small uk-button-danger"
                      onClick={() =>
                        destroy(`${board._id}`).then(res => {
                          message.success(res.data.msg);
                          setTimeout(() => (window.location.href = "/"), 1000);
                        })
                      }
                    >
                      <i className="fa fa-trash"></i>&ensp;Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="uk-card-default page-info"
            style={{ padding: 15, float: "right" }}
          >
            <div className="uk-inline">
              <span>
                Rows per page: &nbsp;
                <select onChange={onChange}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  {total > 10 && <option value="15">15</option>}
                  {total > 15 && <option value={total}>All</option>}
                </select>
              </span>
              &emsp;{" "}
              <span>
                1-{limit > total ? total : limit} of {total}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

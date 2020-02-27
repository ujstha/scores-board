import React, { Component } from "react";
import { Button } from "antd";

export default class EditScore extends Component {
  render() {
    const { player, score, onSubmit, onChange, btnDisabled } = this.props;
    return (
      <>
        <div className="uk-card uk-card-default uk-width-1-2@l uk-align-center uk-margin-top-2">
          <form className="uk-form-stacked uk-card-body" onSubmit={onSubmit}>
            <h3 className="uk-card-title uk-text-center">
              Update Score {player !== "" && `of ${player}`}
            </h3>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-player">
                Player Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-stacked-player"
                  type="text"
                  name="player"
                  value={player}
                  placeholder="Write player's name here....."
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-score">
                Score <small>(min: 0)</small>
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-stacked-score"
                  type="number"
                  name="score"
                  value={score}
                  min="0"
                  placeholder="Write score here....."
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="clearfix" style={{ fontSize: 15 }}>
              <Button
                className="float-left"
                onClick={() => (window.location.href = "/")}
              >
                <i className="fa fa-times"></i>&ensp;Cancel
              </Button>
              <Button
                className="float-right"
                type="danger"
                htmlType="submit"
                disabled={btnDisabled}
              >
                <i className="fa fa-pencil-alt"></i>&ensp;Edit Score
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

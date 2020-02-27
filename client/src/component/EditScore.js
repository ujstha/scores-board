import React, { Component } from "react";

export default class EditScore extends Component {
  render() {
    const { player, score, onSubmit, onChange } = this.props;
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
                />
              </div>
            </div>
            <div className="clearfix">
              <button className="uk-button uk-button-default float-left" style={{width: "48%", whiteSpace: "nowrap"}}>
                <i className="fa fa-times"></i>&ensp;Cancel
              </button>
              <button className="uk-button uk-button-danger float-right" style={{width: "48%", whiteSpace: "nowrap"}}>
                <i className="fa fa-pencil-alt"></i>&ensp;Edit Score
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

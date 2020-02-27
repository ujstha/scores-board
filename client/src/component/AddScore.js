import React, { Component } from "react";

export default class AddScore extends Component {
  render() {
    const { player, score, onSubmit, onChange } = this.props;
    return (
      <>
        <div className="uk-card uk-card-default uk-width-1-2@l uk-align-center uk-margin-top-2">
          <form className="uk-form-stacked uk-card-body" onSubmit={onSubmit}>
            <h3 className="uk-card-title uk-text-center">Submit New Score</h3>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-player">
                Player Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  name={player}
                  id="form-stacked-player"
                  type="text"
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
                  name={score}
                  id="form-stacked-score"
                  type="number"
                  min="0"
                  placeholder="Write score here....."
                  onChange={onChange}
                />
              </div>
            </div>
            <button className="uk-button uk-button-primary uk-align-right uk-width-1-1">
              <i className="fa fa-save"></i>&ensp;Save Score
            </button>
          </form>
        </div>
      </>
    );
  }
}

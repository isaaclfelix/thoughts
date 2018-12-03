import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ThoughtCardEmotionComparison extends Component {
  constructor(props) {
    super(props);
  }
  getBarWidthStyle(prop) {
    let barWidth = {
      width: `${prop}%`
    };
    return barWidth;
  }

  render() {
    return(
      <li className="col-12 col-lg-4 mb-3 emotion">
        <h6 className="mb-1 emotion-name">{this.props.emotionName}</h6>
        <small>Adaptative Response</small>
        <div className="progress mb-1">
          <div className="progress-bar bg-success" role="progressbar" aria-valuenow={this.props.adaptativeResponse} aria-valuemin="0" aria-valuemax="100" style={this.getBarWidthStyle(this.props.adaptativeResponse)}>
            <small>{this.props.adaptativeResponse}%</small>
          </div>
        </div>
        <small>Result</small>
        <div className="progress mb-2">
          <div className="progress-bar bg-success" role="progressbar" aria-valuenow={this.props.result} aria-valuemin="0" aria-valuemax="100" style={this.getBarWidthStyle(this.props.result)}>
            <small>{this.props.result}%</small>
          </div>
        </div>
      </li>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Emotion extends Component {
  render() {
    return(
      <span className="badge badge-primary mt-1 mb-1 mr-2">{this.props.name}</span>
    );
  }
}

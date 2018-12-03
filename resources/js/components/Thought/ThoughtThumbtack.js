import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ThoughtThumbtack extends Component {
  render() {
    return(
      <div className="thought-thumbtack position-absolute text-dark bg-warning shadow-sm">
        <i className="fas fa-thumbtack"></i>
      </div>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ThoughtTitle extends Component {
  render() {
    return (
      <div className="card-body bg-thoughts-gradient text-white d-sm-flex align-items-center">
        <h4 className="card-title font-weight mb-sm-0">
          {this.props.thoughtData.name}
        </h4>
        <ul className="text-white list-unstyled mb-0 d-sm-flex ml-sm-auto align-items-center">
          <li className="custom-bullet mr-3"><h6 className="mb-2 mb-sm-0"><span className="fas calendar"></span>{this.props.thoughtData.date}</h6></li>
          <li className="custom-bullet"><h6 className="mb-0"><span className="fas clock"></span>{this.props.thoughtData.time}</h6></li>
        </ul>
      </div>
    );
  }
}

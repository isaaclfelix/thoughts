import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ThoughtAccordionItem extends Component {
  render() {
    return(
      <li className="list-group-item pt-4 pb-4">
        <h5 className="mb-0 d-flex align-items-center flex-wrap card-title" data-toggle="collapse" data-target={`#${this.props.boxID}`}>
          <div className="title mr-1">
            <span className="mr-1 text-primary">{this.props.title}</span>
            <small className="text-muted">{this.props.subtitle}</small>
          </div>
          <div className="ml-auto icon"><i className="fas fa-chevron-up"></i></div>
        </h5>
        <div className={`collapse ${this.props.hide}`} id={this.props.boxID} data-parent={this.props.parent}>
          <div className="pt-3">
            {this.props.children}
          </div>
        </div>
      </li>
    );
  }
}

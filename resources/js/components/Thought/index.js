import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ThoughtThumbtack from './ThoughtThumbtack';
import ThoughtTitle from './ThoughtTitle';
import ThoughtAccordion from './ThoughtAccordion';

export default class Thought extends Component {
  render() {
    return(
      <div className="col-12 col-xl-6 mb-5 thought">
        {/*
        <ThoughtThumbtack />
        */ }
        <div className="card shadow-sm">
          <ThoughtTitle thoughtData={this.props.thoughtData}  />
          <ThoughtAccordion thoughtData={this.props.thoughtData} />
        </div>
      </div>
    );
  }
}

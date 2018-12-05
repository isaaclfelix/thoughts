import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Thought from './Thought/';

export default class Thoughts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thoughts: []
    };
  }
  getThoughtData() {
    return {
      name: "Thought #1",
      date: "Friday November 31st, 2018",
      time: "18:00:00"
    };
  }
  getThoughts() {
    const thoughts = [];
    let thoughtsCount = 0;
    thoughts.push(<Thought key={thoughtsCount} thoughtData={this.getThoughtData()} />);
    thoughtsCount++;
    return thoughts;
  }
  componentDidMount() {
    // fetch('').then((response) => {
    //   return JSON.parse(response)
    // })
    // .then((parsedResponse) => {
    //   this.setState({
    //     thoughts: parsedResponse
    //   });
    // })
    // .error((error) => {
    //   console.log("Something went wrong");
    // });

    const parsedResponse = [];
    this.setState({
      thoughts: parsedResponse
    });
  }
  render() {
    return (
      <div className="pt-4 pb-4 row thoughts">
        {this.getThoughts()}
      </div>
    );
  }
}

if (document.getElementById('thoughts')) {
  ReactDOM.render(<Thoughts />, document.getElementById('thoughts'));
}

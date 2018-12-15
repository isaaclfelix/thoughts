import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Thought from './Thought/';

export default class Thoughts extends Component {
  render() {
    return (
      <div className="pt-4 pb-4 row thoughts">
        {JSON.parse(this.props.thoughts).map((thought, key) => {
          const thoughtDateTime = thought.updated_at.split(' ');
          // Build data
          const thoughtData = {
            id: thought.id,
            date: thoughtDateTime[0],
            time: thoughtDateTime[1],
            situation: thought.situation,
            automatedThoughts: thought.automated_thoughts,
            actions: thought.actions,
            emotions: thought.emotions
          };
          return <Thought key={key} thoughtData={thoughtData} />;
        })}
      </div>
    );
  }
}

if (document.getElementById('thoughts')) {
  const thoughtsContainer = document.getElementById('thoughts');
  const thoughts = thoughtsContainer.getAttribute("thoughts");
  ReactDOM.render(<Thoughts thoughts={thoughts} />, thoughtsContainer);
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ThoughtAccordionItem from './ThoughtAccordionItem';
import ThoughtCardEmotionComparison from './ThoughtCardEmotionComparison';

export default class ThoughtAccordion extends Component {
  render() {
    return(
      <ul className="list-group list-group-flush accordion" id={`thought-accordion-${this.props.thoughtData.id}`}>
        <ThoughtAccordionItem parent={`#thought-accordion-${this.props.thoughtData.id}`} boxID={`situation-${this.props.thoughtData.id}`} chevron="fa-chevron-up" hide="show" title="Situation" subtitle="What was happening?">
          <p className="mb-0">{this.props.thoughtData.situation}</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent={`#thought-accordion-${this.props.thoughtData.id}`} boxID={`automaticThoughts-${this.props.thoughtData.id}`} title="Automated Thoughts" subtitle="What was I thinking?">
          <p className="mb-0">{this.props.thoughtData.automatedThoughts}</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent={`#thought-accordion-${this.props.thoughtData.id}`} boxID={`actions-${this.props.thoughtData.id}`} title="Actions" subtitle="What did I do afterwards?">
          <p className="mb-0">{this.props.thoughtData.actions}</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent={`#thought-accordion-${this.props.thoughtData.id}`} boxID={`emotions-${this.props.thoughtData.id}`} title="Emotions" subtitle="How did I feel before & after?">
          <p className="mb-0">{this.props.thoughtData.emotions.split(',').map((emotion, key) => {
            return <span key={key} className="badge badge-primary mt-1 mb-1 mr-2">{emotion}</span>
          })}</p>
          {/*
          <ul className="mb-0 row list-unstyled">
            <ThoughtCardEmotionComparison emotionName="Anger" adaptativeResponse="50" result="50" />
          </ul>
          */}
        </ThoughtAccordionItem>
      </ul>
    )
  }
}

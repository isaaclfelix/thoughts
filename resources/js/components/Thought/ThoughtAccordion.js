import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ThoughtAccordionItem from './ThoughtAccordionItem';
import ThoughtCardEmotionComparison from './ThoughtCardEmotionComparison';

export default class ThoughtAccordion extends Component {
  render() {
    return(
      <ul className="list-group list-group-flush accordion" id="thought-accordion-">
        <ThoughtAccordionItem parent="#thought-accordion-" boxID={`situation-`} hide="show" title="Situation" subtitle="What was happening?">
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore eligendi similique beatae reprehenderit exercitationem culpa ab autem delectus debitis.</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent="#thought-accordion-" boxID={`automaticThoughts-`} title="Automatic Thoughts" subtitle="What was I thinking?">
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore eligendi similique beatae reprehenderit exercitationem culpa ab autem delectus debitis.</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent="#thought-accordion-" boxID={`actions-`} title="Actions" subtitle="What did I do afterwards?">
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore eligendi similique beatae reprehenderit exercitationem culpa ab autem delectus debitis.</p>
        </ThoughtAccordionItem>
        <ThoughtAccordionItem parent="#thought-accordion-" boxID={`emotions-`} title="Emotions" subtitle="How did I feel before & after?">
          <ul className="mb-0 row list-unstyled">
            <ThoughtCardEmotionComparison emotionName="Anger" adaptativeResponse="50" result="50" />
          </ul>
        </ThoughtAccordionItem>
      </ul>
    )
  }
}

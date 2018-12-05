import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Emotion from './NewThoughtModal/Emotion';

export default class NewThoughtModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionTags: []
    }
  }
  componentDidMount() {
    const emotionTagsInputGroup = $("#emotion-tags-input-group");
    const emotionTagsInput = $("#emotion-tags-input");
    let emotionTagsCount = 0;
    emotionTagsInput.keyup((event) => {
      if (event.which === 32) {
        if (emotionTagsInput.val() === ' ') {
          // Empty input
          emotionTagsInput.val("");
          // Focus input
          emotionTagsInput.focus();
          return;
        }

        // Get current emotion tags
        const emotionTags = this.state.emotionTags;
        // Save new emotion in emotion tags array
        emotionTags.push(<Emotion key={emotionTagsCount} name={emotionTagsInput.val()} />);
        emotionTagsCount++;
        // Save array with new emotion on state
        this.setState({
          emotionTags: emotionTags
        });
        // Empty input
        emotionTagsInput.val("");
        // Focus input
        emotionTagsInput.focus();
      }

    });

    emotionTagsInputGroup.on("click", ".badge", (e) => {
      $(e.target).remove();
    });
  }
  render() {
    return(
      <div className="modal fade" id="new-thought-modal" tabIndex="-1" role="dialog" aria-labelledby="new-thought-modal-label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="new-thought-modal-label">Add New Thought</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <input type="hidden" name="_token" value={this.props.csrf_token} />
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" type="text" name="name" placeholder="Tought #1" />
                </div>
                <div className="form-group">
                  <label>Situation</label>
                  <textarea className="form-control" type="text" name="situation" placeholder="A brief description of the situation..." />
                </div>
                <div className="form-group">
                  <label>Automatic Thoughts</label>
                  <textarea className="form-control" type="text" name="automaticToughts" placeholder="A brief description of what you were thinking..." />
                </div>
                <div className="form-group">
                  <label>Actions</label>
                  <textarea className="form-control" type="text" name="actions" placeholder="A brief description of what you did afterwards..." />
                </div>
                <div className="form-group">
                  <label>Emotions</label>
                  <div id="emotion-tags-input-group" className="form-control tagsInput d-flex flex-wrap align-items-center h-100">
                    {this.state.emotionTags.map((emotion) => {
                      return emotion;
                    })}
                    <input id="emotion-tags-input" type="text" className="d-inline-flex border-0" placeholder="Please use one word per emotion" />
                  </div>
                </div>
                <button type="submit" className="mt-2 btn btn-info text-white">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('new-thought-modal-window')) {
  const csrf_token = $('meta[name=csrf-token]').attr("content");
  ReactDOM.render(<NewThoughtModal csrf_token={csrf_token} />, document.getElementById('new-thought-modal-window'));
}

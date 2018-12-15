import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Emotion from './NewThoughtModal/Emotion';

export default class NewThoughtModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionTags: [],
      emotions: []
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
        //
        const emotions = this.state.emotions;
        emotions.push(emotionTagsInput.val().slice(0, -1));
        this.setState({
          emotions: emotions
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
              <form action={this.props.route}>
                <input type="hidden" name="_token" value={this.props.csrf_token} />
                <input type="hidden" name="author" value={this.props.author} />
                <div className="form-group">
                  <label>Situation</label>
                  <textarea className="form-control" type="text" name="situation" placeholder="A brief description of the situation..." />
                </div>
                <div className="form-group">
                  <label>Automatic Thoughts</label>
                  <textarea className="form-control" type="text" name="automatedThoughts" placeholder="A brief description of what you were thinking..." />
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
                    <input type="hidden" name="emotions" value={this.state.emotions} />
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
const modal_window = document.getElementById('new-thought-modal-window');
if (modal_window) {
  const csrf_token = $('meta[name=csrf-token]').attr("content");
  const route = modal_window.getAttribute('route');
  const author = modal_window.getAttribute('author');
  ReactDOM.render(<NewThoughtModal author={author} route={route} csrf_token={csrf_token} />, document.getElementById('new-thought-modal-window'));
}

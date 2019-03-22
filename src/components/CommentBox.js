import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/commentActions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      ...this.state,
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Leave a comment</h4>
          <textarea
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button>Submit Comment</button>
        </form>
        <button className="fetchComments" onClick={this.props.fetchComments}>
          Fetch Comment
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveComment: comment => dispatch(actions.saveComment(comment)),
    fetchComments: () => dispatch(actions.fetchComments())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);

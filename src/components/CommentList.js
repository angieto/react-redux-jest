import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const comments = (
      <ul>
        {this.props.comments.map(comment => {
          return <li key={comment}>{comment}</li>;
        })}
      </ul>
    );

    return <div>{comments}</div>;
  }
}

const mapStateToProps = state => ({
    comments: state.comments
})

export default connect(mapStateToProps)(CommentList);

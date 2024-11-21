import React from "react";
import "../Styles/CommentInput.css";

function CommentInput() {
  return (
    <div className="comment-input-container">
      <input
        type="text"
        placeholder="Yael Adamson-Brown share some progress"
        className="comment-input-field"
      />
      <button className="comment-post-button">Post</button>
    </div>
  );
}

export default CommentInput;

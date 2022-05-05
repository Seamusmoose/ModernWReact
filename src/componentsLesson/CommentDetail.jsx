import React from "react";

const CommentDetail = ({ time, text, image, author }) => {
  return (
    <div className="ui container commments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" height="50px" width="50px" src={image} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;

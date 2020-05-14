import React from "react";
import { Comment, CommentTitle, CommentSubTitle } from "./styles";

export const CommentsList = ({ comments }) => (
  <>
    <CommentTitle>Comments:</CommentTitle>
    {comments.map((comment, key) => (
      <Comment key={key}>
        <CommentSubTitle>{comment.username}</CommentSubTitle>
        <p>{comment.text}</p>
      </Comment>
    ))}
  </>
);

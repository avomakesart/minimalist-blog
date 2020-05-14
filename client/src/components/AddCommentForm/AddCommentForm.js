import React, { useState } from "react";
import {
  FormContainer,
  FormTitle,
  TextInput,
  TextArea,
  FormButton,
} from "./styles";

export const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <FormContainer>
      <FormTitle>Add a Comment</FormTitle>
      <label>
        Name:
        <TextInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <TextArea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>

      <FormButton onClick={() => addComment()}>Add Comment</FormButton>
    </FormContainer>
  );
};

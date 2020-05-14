import React from "react";
import { UpvoteContainer, UpvoteButton, UpvoteParagraph } from "./styles";

export const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <UpvoteContainer>
      <UpvoteButton onClick={() => upvoteArticle()}>Add vote</UpvoteButton>
      <UpvoteParagraph>
        This post has been upvoted {upvotes} times
      </UpvoteParagraph>
    </UpvoteContainer>
  );
};

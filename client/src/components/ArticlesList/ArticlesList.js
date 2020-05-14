import React from "react";
import { ArticleListItem, ArticleTitle, ArticleExtract } from "./styles";

export const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => (
        <ArticleListItem key={key} to={`/article/${article.name}`}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleExtract>
            {article.content[0].substring(0, 150)}...
          </ArticleExtract>
        </ArticleListItem>
      ))}
    </>
  );
};

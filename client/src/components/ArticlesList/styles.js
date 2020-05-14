import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleListItem = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 16px 0 0 0;
`;

export const ArticleTitle = styled.h3`
  margin-bottom: 0;
`;

export const ArticleExtract = styled.p`
    padding-bottom: 32px;
    border-bottom: 2px solid black;
`;  

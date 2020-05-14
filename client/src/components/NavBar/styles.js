import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  border-bottom: 4px solid black;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
`;

export const NavContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LinkContainer = styled.li`
  display: inline-block;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 16px 32px;
  :hover {
    background: black;
    color: white;
  }
`;

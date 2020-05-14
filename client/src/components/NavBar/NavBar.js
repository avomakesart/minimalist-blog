import React from "react";
import { Navigation, NavContainer, LinkContainer, StyledLink } from "./styles";

export const NavBar = () => {
  return (
    <>
      <Navigation>
        <NavContainer>
          <LinkContainer>
            <StyledLink to="/">Home</StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink to="/about">About</StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink to="/articles-list">Articles</StyledLink>
          </LinkContainer>
        </NavContainer>
      </Navigation>
    </>
  );
};

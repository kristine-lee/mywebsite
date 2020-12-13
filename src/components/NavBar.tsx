import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNavBar = styled.nav`
   {
    display: flex;
    justify-content: space-between;
    align-items: right;
    width: 31.25rem;
    background: transparent;
    a {
      color: "#020826"
    }
    z-index: 11;
  };

  .navLink {
    font-size: 2rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.heading};
    text-decoration: none;
    position: relative;
    &::before {
      transition: 200ms ease-out;
      height: 0.1563rem;
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 0%;
      bottom: -0.125rem;
    }
    &:hover::before {
      width: 100%;
    }
  }

  hr {
    margin-right: calc(80% - 5em);
    padding-right: 5rem;
  }

`

// const StyledBurger = styled.button`

// `

const NavBar: React.FC<{}> = (props) => {

  return (
    <StyledNavBar>
       <Link className="navLink" to="#projects">Projects</Link>
       <hr />
    </StyledNavBar>
  )

}

export default NavBar

import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import NavBar from './NavBar';

type HeaderProps = {
  siteTitle: string;
}

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1.45rem 1.45rem 1.45rem;
  background-color: transparent;
  align-content: center;
  transition: var(--transition);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 25px;
  }
`

const StyledNavWrapper = styled.div`
  flex: 1 0 100%;
  margin: 1rem calc(80% - 5em) -1rem -1rem;
  padding: 1rem 5rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
`



const HeaderComponent: React.FC<HeaderProps> = props => {
  return (
    <>
      <StyledHeader>
      {/* <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: '#020826'
          }}
        >
        Hi, I'm  {props.siteTitle}
        </Link>
      </h1> */}
      <StyledNavWrapper>
       <NavBar />
      </StyledNavWrapper>
    </StyledHeader>
  </>
  )
}
//TODO: https://www.wcj.io/blog/gatsby-smooth-scrolling//

export default HeaderComponent

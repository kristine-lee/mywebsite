import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  background-color: #f0e1a0;
  margin: 2rem 2rem 2rem 0;
  padding: 1.45rem;
  height: 50vh;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "sectionTitle sectionTitle"
    "list1 list2";

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
    "sectionTitle"
    "list1"
    "list2";
  }

  .section-title {
    grid-area: sectionTitle;
    // border: 1px solid black;
    justify-content: center;
    align-items: center;
    align-text: center;
    text-transform: uppercase;
    font-style: italic;
  }

  .table-one {
    grid-area: list1;
    // border: 1px solid blue;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .table-two {
    grid-area: list2;
    // border: 1px solid red;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const StyledTable = styled.div`
  justify-content: center;
  align-items: center;
`

const StyledTechList = styled.ul`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  li {
    display: list-item;
  }
`
const forTableOne = [
  "JavaScript", "React", "Node.js"
]

const forTableTwo = [
  "Express", "PostgreSQL", "Sequelize ORM"
]

const TechStack: React.FC<{}> = props => {
  return (
    <StyledSection>
      <div className="section-title">
        <h2>Technologies I Most Often Use:
        </h2>
      </div>
      <StyledTable className="table-one">
        <StyledTechList>
          {forTableOne.map((item, index) => <li key={index}>{item}</li>)}
        </StyledTechList>
        </StyledTable>
      <StyledTable className="table-two">
        <StyledTechList>
          {forTableTwo.map((item, index) => <li key={index}>{item}</li>)}
        </StyledTechList>
        </StyledTable>
    </StyledSection>
  )
}

export default TechStack

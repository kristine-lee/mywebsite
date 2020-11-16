import styled from 'styled-components';

export const breakpoints = {
  s: 600,
  m: 768,
  l: 992,
  xl: 1200
}

export const Grid = styled.div`
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;
  } & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const GridHeader = styled.div`
  {
    grid-area: 1 / 1 / 2 / 5;
    border: 2px solid
  }
`
export const GridMain = styled.main`
  grid-area: 2 / 1 / 3 / 5;
  border: 2px solid
`
export const GridFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 5;
  border: 2px solid;
`
export const FlexContainer = styled.div`
  display: flex;
`

export const FlexRow = styled.div`
  flex: 33.33%;
  padding: 5px;
`
export const MainFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const MainContent = styled.div`
{  width: 48%;
  height: 100px;
  margin-bottom: 2%;
} :nth-child(3) {
  width: 100%;
}
`
export const FlexBreak = styled.div`
{
  flex-basis: 100%;
  height: 0;
}
`

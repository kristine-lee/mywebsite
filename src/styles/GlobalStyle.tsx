import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --black: #020826;
  --lightblue: #A1C9EE;
  --lightbrown: #937B7B;
  --dimgray: #696969;

  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

body {
  margin: 0;
  font-family: 'Source Sans Pro', -apple-system, system-ui, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

h1
h2
h3
p
{
  font-family: 'Source Serif Pro', -apple-system, system-ui, sans-serif;
  color: #937B7B;
}

main {
  margin: 0 auto;
  // margin-top: 30px;
  // height: 100vh;
}

hr {
  background-color: var(--dimgray);
  height: 1px;
  border-width: 0px;
  margin: 1rem;
  width: 40%;
}

`
export default GlobalStyle

import React from 'react';
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  background: transparent
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  -webkit-animation: ${spin} 2s linear infinite;
`

const Loader: React.FC<{}> = () => {
  return (
    <StyledLoader />
  )
}

export default Loader

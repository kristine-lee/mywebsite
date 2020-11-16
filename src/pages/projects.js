import React, {useState } from 'react';
import { SEO, ProjectTable } from '../components';
import { UilAngleDoubleDown } from "@iconscout/react-unicons";
import {Collapse} from 'react-collapse';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(-30px);
  }
  60% {
      transform: translateY(-15px);
  }
`

const Bouncy = styled.div`
  position: relative;
  animation: ${bounce} 2s infinite;
`

const BouncyButton = styled.button`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: hsl(243, 55%, 72%);
  border: none;
`

// const BouncyIcon = styled.i`
//   position: absolute;
//   top: 40%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   fill: hsl(243, 55%, 72%);
// `


export default function Projects () {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick= (event) => {
    event.preventDefault();
    setIsOpened(!isOpened)
  }
  return (
    <div className="project-section">
      <SEO title="Projects" />
      <Bouncy>
        <BouncyButton onClick={handleClick}><UilAngleDoubleDown size="4em" color="#eb38"/></BouncyButton>
      </Bouncy>
      <Collapse isOpened={isOpened}>
        <ProjectTable />
      </Collapse>
    </div>
  )
}


// export const getProjectData = graphql`
//   query {
//     ProjectQuery {
//       allJavascriptFrontmatter {
//         edges {
//           node {
//             frontmatter {
//               projectdata {
//                 title
//                 description
//                 imageUrl
//                 link
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

import React, {useState, MouseEvent } from 'react';
import { SEO, ProjectTable } from '../components'
import { projectdata } from '../data/projectdata'
import {Collapse} from 'react-collapse';



export default function Projects () {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick= (event) => {
    event.preventDefault();
    setIsOpened(!isOpened)
  }
  return (
    <div className="project-section">
      <SEO title="Projects" />
      <button onClick={handleClick}>Hihihih</button>
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

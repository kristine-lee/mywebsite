import React from 'react';
import { useProjectQuery } from '../utils/useProjectQuery';

//TODO: replace projectcard with this
//TODO: maybe use useProjectQuery in utils to query it instead of writing them out manually
//TODO: then delete the project js
//TODO: add transition to pages https://blog.bitsrc.io/animating-reactjs-with-react-transition-group-2af6c87cab0c
//TODO: add styling with svgs and vectors

const ProjectSection: React.FC<{}> = props => {
  // const projectData = useProjectQuery();

  // console.log(projectData)
  //TODO: query works fine on GraphiQL but doesn't render in React. Maybe needs to be put inside useEffect
  //TODO: might need to write TechStack and Project as mdx?
  return (
    <React.Fragment>
      {/* {projectData && <ul>
        {projectData.map(project => <li key={project.title}>
          {project.title}
        </li>)}

        </ul>} */}
    </React.Fragment>

  )

}

export default ProjectSection

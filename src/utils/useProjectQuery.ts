import { useStaticQuery, graphql } from 'gatsby';

//https://blog.bitsrc.io/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e
const useProjectQuery = () => {
  const projectList = useStaticQuery(graphql`
    query ProjectQuery {

    }


  `)
}

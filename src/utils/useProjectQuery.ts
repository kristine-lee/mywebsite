import { useStaticQuery, graphql } from 'gatsby';


export const useProjectQuery = () => {
  const projectsData = useStaticQuery(graphql`
    query ProjectQuery {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              error
              projects {
                title
                description
                imageUrl
                link
              }
            }
          }
        }
      }
    }
  `);
  return projectsData;
};

// projects: allMdx(
//   filter: {
//     fileAbsolutePath: { regex: "/index/projects/" }
//     frontmatter: { visible: { eq: true } }
//   }
//   sort: { fields: [frontmatter___position], order: ASC }
// ) {
//   edges {
//     node {
//       body
//       frontmatter {
//         title
//         category
//         emoji
//         external
//         github
//         screenshot {
//           childImageSharp {
//             fluid(maxWidth: 400, quality: 90) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         tags
//         position
//         buttonVisible
//         buttonUrl
//         buttonText
//       }
//     }
//   }
// }

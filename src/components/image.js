import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './Image_Front.module.css'


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      frontPageImage: file(relativePath: { eq: "frontpage.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    // <div className={styles.wrapper}>
        <Img className={styles.frontImage} fluid={data.frontPageImage.childImageSharp.fluid} alt="cat" />
    //</div>
    )
}

export default Image

/*style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}*/

import { graphql } from "gatsby"
import BlogComponent, { Head } from "../components/blog"

export default BlogComponent

export { Head }

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
        cover {
          childImageSharp {
            gatsbyImageData(width: 400, height: 300, quality: 90)
          }
        }
      }
    }
  }
`

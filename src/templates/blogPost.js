import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const blogPost = ({ data, pathContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const post = data.markdownRemark
  const { next, prev } = pathContext
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
   <Layout> 
    <div>
      <h1>{title}</h1>
      <div>
        <em>{date}</em>
      </div> 
      <br />
      <Img fluid={featuredImgFluid} />
      <p>
        {prev && (
          <Link to={prev.frontmatter.path}>
            {prev.frontmatter.title} <span role="img" aria-label="point-left">👈 </span>Previous
          </Link>          
        )}      
      </p>  
      <p>     
        {next && (
          <Link to={next.frontmatter.path}>
            Next <span role="img" aria-label="point-right">👉</span>
            {next.frontmatter.title}
          </Link>     
        )}
      </p>
    </div>
    </Layout>
  )
}

export const postQuery = graphql`
query($pathSlug: String!) {
  markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
    html
    frontmatter { 
      featuredImage {
      childImageSharp{
      	fluid(maxWidth: 800){
      		...GatsbyImageSharpFluid
      	 }
        }
      }
      title
      date(formatString: "MMMM, DD, YYYY")
      path
      tags
      excerpt
    }
  }
}
`

export default blogPost
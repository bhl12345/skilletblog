import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import CBox from '../components/BottomBar'
import HyvorTalk from 'hyvor-talk-react'


const blogPost = ({ data, pathContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const post = data.markdownRemark
  const { next, prev } = pathContext
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
   <Layout> 
   <script type="text/javascript">var subscribersSiteId='e4f7886e-e9cf-4777-8f78-e8d18f0cedd9';
   </script><script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
    <div>
      <h1>{title}</h1>
      <div>
        <em>{date}</em>
      </div> 
      <br />
      <Img fluid={featuredImgFluid} />
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <HyvorTalk.Embed websiteId={2222} loadMode="scroll" />
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
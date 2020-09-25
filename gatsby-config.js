module.exports = {
  siteMetadata: {
    title: `The Pontificating Peasant`,
    description: `You Don't Need To Be Rich To Have A Say`,
    author: `BHL`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pontificating peasant`,
        short_name: `pontifcate`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pontificate.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
	'gatsby-transformer-remark',
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `pages`,
			path: `${__dirname}/src/pages/`
		}
	} ],
}

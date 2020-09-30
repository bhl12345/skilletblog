module.exports = {
  siteMetadata: {
    title: `The Pontificating Peasant`,
    description: `You Don't Need To Be Rich To Have A Say`,
    author: `BHL`,
    siteUrl: `https://www.pontificating-peaseant.com/`,
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
    {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 740,
                wrapperStyle: `margin-bottom: 2.2rem;`,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 2.2rem;`,
              },
            },
          ],
        },
      },
      {
    	    // The name of the plugin
    	    resolve: 'gatsby-source-mongodb',
    	    options: {
    	        // Name of the database and collection where are books reside
    	        dbName: 'pontificatingpeasant',
    	        collection: 'pontificatingpeasant',
    	        server: {
    	            address: 'pontificatingpeasant-shard-00-02.mkwnc.mongodb.net',
    	            port: 27017
    	        },
    	        auth: {
    	            user: ' ',
    	            password: ' '
    	        },
    	        extraParams: {
    	            replicaSet: 'ATLAS-IBA4RN-SHARD-0',
    	            ssl: true,
    	            authSource: 'admin',
    	            retryWrites: true
    	        }
    	    }
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

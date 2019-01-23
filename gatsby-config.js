module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Cole\'s Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {resolve:'gatsby-transformer-remark',
      options:{
        plugins: ["gatsby-remark-copy-linked-files", 'gatsby-remark-copy-images',{
          resolve:'gatsby-remark-images',
          options: {
            linkImagesToOriginal: false
          }
        }, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language->",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          }
        }

        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'
  ],
}

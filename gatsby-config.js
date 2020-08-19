module.exports = {
  siteMetadata: {
    title: 'Style Guide',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};

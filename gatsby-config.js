module.exports = {
  siteMetadata: {
    title: "Design Grove",
    author: "George Rohn",
    description: "A website which advertises and features my work as a web developer and programmer."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`, 
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/pages/index',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
        trackingId: "UA-141374685-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

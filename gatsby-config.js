module.exports = {
  siteMetadata: {
    title: `EU Verksted PWA`,
  },
  plugins: [
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
		{
      resolve: `gatsby-transformer-csv`,
      options: {
				noheader: false,
				delimiter: ";",
      },
    },
		`gatsby-plugin-emotion`,
		`gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

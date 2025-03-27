import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = (options) => ({
  siteMetadata: {
    siteTitle: `Minimal Blog`,
    siteTitleAlt: `Minimal Blog - @akaikesan/gatsby-theme-minimal-blog is customized version of @lekoarts/gatsby-theme-minimal-blog`,
    siteHeadline: `Minimal Blog`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@akaikesan`,
  },
  plugins: [
    {
      resolve: `@akaikesan/gatsby-theme-minimal-blog-core`,
      options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})

export default config

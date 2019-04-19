const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = config => {

  config.addPlugin(pluginRss)

  // collections
  config.addCollection('tweets', require('./_src/_utils/gettweets'))
  config.addCollection('signatures', require('./_src/_utils/getsignatures'))
  config.addCollection('signatureOrgs', require('./_src/_utils/getsignatureorgs'))

  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "xml",
      "jpg",
      "png",
      "ico",
      "eot",
      "svg",
      "ttf",
      "woff",
      "woff2"
    ],
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "_src",
      output: process.env.PWD
    }
  }
}

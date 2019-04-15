const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = config => {

  config.addPlugin(pluginRss);

  // custom collection for tweets
  config.addCollection('tweets', require('./_src/_utils/getTweets'));

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
};

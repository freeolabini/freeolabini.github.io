const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginTailwindCSS = require('eleventy-plugin-tailwindcss');

module.exports = ( eleventyConfig ) => {
  // Eleventy plugins
  eleventyConfig.addPlugin( pluginRss );
  eleventyConfig.addPlugin( pluginTailwindCSS, {
    src: '_src/css/tailwind.css',
    dest: 'css',
    watchEleventyWatchTargets: true,
    keepFolderStructure: false,
    minify: process.env.ELEVENTY_ENV === 'development',
  } );

  // Custom collections
  eleventyConfig.addCollection('signatures',    require( './_src/_utils/getsignatures'    ));
  eleventyConfig.addCollection('signatureOrgs', require( './_src/_utils/getsignatureorgs' ));
  eleventyConfig.addCollection('signatures2',   require( './_src/_utils/getsignatures2'   ));

  return {
    templateFormats: [
      'md',
      'njk',
      'css',
      'xml',
      'jpg',
      'png',
      'ico',
      'eot',
      'svg',
      'ttf',
      'woff',
      'woff2'
    ],
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: 'docs',
    }
  }
}

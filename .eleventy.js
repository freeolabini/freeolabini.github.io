const pluginRss = require('@11ty/eleventy-plugin-rss');
const htmlmin = require('html-minifier');

module.exports = ( eleventyConfig ) => {
  // Eleventy plugins
  eleventyConfig.addPlugin( pluginRss );

  // Custom collections
  eleventyConfig.addCollection('signatures',      require( './_src/_utils/getsignatures'                ));
  eleventyConfig.addCollection('signatureOrgs',   require( './_src/_utils/getsignatureorgs'             ));
  eleventyConfig.addCollection('signatures2',     require( './_src/_utils/getsignatures2'               ));
  eleventyConfig.addCollection('manifestoOrgs',   require( './_src/_utils/getManifestoSignaturesOrgs'   ));
  eleventyConfig.addCollection('manifestoPeople', require( './_src/_utils/getManifestoSignaturesPeople' ));

  // Minify HTML output
  eleventyConfig.addTransform( 'htmlmin', ( content, outputPath ) => {
    if ( outputPath && outputPath.endsWith( '.html' ) ) {
      let minified = htmlmin.minify( content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      } );
      return minified;
    }
    return content;
  } );

  eleventyConfig.addWatchTarget( './_tmp/tailwind.css' );
  eleventyConfig.addPassthroughCopy( { './_tmp/tailwind.css': './docs/css/tailwind.css' } );

  return {
    templateFormats: [
      'md',
      'njk',
      'css',
      'xml',
      'jpg',
      'jpeg',
      'png',
      'ico',
      'eot',
      'svg',
      'ttf',
      'woff',
      'woff2',
      'pdf',
      'mp4',
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

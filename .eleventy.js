const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginTailwindCSS = require('eleventy-plugin-tailwindcss');
const htmlmin = require('html-minifier');

module.exports = ( eleventyConfig ) => {
  // Eleventy plugins
  eleventyConfig.addPlugin( pluginRss );
  eleventyConfig.addPlugin( pluginTailwindCSS, {
    src: 'tailwind.css',
    dest: 'css',
    watchEleventyWatchTargets: true,
    keepFolderStructure: false,
    minify: process.env.ELEVENTY_ENV === 'development',
  } );

  // Custom collections
  eleventyConfig.addCollection('signatures',      require( './_src/_utils/getsignatures'                ));
  eleventyConfig.addCollection('signatureOrgs',   require( './_src/_utils/getsignatureorgs'             ));
  eleventyConfig.addCollection('signatures2',     require( './_src/_utils/getsignatures2'               ));
  eleventyConfig.addCollection('manifestoOrgs',   require( './_src/_utils/getManifestoSignaturesOrgs'   ));
  eleventyConfig.addCollection('manifestoPeople', require( './_src/_utils/getManifestoSignaturesPeople' ));

  // Minify HTML output
  eleventyConfig.addTransform( 'htmlmin', ( content, outputPath ) => {
    if ( outputPath && outputPath.endsWith('.html') ) {
      let minified = htmlmin.minify( content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      } );
      return minified;
    }
    return content;
  } );

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

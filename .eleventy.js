const pluginRss = require('@11ty/eleventy-plugin-rss');
const htmlmin = require('html-minifier');
const markdownIt = require('markdown-it');

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
  eleventyConfig.addPassthroughCopy( { './_tmp/tailwind.css': './css/tailwind.css' } );

  // Allows post to have excerpts
  eleventyConfig.setFrontMatterParsingOptions( {
    excerpt: true,
    excerpt_separator: '--excerpt--',
  } );

  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true,
  };

  eleventyConfig.setLibrary( 'md', markdownIt(markdownItOptions) );

  // Adds a new filter to convert markdown to html
  eleventyConfig.addFilter( 'toHTML', ( src ) => markdownIt( markdownItOptions ).render( src ) );

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

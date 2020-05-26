module.exports = function (eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options
    codeSync: false
  });

  // copy `src/fonts` to `dist/fonts`
  eleventyConfig.addPassthroughCopy("src/fonts");
  
  // copy `styles.css` to `dist`
  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    }
  };

};

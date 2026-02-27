module.exports = function (eleventyConfig) {
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

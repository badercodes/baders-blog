module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

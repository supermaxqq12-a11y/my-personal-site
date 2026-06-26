module.exports = function(eleventyConfig) {
  // Указываем Eleventy, что файлы конфигурации и шаблоны лежат в src
    return {
    dir: {
    input: "src",
    output: "public"
    }
    };
};

module.exports = function(eleventyConfig) {
  // Копирование картинок
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/**/*.gif");
  eleventyConfig.addPassthroughCopy("src/**/*.svg");
  
  // ДОБАВИЛИ: Копирование папки со шрифтами
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
module.exports = function(eleventyConfig) {
  // Указываем Eleventy, что файлы конфигурации и шаблоны лежат в src
    return {
    dir: {
    input: "src",
    output: "public"
    }
    };
};


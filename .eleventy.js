var moment = require('moment');

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("formatDate", function (value) {
        const date = moment(new Date(value)).utc().format("DD MMM YYYY");
        return date;
    });
   
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/Blog/Posts/**/*.md").reverse();
});
    eleventyConfig.addPassthroughCopy("src/");

    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: '../_includes'
        }
    }
}
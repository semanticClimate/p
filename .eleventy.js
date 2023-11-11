const { DateTime } = require("luxon");
const navigationPlugin = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = (config) => {
  config.addPlugin(navigationPlugin);
  config.addPlugin(rssPlugin);
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("static");

  config.setDataDeepMerge(true);

  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  config.addFilter("featured", (listObj) => {
    // console.log(listObj[0].data)
    featured = [];

    listObj.forEach((element) => {
      // console.log(element)
      if (element.data.featured) {
        // console.log(element.data.title)
        featured.push(element);
      }
    });

    return featured;
  });

  config.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL, yyyy"
    );
  });

  config.addFilter("convertDate", (dateObj) => {
    date = new Date(dateObj);
    return date.toLocaleDateString("en-US");
  });

  // Nunjucks Shortcode
  config.addShortcode("register", function (link, target) {
    html = "";
    if (link != false) {
      html =
        '<p class="button-wrap"><a target=' +
        target +
        ' class="action register" href="' +
        link +
        '" >Register →</a></p>';
    }
    return html;
  });

  config.addCollection("tagList", (collection) => {
    const tagsObject = {};
    collection.getAll().forEach((item) => {
      if (!item.data.tags) return;
      item.data.tags
        .filter((tag) => !["post", "all"].includes(tag))
        .forEach((tag) => {
          if (typeof tagsObject[tag] === "undefined") {
            tagsObject[tag] = 1;
          } else {
            tagsObject[tag] += 1;
          }
        });
    });

    const tagList = [];
    Object.keys(tagsObject).forEach((tag) => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] });
    });
    return tagList.sort((a, b) => b.tagCount - a.tagCount);
  });

  return {
    pathPrefix: "/p/",
  };
};

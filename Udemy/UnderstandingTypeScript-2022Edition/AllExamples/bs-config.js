// node.js語法
module.exports = {
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require("connect-history-api-fallback")({
        index: "./EP13_index.html",
        verbose: true,
      }),
    },
  },
};

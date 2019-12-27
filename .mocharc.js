module.exports = {
  diff: true,
  extension: ["js"],
  opts: false,
  package: "./package.json",
  reporter: "mochawesome",
  slow: 75,
  timeout: 5000,
  ui: "bdd",
//   "watch-files": ["lib/**/*.js", "test/**/*.js"]
  //   "watch-ignore": ["lib/vendor"]
};

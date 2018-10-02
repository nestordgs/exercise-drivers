const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    },
    useBuiltIns: "usage"
  }],
  ["minify"]
]

const plugins = [
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-proposal-async-generator-functions',
  '@babel/plugin-transform-modules-amd',
]

module.exports = { presets, plugins }

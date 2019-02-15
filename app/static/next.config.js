const withStyledIcons = require('next-plugin-styled-icons');
const withReactDates = require('react-dates');
const withCSS = require('@zeit/next-css');

// module.exports = withStyledIcons()
module.exports = withStyledIcons(withCSS())

// module.exports = withReactDates(withStyledIcons({
//   webpack: (config, {}) => {
//     config.module.rules.push({
//       test: /\.css$/,
//       loader: ['style-loader', 'css-loader'],
//     })
//
//     return config
//   },
// }))

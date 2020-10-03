/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

exports.onRouteUpdate = ({ location, action }) => {
  console.log("route changed", { location, action })
}

// import { declare } from "@babel/helper-plugin-utils";
var { declare } =  require("@babel/helper-plugin-utils")

// export default declare((api, options, dirname) => {
module.exports = declare(function(api, options, dirname){
  api.assertVersion(7);

  return {
    name: "remove-console-log",
    visitor: {
      ExpressionStatement(path){
        const { node } = path;
        path.remove();
      }
    }
  };
});

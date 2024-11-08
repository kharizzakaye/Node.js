// const exportedModule = require("./export-custom-module"); => import entire module
const { inc, dec, getCount } = require("./export-custom-module");

inc();
inc();
inc();

// console.log(exportedModule.anything); // true

console.log(`the count is ${getCount()}`);

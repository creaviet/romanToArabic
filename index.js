'use strict';
const convert = require('./convert');

var prompt = require("prompt");
var colors = require("colors/safe");
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.white("Roman to arabic Number");
prompt.delimiter = colors.green(":");

prompt.start();

prompt.get({
  properties: {
    name: {
      description: colors.yellow(
        "\nType in a valid roman number, e.g. 'M', 'IX', etc. ")
    }
  }
}, function (err, result) {
  console.log(colors.cyan("The roman number (your input): " + colors.green(
      result.name) +
    "\n=> arabic number (the result): " + colors.green(convert.romantoarabic(
      result.name))));
});

'use strict';
const convert = require('./convert');

var prompt = require("prompt");
var colors = require("colors/safe");
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.white("Roman to arabic Number");
prompt.delimiter = colors.green(":");
/*
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
});*/

var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let promptQuestion = colors.red(
  "\nType in a valid roman number, e.g. 'M', 'IX', etc.\n") + colors.grey(
  "(in order to stop, type in 'ciao'): \n");
var infiniteReadLine = function () {
  rl.question(promptQuestion, function (
    romanNumber) {
    if (romanNumber === 'ciao') {
      log(colors.green("Arrivederci! :) "));
      return rl.close();
    }
    log(colors.yellow("\nRESULT"));
    log(colors.cyan("The roman number (your input): " + colors.green(
        romanNumber) +
      "\n=> arabic number (the result): " + colors.green(convert.romantoarabic(
        romanNumber))));
    infiniteReadLine();
  });
};

infiniteReadLine(); //we have to actually start our recursion somehow

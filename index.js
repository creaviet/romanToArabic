'use strict';
const convert = require('./convert');
const prompt = require("prompt");
const colors = require("colors/safe");
const readline = require('readline');
const log = console.log;
const figlet = require('figlet');

log(colors.yellow(figlet.textSync('"Roman To Arabic"', {
  horizontalLayout: 'default',
  verticalLayout: 'default'
})));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptQuestion = colors.blue(
    "\nEine gültige römische Zahl eingeben, z.B. 'M', 'IX', usw.\n") +
  colors.white(
    "(um zu beenden, bitte 'ciao' eingeben): \n");
const infiniteReadLine = function () {

  rl.question(promptQuestion, function (
    romanNumber) {
    if (romanNumber === 'ciao') {
      log(colors.magenta(figlet.textSync('\nArrivederci! : )', {
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })));

      return rl.close();
    }

    log(colors.yellow(figlet.textSync('\n= Ergebnis =', {
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })));

    log(colors.cyan("Die römische Zahl (deine Eingabe): "));
    log(colors.green(figlet.textSync(romanNumber)));
    log(colors.cyan("\n=> arabische Zahl (das Ergebnis): "));
    const resultArabNumber = convert.romantoarabic(romanNumber);
    resultArabNumber ?
      log(colors.green(figlet.textSync(resultArabNumber))) :
      log(colors.red(
        "Ungülitge Eingabe. Bitte nur gültige römische Zahlen eingeben (Groß- oder Kleinschreibung): I, V, X, L, C, D, M"
      ));
    infiniteReadLine();
  });
};

infiniteReadLine();

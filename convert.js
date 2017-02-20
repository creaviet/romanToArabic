'use strict';

function _toArabNum(romanNumber) {
  if (!romanNumber) {
    return undefined;
  }
  romanNumber = romanNumber.toUpperCase();
  let returnValue = null;
  switch (romanNumber) {
  case 'I':
    returnValue = 1;
    break;
  case 'V':
    returnValue = 5;
    break;
  case 'X':
    returnValue = 10;
    break;
  case 'L':
    returnValue = 50;
    break;
  case 'C':
    returnValue = 100;
    break;
  case 'D':
    returnValue = 500;
    break;
  case 'M':
    returnValue = 1000;
    break;
  default:
    returnValue = undefined;
  }
  return returnValue;
}

function romantoarabic(romanNumber) {
  if (!romanNumber) {
    return undefined;
  }
  let arabNumber = 0;
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    if (isNaN(_toArabNum(romanNumber[i]))) {
      return undefined;
    }
    arabNumber = (_toArabNum(romanNumber[i + 1]) > _toArabNum(romanNumber[i])) ?
      arabNumber - _toArabNum(romanNumber[i]) :
      arabNumber + _toArabNum(romanNumber[i]);
  }
  return arabNumber;
}

module.exports = {
  romantoarabic: romantoarabic
};

//'esversion: 6'
//
var assert = require('assert');
describe('Roman Numbers to Arabic Numbers', function () {
  describe('One letter Numbers and basic inputs', function () {
    describe('Basic numbers', function () {
      it('should return 1 for I', function () {
        assert.equal(1, romantoarabic('I'));
      });
      it('should return 5 for V', function () {
        assert.equal(5, romantoarabic('V'));
      });
      it('should return 10 for X', function () {
        assert.equal(10, romantoarabic('X'));
      });
      it('should return 50 for L', function () {
        assert.equal(50, romantoarabic('L'));
      });
      it('should return 100 for C', function () {
        assert.equal(100, romantoarabic('C'));
      });
      it('should return 500 for D', function () {
        assert.equal(500, romantoarabic('D'));
      });
      it('should return 1000 for M', function () {
        assert.equal(1000, romantoarabic('M'));
      });
    });
    describe('Faulty input', function () {
      it('should return undefined if argument is missing',
        function () {
          assert.equal(undefined, romantoarabic());
        });
      it('should return undefined if argument is null',
        function () {
          assert.equal(undefined, romantoarabic(null));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. t',
        function () {
          assert.equal(undefined, romantoarabic('t'));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. 8',
        function () {
          assert.equal(undefined, romantoarabic('8'));
        });
    });

  });
  describe('Basic Combinations with two letter numbers', function () {
    describe('adding (2nd number is smaller or equal than 1st number)',
      function () {
        it('should return 2 for II', function () {
          assert.equal(2, romantoarabic('II'));
        });
        it('should return 6 for VI', function () {
          assert.equal(6, romantoarabic('VI'));
        });
        it('should return 20 for XX', function () {
          assert.equal(20, romantoarabic('XX'));
        });
        it('should return 60 for LX', function () {
          assert.equal(60, romantoarabic('LX'));
        });
        it('should return 600 for DC', function () {
          assert.equal(600, romantoarabic('DC'));
        });
      });
    describe('subtracting (2nd number is larger than 1st number)',
      function () {
        it('should return 4 for IV', function () {
          assert.equal(4, romantoarabic('IV'));
        });
        it('should return 9 for IX', function () {
          assert.equal(9, romantoarabic('IX'));
        });
        it('should return 40 for XL', function () {
          assert.equal(40, romantoarabic('XL'));
        });
        it('should return 49 for IL', function () {
          assert.equal(49, romantoarabic('IL'));
        });
        it('should return 90 for XC', function () {
          assert.equal(90, romantoarabic('XC'));
        });
        it('should return 900 for CM', function () {
          assert.equal(900, romantoarabic('CM'));
        });
      });
  });
  describe('Basic Combinations with more than two letter numbers', function () {
    it('should return 3 for III', function () {
      assert.equal(3, romantoarabic('III'));
    });
    it('should return 7 for VII', function () {
      assert.equal(7, romantoarabic('VII'));
    });
    it('should return 8 for VIII', function () {
      assert.equal(8, romantoarabic('VIII'));
    });
    it('should return 1984 for MCMLXXXIV', function () {
      assert.equal(1984, romantoarabic('MCMLXXXIV'));
    });
    it('should return 1876 for MDCCCLXXVI', function () {
      assert.equal(1876, romantoarabic('MDCCCLXXVI'));
    });
  });
});

function basicNumber(romanNumber) {
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
    break;
  }
  return returnValue;
}

function romantoarabic(romanNumber) {
  let translatedArabicNumber = null;
  let arabicNumberArray = [];
  let operationsArray = [];
  if (!romanNumber) {
    return undefined;
  }
  let romanNumberLength = romanNumber.length;
  if (romanNumberLength === 1) {
    return basicNumber(romanNumber);
  } else if (romanNumberLength === 2) {
    if (basicNumber(romanNumber[1]) > basicNumber(romanNumber[0])) {
      return basicNumber(romanNumber[1]) - basicNumber(romanNumber[0]);
    }
    return basicNumber(romanNumber[1]) + basicNumber(romanNumber[0]);
  } else if (romanNumberLength > 2) {
    let translatedArabicNumber = 0;
    for (let i = romanNumberLength - 1; i >= 0; i--) {
      if (basicNumber(romanNumber[i + 1]) > basicNumber(romanNumber[i])) {
        translatedArabicNumber -= basicNumber(romanNumber[i]);
      } else {
        translatedArabicNumber += basicNumber(romanNumber[i]);
      }
    }
    return translatedArabicNumber;
  }
}

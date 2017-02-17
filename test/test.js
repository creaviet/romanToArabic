//'esversion: 6'
//
const assert = require('assert');
const convert = require('../convert');

describe('Roman Numbers to Arabic Numbers', function () {
  describe('One letter Numbers and basic inputs', function () {
    describe('Basic numbers', function () {
      it('should return 1 for I', function () {
        assert.equal(1, convert.romantoarabic('I'));
      });
      it('should return 5 for V', function () {
        assert.equal(5, convert.romantoarabic('V'));
      });
      it('should return 10 for X', function () {
        assert.equal(10, convert.romantoarabic('X'));
      });
      it('should return 50 for L', function () {
        assert.equal(50, convert.romantoarabic('L'));
      });
      it('should return 100 for C', function () {
        assert.equal(100, convert.romantoarabic('C'));
      });
      it('should return 500 for D', function () {
        assert.equal(500, convert.romantoarabic('D'));
      });
      it('should return 1000 for M', function () {
        assert.equal(1000, convert.romantoarabic('M'));
      });
    });
    describe('Faulty input', function () {
      it('should return undefined if argument is missing',
        function () {
          assert.equal(undefined, convert.romantoarabic());
        });
      it('should return undefined if argument is null',
        function () {
          assert.equal(undefined, convert.romantoarabic(null));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. t',
        function () {
          assert.equal(undefined, convert.romantoarabic('t'));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. 8',
        function () {
          assert.equal(undefined, convert.romantoarabic('8'));
        });
    });

  });
  describe('Basic Combinations with two letter numbers', function () {
    describe('adding (2nd number is smaller or equal than 1st number)',
      function () {
        it('should return 2 for II', function () {
          assert.equal(2, convert.romantoarabic('II'));
        });
        it('should return 6 for VI', function () {
          assert.equal(6, convert.romantoarabic('VI'));
        });
        it('should return 20 for XX', function () {
          assert.equal(20, convert.romantoarabic('XX'));
        });
        it('should return 60 for LX', function () {
          assert.equal(60, convert.romantoarabic('LX'));
        });
        it('should return 600 for DC', function () {
          assert.equal(600, convert.romantoarabic('DC'));
        });
      });
    describe('subtracting (2nd number is larger than 1st number)',
      function () {
        it('should return 4 for IV', function () {
          assert.equal(4, convert.romantoarabic('IV'));
        });
        it('should return 9 for IX', function () {
          assert.equal(9, convert.romantoarabic('IX'));
        });
        it('should return 40 for XL', function () {
          assert.equal(40, convert.romantoarabic('XL'));
        });
        it('should return 49 for IL', function () {
          assert.equal(49, convert.romantoarabic('IL'));
        });
        it('should return 90 for XC', function () {
          assert.equal(90, convert.romantoarabic('XC'));
        });
        it('should return 900 for CM', function () {
          assert.equal(900, convert.romantoarabic('CM'));
        });
      });
  });
  describe('Basic Combinations with more than two letter numbers', function () {
    it('should return 3 for III', function () {
      assert.equal(3, convert.romantoarabic('III'));
    });
    it('should return 7 for VII', function () {
      assert.equal(7, convert.romantoarabic('VII'));
    });
    it('should return 8 for VIII', function () {
      assert.equal(8, convert.romantoarabic('VIII'));
    });
    it('should return 1984 for MCMLXXXIV', function () {
      assert.equal(1984, convert.romantoarabic('MCMLXXXIV'));
    });
    it('should return 1876 for MDCCCLXXVI', function () {
      assert.equal(1876, convert.romantoarabic('MDCCCLXXVI'));
    });
    it('should return 1712 for MDCCXII', function () {
      assert.equal(1712, convert.romantoarabic('MDCCXII'));
    });
    it('should return 2419 for MMCDXIX', function () {
      assert.equal(2419, convert.romantoarabic('MMCDXIX'));
    });
    it('should return 1234 for MCCXXXIV', function () {
      assert.equal(1234, convert.romantoarabic('MCCXXXIV'));
    });
    it(
      'should return undefined for invalid argument, e.g. M9X XXIV',
      function () {
        assert.equal(undefined, convert.romantoarabic('M9X XXIV'));
      });
  });
});

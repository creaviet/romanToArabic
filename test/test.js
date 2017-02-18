//'esversion: 6'
//
const assert = require('assert');
const convert = require('../convert');

describe('Roman Numbers to Arabic Numbers', function () {
  describe('One letter Numbers and basic inputs', function () {
    describe('Basic numbers', function () {
      it('should return 1 for I', function () {
        assert.strictEqual(1, convert.romantoarabic('I'));
      });
      it('should return 5 for V', function () {
        assert.strictEqual(5, convert.romantoarabic('V'));
      });
      it('should return 10 for X', function () {
        assert.strictEqual(10, convert.romantoarabic('X'));
      });
      it('should return 50 for L', function () {
        assert.strictEqual(50, convert.romantoarabic('L'));
      });
      it('should return 100 for C', function () {
        assert.strictEqual(100, convert.romantoarabic('C'));
      });
      it('should return 500 for D', function () {
        assert.strictEqual(500, convert.romantoarabic('D'));
      });
      it('should return 1000 for M', function () {
        assert.strictEqual(1000, convert.romantoarabic('M'));
      });
    });
    describe('Faulty input', function () {
      it('should return undefined if argument is missing',
        function () {
          assert.strictEqual(undefined, convert.romantoarabic());
        });
      it('should return undefined if argument is null',
        function () {
          assert.strictEqual(undefined, convert.romantoarabic(
            null));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. t',
        function () {
          assert.strictEqual(undefined, convert.romantoarabic('t'));
        });
      it(
        'should return undefined for non-roman-number-letters, e.g. 8',
        function () {
          assert.strictEqual(undefined, convert.romantoarabic('8'));
        });
    });

  });
  describe('Basic Combinations with two letter numbers', function () {
    describe('adding (2nd number is smaller or equal than 1st number)',
      function () {
        it('should return 2 for II', function () {
          assert.strictEqual(2, convert.romantoarabic('II'));
        });
        it('should return 6 for VI', function () {
          assert.strictEqual(6, convert.romantoarabic('VI'));
        });
        it('should return 20 for XX', function () {
          assert.strictEqual(20, convert.romantoarabic('XX'));
        });
        it('should return 60 for LX', function () {
          assert.strictEqual(60, convert.romantoarabic('LX'));
        });
        it('should return 600 for DC', function () {
          assert.strictEqual(600, convert.romantoarabic('DC'));
        });
      });
    describe('subtracting (2nd number is larger than 1st number)',
      function () {
        it('should return 4 for IV', function () {
          assert.strictEqual(4, convert.romantoarabic('IV'));
        });
        it('should return 9 for IX', function () {
          assert.strictEqual(9, convert.romantoarabic('IX'));
        });
        it('should return 40 for XL', function () {
          assert.strictEqual(40, convert.romantoarabic('XL'));
        });
        it('should return 49 for IL', function () {
          assert.strictEqual(49, convert.romantoarabic('IL'));
        });
        it('should return 90 for XC', function () {
          assert.strictEqual(90, convert.romantoarabic('XC'));
        });
        it('should return 900 for CM', function () {
          assert.strictEqual(900, convert.romantoarabic('CM'));
        });
      });
  });
  describe('Basic Combinations with more than two letter numbers', function () {
    it('should return 3 for III', function () {
      assert.strictEqual(3, convert.romantoarabic('III'));
    });
    it('should return 7 for VII', function () {
      assert.strictEqual(7, convert.romantoarabic('VII'));
    });
    it('should return 8 for VIII', function () {
      assert.strictEqual(8, convert.romantoarabic('VIII'));
    });
    it('should return 1984 for MCMLXXXIV', function () {
      assert.strictEqual(1984, convert.romantoarabic('MCMLXXXIV'));
    });
    it('should return 1876 for MDCCCLXXVI', function () {
      assert.strictEqual(1876, convert.romantoarabic('MDCCCLXXVI'));
    });
    it('should return 1712 for MDCCXII', function () {
      assert.strictEqual(1712, convert.romantoarabic('MDCCXII'));
    });
    it('should return 2419 for MMCDXIX', function () {
      assert.strictEqual(2419, convert.romantoarabic('MMCDXIX'));
    });
    it('should return 1234 for MCCXXXIV', function () {
      assert.strictEqual(1234, convert.romantoarabic('MCCXXXIV'));
    });
    it(
      'should return undefined for invalid argument, e.g. M9X XXIV',
      function () {
        assert.strictEqual(undefined, convert.romantoarabic(
          'M9X XXIV'));
      });
  });
});

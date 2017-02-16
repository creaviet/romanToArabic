var assert = require('assert');
describe('Roman Numbers to Arabic Numbers', function () {
  describe('Roman Numbers', function () {
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
  describe('Basic Combinations', function () {
    it('should return 2 for II', function () {
      assert.equal(2, romantoarabic('II'));
    });
  });
});

function romantoarabic(romanNumber) {
  if (romanNumber === 'I') {
    return 1;
  }
  if (romanNumber === 'V') {
    return 5;
  }
  if (romanNumber === 'X') {
    return 10;
  }
  if (romanNumber === 'L') {
    return 50;
  }
  if (romanNumber === 'C') {
    return 100;
  }
  if (romanNumber === 'D') {
    return 500;
  }
  return 1000;
}

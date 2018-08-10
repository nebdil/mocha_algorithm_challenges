let algo = require('../app.js');
let assert = require('assert');

describe('Algorithms', function() {

  describe('CheckNums', function() {
    it('should return true', function() {
      assert.equal(true, algo.CheckNums('+d+=3=+s+'));
    });
    it('should return false', function() {
      assert.equal(false, algo.CheckNums('f++d+'));
    });
  })



  Input:3 & num2 = 122

  Output:"true"

  Input:67 & num2 = 67

  Output:"-1"



  describe('SimpleSymbols', function() {
    it('should return true', function() {
      assert.equal(true, algo.SimpleSymbols('+d+=3=+s+'));
    });
    it('should return false', function() {
      assert.equal(false, algo.SimpleSymbols('f++d+'));
    });
  });

  describe('Longest word in a string', function() {
    it('should return the first longest word in a string, ignores special characters', function() {
      assert.equal('time', algo.LongestWord('fun&!! time'));
    });
    it('should return the first longest word in a string, ignores special characters', function() {
      assert.equal('love', algo.LongestWord('I love dogs'));
    });
  });

  describe('factorial', function() {
    it('should return 24', function() {
      assert.equal(24, algo.FirstFactorial(4));
    });
    it('should return 40320', function() {
      assert.equal(40320, algo.FirstFactorial(8));
    });
  });

  describe('reverse', function() {
    it('should return etybredoc', function() {
      assert.equal('etybredoc', algo.FirstReverse('coderbyte'));
    });
    it('should return I Love Code', function() {
      assert.equal('I Love Code', algo.FirstReverse('edoC evoL I'));
    });
  });

  describe('modified string', function() {
    it('should return Ifmmp*3', function() {
      assert.equal('Ifmmp*3', algo.LetterChanges('hello*3'));
    });
    it('should return gvO Ujnft!', function() {
      assert.equal('gvO Ujnft!', algo.LetterChanges('fun times!'));
    });
  });

  describe('SimpleAdding', function() {
    it('should return 78', function() {
      assert.equal('78', algo.SimpleAdding('12'));
    });
    it('should return 9870', function() {
      assert.equal('9870', algo.SimpleAdding('140'));
    });
  });

  describe('LetterCapitalize', function() {
    it('should return Hello World', function() {
      assert.equal('Hello World', algo.LetterCapitalize('hello world'));
    });
    it('should return I Ran There', function() {
      assert.equal('I Ran There', algo.LetterCapitalize('i ran there'));
    });
  });

});

let algo = require('../app.js');
let assert = require('assert');

describe('Algorithms', function() {

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

});

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when a = 1.4 and b = 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal (6);
    });

    it('should return 0 when a = 1.4 and b = -1.4', function() {
      expect(calculateNumber('SUM', 1.4, -1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when a = 4 and b = 5', function() {
      expect(calculateNumber('SUBTRACT', 4, 5)).to.equal(-1);
    });

    it('should return 2 when a = 4.5 and b = 3.1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 1.9)).to.equal(2);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when a = 1.4 and b = 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.eaqual(0.2);
    });

    it('should return "Error" when a = 1.4 and b = 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when rounded b is 0', function() {
     expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });
});

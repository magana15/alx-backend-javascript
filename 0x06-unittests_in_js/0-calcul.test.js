const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
	it('it should return 4 when a =1 and b = 3',function() {
	assert.strictEqual(calculateNumber(1, 3),4);
	});

	it('should return 5 when a =1 and b = 3.7', function(){
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('should return 5 when a = 1.2 and b = 3.7', function(){
		assert.strictEqual(calculateNumber(1.2, 3.7),5);
	});
});

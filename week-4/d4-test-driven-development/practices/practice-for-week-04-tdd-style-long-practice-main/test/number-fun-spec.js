const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const { returnsThree } = require('../problems/number-fun')
<<<<<<< HEAD
// const { reciprocal } = require('./problems/number-fun')
=======
const { reciprocal } = require('../problems/number-fun')
>>>>>>> b0a7204c8e2932d365eb45a4037b19bfe6be9704

describe("returnsThree()", () => {
    it("should return the number 3", () => {
        let test1 = 3;
        let test2 = 4;
        let test3 = 6;
        assert.strictEqual(returnsThree(test1), 3)
        assert.strictEqual(returnsThree(test2), 3)
        assert.strictEqual(returnsThree(test3), 3)
    })
})
<<<<<<< HEAD
=======

describe('reciprocal(n)', () => {
    it('should return the reciprocal of n', () => {
        let test1 = 4;
        let test2 = 7;
        let test3 = 11;
        assert.strictEqual(reciprocal(test1), 1 / 4);
        assert.strictEqual(reciprocal(test2), 1 / 7);
        assert.strictEqual(reciprocal(test3), 1 / 11);
    })

    it('n cannot be less than 1', () => {
        let test1 = 0;
        let test2 = -5;
        assert.strictEqual(reciprocal(test1),)
    })
    it('n cannot be greater than 1,000,000', () => {
        let test1 = 1111111;
        let test2 = 1000001;

    })
})
>>>>>>> b0a7204c8e2932d365eb45a4037b19bfe6be9704

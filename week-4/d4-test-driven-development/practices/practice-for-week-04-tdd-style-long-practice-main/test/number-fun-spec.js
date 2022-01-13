const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const { returnsThree } = require('../problems/number-fun')
// const { reciprocal } = require('./problems/number-fun')

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

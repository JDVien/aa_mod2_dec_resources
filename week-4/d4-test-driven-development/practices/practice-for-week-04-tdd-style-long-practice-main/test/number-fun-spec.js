const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

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

describe('reciprocal(n)', () => {
    it('should return the reciprocal of n', () => {
        let test1 = 4;
        let test2 = 7;
        let test3 = 11;
        const actual1 = reciprocal(test1);
        const expected1 = 1 / test1;
        const actual2 = reciprocal(test2);
        const expected2 = 1 / test2;
        const actual3 = reciprocal(test3);
        const expected3 = 1 / test3;

        expect(actual1).to.eql(expected1);
        expect(actual2).to.eql(expected2);
        expect(actual3).to.eql(expected3);

    })

    it('n cannot be less than 1', () => {
        let test1 = 5;
        let test2 = -5;

        expect(() => reciprocal(test2)).to.throw(TypeError);


        //     it('n cannot be greater than 1,000,000', () => {
        //         let test1 = 1111111;
        //         let test2 = 1000001;

    })
})

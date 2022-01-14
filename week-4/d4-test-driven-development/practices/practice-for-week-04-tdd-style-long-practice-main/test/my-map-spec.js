const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const spies = require("chai-spies");
chai.use(spies);
const { myMap } = require("../problems/my-map");
beforeEach (() => {
    const test = [1, 2, 3 ]
})
describe('myMap(inputArray, callback)', () => {
    it('should not mutate the passed-in array argument', () => {
        const test = [1, 2, 3];
        const testB = [7,6,5,4];
        const callback = (element) => element * 2;
        const actual1 = myMap(test, callback); // [2,4,6]
        const expect1 = test;

        //  assert.deepEqual(myMap(test, callback), [1,2,3]);

        expect(test).to.eql([1,2,3]); // this will fail with the changes I made to the myMap function
    })

    it('should not call the built-in Array.map', () => {
        chai.spy.on(myMap);
    })
})

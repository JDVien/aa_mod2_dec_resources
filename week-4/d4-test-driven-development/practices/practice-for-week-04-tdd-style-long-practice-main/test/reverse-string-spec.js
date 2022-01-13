const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const { reverseString } = require('../problems/reverse-string')

describe('reverseString(str)', () => {
    it('should return a string', () => {
        assert.strictEqual(typeof reverseString('jason'), 'string')
    })
    it('should return input string reversed', () => {
        let test1 = 'jae'
        let test2 = 'this is a string'
        assert.strictEqual(reverseString(test1), 'eaj')
        assert.strictEqual(reverseString(test2), 'gnirts a si siht')
    })
});

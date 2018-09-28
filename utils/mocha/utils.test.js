const expect = require('chai').expect

const utils = require('../utils')

describe('Utils', () => {
    it('should add two numbers', () => {
        const res = utils.add(33, 11)

        expect(res).to.equal(44)
    })
})
const chai = require('chai');
const expect = chai.expect;

describe('simple test', () => {
    it('should return number 4', () => {
        expect(2+2).to.equal(4);
    });
});
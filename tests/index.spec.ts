const { Start } = require('../src/index');
const { expect } = require('chai');
require('mocha')

describe('First test', 
    () => { 
        it('should return valid value', () => {
        const result = Start('test');
        expect(result).to.equal('Hello test'); 
    }); 
});
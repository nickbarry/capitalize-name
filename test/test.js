const expect = require('chai').expect;
const capitalizeName = require('../index');

describe('Input validation', () => {
  it('Should require the input to be a string', () => {
    expect(capitalizeName(4)).to.be.an('error');
  });

  /*
  it('', () => {

  });

  */
});

/*
describe('Name capitalization', () => {

});
*/
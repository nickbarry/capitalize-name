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

/*
More test cases / edge cases / etc.
Should always return a string of the same length

 McSweeney
 MacArthur
 diGiorno
 d'Giorno
 di Giorno
 D'Giorno
 DiGiorno
 de los Riesgo
 Harper-Smith
 III (not Iii)
 All-caps org names, e.g. RESULTS
 look up article on name capitalization exceptions
 ballot items as well
 */
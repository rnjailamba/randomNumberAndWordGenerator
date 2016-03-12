var should = require('chai').should(),
    random = require('../index'),
    randomStringGenerator = random.randomStringGenerator,
    randomNumberGenerator = random.randomNumberGenerator,
    randomWordGenerator = random.randomWordGenerator,
    chaiHttp = require('chai-http');
var chai = require('chai');


chai.use(chaiHttp);

describe('Blobs', function() {

  it('gets random number of required length;', function() {
   randomNumberGenerator(30).should.have.length(30);
  });
  it('gets random word of required length;', function() {
    randomWordGenerator(30).should.have.length(30);
  });
  it('gets random string of required length;', function() {
   randomStringGenerator(30).should.have.length(30);
  });


  it('gets random number of required length;', function() {
   randomNumberGenerator(-30).should.have.length(1);
  });
  it('gets random word of required length;', function() {
   randomWordGenerator(-30).should.have.length(1);
  });
  it('gets random string of required length;', function() {
   randomStringGenerator(-30).should.have.length(1);
  });

 
});


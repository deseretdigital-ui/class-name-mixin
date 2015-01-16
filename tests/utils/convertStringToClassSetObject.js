var convertStringToClassSetObject = require('../../src/utils/convertStringToClassSetObject.js');

describe('convertStringToClassSetObject', function() {

  it('should return "block block--modifier" as {block: true, block--modifier: true}', function() {
    convertStringToClassSetObject('block block--modifier')
      .should.eql(
        {
          'block': true,
          'block--modifier': true
        }
      );
  });

});

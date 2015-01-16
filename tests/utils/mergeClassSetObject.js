var mergeClassSetObjects = require('../../src/utils/mergeClassSetObjects.js');

describe('mergeClassSetObjects', function() {
  it('should merge two objects together', function() {
    var a = {
      'bananas': true,
      'monkeys': false,
    };

    var b = {
      'board games': true,
      'video games': false
    }

    var expected = {
      'bananas': true,
      'monkeys': false,
      'board games': true,
      'video games': false
    };

    mergeClassSetObjects(a, b).should.eql(expected);
  });

  it('will overwrite duplicate keys in the first object', function() {
    var a = {
      'bananas': true,
      'monkeys': false,
    };

    var b = {
      'bananas': false
    }

    var expected = {
      'bananas': false,
      'monkeys': false
    };

    mergeClassSetObjects(a, b).should.eql(expected);
  });
});

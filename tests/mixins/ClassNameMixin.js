var ClassNameMixin = require('../../src/mixins/ClassNameMixin.jsx');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = global.document.parentWindow;

describe('ClassNameMixin', function() {
  describe('getCombinedClassNames', function() {

    var TestClass = React.createClass({
      mixins: [ClassNameMixin],

      render: function() {
        return React.createElement('div');
      }
    });

    it('should return the passed in string as a classSet string when no className prop', function() {
      var testComponent = TestUtils.renderIntoDocument(
        React.createElement(TestClass)
      );
      var resultingClasses = testComponent.getCombinedClassNames('block block--modifier');
      resultingClasses.should.be.exactly('block block--modifier');
    });

    it('should return the passed in object as a classSet string when no className prop', function() {
      var testComponent = TestUtils.renderIntoDocument(
        React.createElement(TestClass)
      );
      var resultingClasses = testComponent.getCombinedClassNames(
        {'block': true, 'block--modifier': true}
      );
      resultingClasses.should.be.exactly('block block--modifier');
    });

    it('should return the passed in string plus the className prop string as a classSet string', function() {
      var testComponent = TestUtils.renderIntoDocument(
        React.createElement(TestClass, {className: 'custom custom--modifier'})
      );
      var resultingClasses = testComponent.getCombinedClassNames('block block--modifier');
      resultingClasses.should.be.exactly('block block--modifier custom custom--modifier');
    });

    it('should return the passed in string plus the className prop object as a classSet string', function() {
      var testComponent = TestUtils.renderIntoDocument(
        React.createElement(TestClass, {className: {'custom': true, 'custom--modifier': true}})
      );
      var resultingClasses = testComponent.getCombinedClassNames('block block--modifier');
      resultingClasses.should.be.exactly('block block--modifier custom custom--modifier');
    });

    it('should return the passed in string minus the classes from the className prop object with values of false as a classSet string', function() {
      var testComponent = TestUtils.renderIntoDocument(
        React.createElement(TestClass, {className: {'block--modifier': false}})
      );
      var resultingClasses = testComponent.getCombinedClassNames('block block--modifier');
      resultingClasses.should.be.exactly('block');
    });

  });

  describe('convertStringToClassSetObject', function() {

    it('should return "block block--modifier" as {block: true, block--modifier: true}', function() {
      ClassNameMixin.convertStringToClassSetObject('block block--modifier')
        .should.eql(
          {
            'block': true,
            'block--modifier': true
          }
        );
    });

  });
});

var ClassNameMixin = require('../../src/mixins/ClassNameMixin.jsx');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = global.document.parentWindow;

describe('ClassNameMixin', function() {
  describe('getClassName', function() {

    describe('without getComponentClassName', function() {
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

        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('block block--modifier');
      });

      it('should return the passed in object as a classSet string when no className prop', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(TestClass)
        );
        var resultingClasses = testComponent.getClassName(
          {'block': true, 'block--modifier': true}
        );
        resultingClasses.should.be.exactly('block block--modifier');
      });

      it('should return the passed in string plus the className prop string as a classSet string', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(TestClass, {className: 'custom custom--modifier'})
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('block block--modifier custom custom--modifier');
      });

      it('should return the passed in string plus the className prop object as a classSet string', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(TestClass, {className: {'custom': true, 'custom--modifier': true}})
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('block block--modifier custom custom--modifier');
      });

      it('should return the passed in string minus the classes from the className prop object with values of false as a classSet string', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(TestClass, {className: {'block--modifier': false}})
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('block');
      });
    });

    describe('with getComponentClassName', function() {
      var testComponentWithGetComponentClassName = React.createClass({
        mixins: [ClassNameMixin],

        render: function() {
          return React.createElement('div');
        },

        getComponentClassName: function() {
          return {
            'component-class': true,
            'component-class--modifier': true,
            'component-class--another-modifier': false
          };
        }
      });

      it('should return the classes from getComponentClassName when no props and no arguments', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(testComponentWithGetComponentClassName)
        );

        var resultingClasses = testComponent.getClassName();
        resultingClasses.should.be.exactly('component-class component-class--modifier');
      });

      it('should return the classes from getComponentClassName merged with the arguments (no props)', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(testComponentWithGetComponentClassName)
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');

        resultingClasses.should.be.exactly('component-class component-class--modifier block block--modifier');
      });

      it('should return the classes from getComponentClassName merged with the props (no arguments)', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(testComponentWithGetComponentClassName, {className: 'custom custom--modifier'})
        );
        var resultingClasses = testComponent.getClassName();
        resultingClasses.should.be.exactly('component-class component-class--modifier custom custom--modifier');
      });

      it('should return the classes from getComponentClassName merged with arguments and props', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(testComponentWithGetComponentClassName, {className: {'custom': true, 'custom--modifier': true}})
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('component-class component-class--modifier block block--modifier custom custom--modifier');
      });

      it('should allow props to override both getComponentClassName and arguments passed to getClassName', function() {
        var testComponent = TestUtils.renderIntoDocument(
          React.createElement(testComponentWithGetComponentClassName, {
            className: {
              'block--modifier': false,
              'component-class--modifier': false,
              'component-class--another-modifier': true
            }
          })
        );
        var resultingClasses = testComponent.getClassName('block block--modifier');
        resultingClasses.should.be.exactly('component-class component-class--another-modifier block');
      });
    });
  });
});

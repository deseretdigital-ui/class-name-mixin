var React = require('react/addons');
var convertStringToClassSetObject = require('../utils/convertStringToClassSetObject');
var mergeClassSetObjects = require('../utils/mergeClassSetObjects');

var ClassNameMixin = {
  propTypes: {
    'className': React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ])
  },

  getDefaultProps: function() {
    return {
      'className': {}
    };
  },

  getClassName: function(className) {
    if (className === undefined) {
      className = {};
    }

    if (typeof className === 'string') {
      className = convertStringToClassSetObject(className)
    }

    var propClassName = this.props.className;
    if (typeof propClassName === 'string') {
      propClassName = convertStringToClassSetObject(propClassName)
    }

    var componentClassName = {};
    if (typeof this.getComponentClassName === 'function') {
      componentClassName = this.getComponentClassName();

      if (typeof componentClassName === 'string') {
        componentClassName = convertStringToClassSetObject(componentClassName)
      }
    }

    var mergedClassName = mergeClassSetObjects(componentClassName, className);
    mergedClassName = mergeClassSetObjects(mergedClassName, propClassName);

    return React.addons.classSet(mergedClassName);
  }
};

module.exports = ClassNameMixin;

var React = require('react/addons');

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

  getCombinedClassNames: function(classNames) {
    if (classNames === undefined) {
      classNames = {};
    }

    if (typeof classNames === 'string') {
      classNames = this.convertStringToClassSetObject(classNames)
    }

    var propClassNames = this.props.className;
    if (typeof propClassNames === 'string') {
      propClassNames = this.convertStringToClassSetObject(propClassNames)
    }

    for (className in propClassNames ) {
      if (propClassNames.hasOwnProperty(className)) {
        classNames[className] = propClassNames[className];
      }
    }

    return React.addons.classSet(classNames);
  },

  convertStringToClassSetObject: function(classNames) {
    var classSetObject = {};

    classNames.split(' ').forEach(function(className) {
      classSetObject[className] = true;
    });

    return classSetObject;
  }
};

module.exports = ClassNameMixin;

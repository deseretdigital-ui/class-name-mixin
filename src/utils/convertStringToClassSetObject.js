module.exports = function(classNames) {
  var classSetObject = {};

  classNames.split(' ').forEach(function(className) {
    classSetObject[className] = true;
  });

  return classSetObject;
};

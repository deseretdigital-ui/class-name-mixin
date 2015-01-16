module.exports = function(baseObject, objectToMerge) {
  var clonedObject = JSON.parse(JSON.stringify(baseObject));

  for (className in objectToMerge ) {
    if (objectToMerge.hasOwnProperty(className)) {
      clonedObject[className] = objectToMerge[className];
    }
  }

  return clonedObject;
};

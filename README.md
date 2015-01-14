# ClassNameMixin

Mixin to easily bring in ClassNames from props.

## Example

```js
  var ExampleComponent = React.createClass({
    mixins: [ClassNameMixin],

    render: function() {
      return (
        <div className={this.getCombinedClassNames('example-component')}>
          This is our example!
        </div>
      );
    }
  });

  React.render(
    <ExampleComponent className="custom-block custom-block--modifier" />,
    document.getElementById('classNameMixinExample')
  );
```

### Output

```html
<div class="example-component custom-block custom-block--modifier">
  This is our example!
</div>
```

## Properties

The mixin adds the following properties:

  * className

### className

__Type:__ string or classSet object
__Default:__ `{}`

Additional class names to add to be merged in to the arguments passed to getCombinedClassNames

#### String

A simple string of classes to add to the component.

```js
React.render(
  <ExampleComponent className="custom-block custom-block--modifier" />,
  document.getElementById('classNameMixinExample')
);
```

#### classSet Object

An object with class names as keys with a value of true or false. All keys with the value of true will be added to the component. All keys with the value of false will be removed from the component.

```js
React.render(
  <ExampleComponent className={{'custom-block': true, 'custom-block--modifier': true}} />,
  document.getElementById('classNameMixinExample')
);
```

## Methods

The mixin adds the following methods:

  * getCombinedClassNames
  * convertStringToClassSetObject

### getCombinedClassNames

__Arguments:__

  * classNames - string | object

__Return:__ string

Accepts a string of a classSet object as an argument. Returns a string of the computed classes.

This method combines the passed in classNames to the method with the classNames set in the props and then returns a string of space delimited class names to be used in a classNames attribute.

#### Example

```js
  render: function() {
    return (
      <div className={this.getCombinedClassNames('example-component')}>
        This is our example!
      </div>
    );
  }
```

### object convertStringToClassSetObject(string classNames)

__Arguments:__

  * classNames - string

__Return:__ object

Accepts a string as an argument. Returns a classSet object.

Helper method to convert a space delimited string into a classSet object.

Used by getCombinedClassNames and should not need to be called manually in your own code.

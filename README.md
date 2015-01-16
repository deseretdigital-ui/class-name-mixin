# ClassNameMixin

Mixin to easily bring in ClassNames from props.

## Example

```js
  var ExampleComponent = React.createClass({
    mixins: [ClassNameMixin],

    render: function() {
      if (this.state.renderAsCollapsible) {
        return this.renderAsCollapsible();
      } else {
        return this.renderAsDropdown();
      }
    },

    renderAsDropdown: function() {
      return (
        <div className={this.getClassName('example-component--dropdown')}>
          This is our collapsible example!
        </div>
      );
    },

    renderAsCollapsible: function() {
      return (
        <div className={this.getClassName('example-component--collapsible')}>
          This is our dropdown example!
        </div>
      );
    },

    getComponentClassName: function() {
      return 'example-component';
    }
  });

  React.render(
    <ExampleComponent className="custom-class" />,
    document.getElementById('classNameMixinExample')
  );
```

### Output

#### Collapsible

```html
<div class="example-component example-component--collapsible custom-class">
  This is our collapsible example!
</div>
```

#### Dropdown

```html
<div class="example-component example-component--dropdown custom-class">
  This is our dropdown example!
</div>
```

## Mixin Properties

The mixin adds the following properties:

  * className

### className

__Type:__ string or classSet object
__Default:__ `{}`

Additional class names to add to be merged in to the arguments passed to getClassName

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

## Mixin Methods

The mixin adds the following methods:

  * getClassName

### getClassName

__Arguments:__

  * className - string | object OPTIONAL

__Return:__ string

Accepts a string of a classSet object as an argument. Returns a string of the computed classes.

This method merges the class names from getComponentClassName, the className argument, and the className property. In the case of duplicate class names, the className argument beats getComponentClassName and the className property beats both. A string of space delimited class names is returned to be used in a React className attribute.

## Optional Component Methods

The mixin looks for the following component methods and uses them if defined:

  * getComponentClassName

### getComponentClassName

__Return:__ string | object

This method should be used to return either a string or classSet object of default classes for the component. This method is called automatically by getClassName and has the argument from getClassName and this.props.className merged into it.

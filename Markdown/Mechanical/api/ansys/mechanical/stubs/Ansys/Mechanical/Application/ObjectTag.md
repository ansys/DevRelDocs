# ObjectTag

### *class* ObjectTag

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> An instance of an ObjectTag.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddObject`](#ObjectTag.AddObject)       | Add an object to this tag.       |
|-------------------------------------------|----------------------------------|
| [`RemoveObject`](#ObjectTag.RemoveObject) | Remove an object from this tag.  |
| [`ClearObjects`](#ObjectTag.ClearObjects) | Clear all objects from this tag. |

### Properties

| [`Name`](#ObjectTag.Name)       | The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.   |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Objects`](#ObjectTag.Objects) | The list of objects which use this tag.                                                                                                                    |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Application import ObjectTag
```

## Property detail

### *property* ObjectTag.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.

<!-- !! processed by numpydoc !! -->

### *property* ObjectTag.Objects *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

The list of objects which use this tag.

<!-- !! processed by numpydoc !! -->

## Method detail

### ObjectTag.AddObject(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Add an object to this tag.

<!-- !! processed by numpydoc !! -->

### ObjectTag.RemoveObject(obj: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Remove an object from this tag.

<!-- !! processed by numpydoc !! -->

### ObjectTag.ClearObjects()

Clear all objects from this tag.

<!-- !! processed by numpydoc !! -->

# `ObjectTag`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.ObjectTag"></a>

#### *class* Ansys.Mechanical.Application.ObjectTag(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

An instance of an ObjectTag.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------|----------------------------------|
| [`AddObject`](#ObjectTag.AddObject)       | Add an object to this tag.       |
| [`ClearObjects`](#ObjectTag.ClearObjects) | Clear all objects from this tag. |
| [`RemoveObject`](#ObjectTag.RemoveObject) | Remove an object from this tag.  |
| [`ToString`](#ObjectTag.ToString)         | ToString method.                 |

### Properties

| Name | Description |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Name`](#ObjectTag.Name)       | The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.   |
| [`Objects`](#ObjectTag.Objects) | The list of objects which use this tag.                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="ObjectTag.Name"></a>

### *property* ObjectTag.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the tag. If the tag exists in ObjectTags, attempting to set the name to a value of another tag in that collection will lead to an exception.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTag.Objects"></a>

### *property* ObjectTag.Objects *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

The list of objects which use this tag.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ObjectTag.AddObject"></a>

### ObjectTag.AddObject(obj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Add an object to this tag.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTag.ClearObjects"></a>

### ObjectTag.ClearObjects() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear all objects from this tag.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTag.RemoveObject"></a>

### ObjectTag.RemoveObject(obj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove an object from this tag.

<!-- !! processed by numpydoc !! -->

<a id="ObjectTag.ToString"></a>

### ObjectTag.ToString() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

ToString method.

<!-- !! processed by numpydoc !! -->


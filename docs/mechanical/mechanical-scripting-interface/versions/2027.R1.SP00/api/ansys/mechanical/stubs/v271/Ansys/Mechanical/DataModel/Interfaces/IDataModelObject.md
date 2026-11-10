# `IDataModelObject`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject"></a>

#### *class* Ansys.Mechanical.DataModel.Interfaces.IDataModelObject

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------|------------------------------|
| [`Accept`](#IDataModelObject.Accept)   | Accept method.               |
| [`Equals`](#IDataModelObject.Equals)   | Equals method.               |
| [`GetPath`](#IDataModelObject.GetPath) | Gets the path of the object. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|------------------------------------------------------------------|
| [`DataModelObjectCategory`](#IDataModelObject.DataModelObjectCategory)   | Gets the name of the current DataModelObject's category.         |
| [`GroupingFolder`](#IDataModelObject.GroupingFolder)                     | GroupingFolder property.                                         |
| [`InternalObject`](#IDataModelObject.InternalObject)                     | InternalObject property.                                         |
| [`Name`](#IDataModelObject.Name)                                         | Gets the name of the object.                                     |
| [`ObjectId`](#IDataModelObject.ObjectId)                                 | Gets the internal id of the object.                              |
| [`ObjectState`](#IDataModelObject.ObjectState)                           | ObjectState property.                                            |
| [`ObjectTags`](#IDataModelObject.ObjectTags)                             | Gets an IEnumerable object of the tags that 'this' is a part of. |
| [`Parent`](#IDataModelObject.Parent)                                     | Gets the parent object.                                          |

<a id="property-detail"></a>

## Property detail

<a id="IDataModelObject.DataModelObjectCategory"></a>

### *property* IDataModelObject.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the name of the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.GroupingFolder"></a>

### *property* IDataModelObject.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.InternalObject"></a>

### *property* IDataModelObject.InternalObject *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalObject property.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.Name"></a>

### *property* IDataModelObject.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the name of the object.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.ObjectId"></a>

### *property* IDataModelObject.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal id of the object.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.ObjectState"></a>

### *property* IDataModelObject.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.ObjectTags"></a>

### *property* IDataModelObject.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets an IEnumerable object of the tags that 'this' is a part of.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.Parent"></a>

### *property* IDataModelObject.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the parent object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IDataModelObject.Accept"></a>

### IDataModelObject.Accept(visitor: Ansys.Mechanical.DataModel.Interfaces.IDataModelObjectVisitor) → [None](https://docs.python.org/3/builtins/constants.html#None)

Accept method.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.Equals"></a>

### IDataModelObject.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.GetPath"></a>

### IDataModelObject.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets the path of the object.

<!-- !! processed by numpydoc !! -->


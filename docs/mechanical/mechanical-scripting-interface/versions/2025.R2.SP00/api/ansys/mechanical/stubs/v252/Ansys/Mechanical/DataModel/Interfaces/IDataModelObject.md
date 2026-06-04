# `IDataModelObject`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject"></a>

#### *class* Ansys.Mechanical.DataModel.Interfaces.IDataModelObject

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------|--------------------------------|
| [`GetPath`](#IDataModelObject.GetPath)   | Gets the path of the object.   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|------------------------------------------------------------------|
| [`DataModelObjectCategory`](#IDataModelObject.DataModelObjectCategory)   | Gets the name of the current DataModelObject’s category.         |
| [`Name`](#IDataModelObject.Name)                                         | Gets the name of the object.                                     |
| [`ObjectId`](#IDataModelObject.ObjectId)                                 | Gets the internal id of the object.                              |
| [`ObjectTags`](#IDataModelObject.ObjectTags)                             | Gets an IEnumerable object of the tags that ‘this’ is a part of. |
| [`Parent`](#IDataModelObject.Parent)                                     | Gets the parent object.                                          |

<a id="property-detail"></a>

## Property detail

<a id="IDataModelObject.DataModelObjectCategory"></a>

### *property* IDataModelObject.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.Name"></a>

### *property* IDataModelObject.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the object.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.ObjectId"></a>

### *property* IDataModelObject.ObjectId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal id of the object.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.ObjectTags"></a>

### *property* IDataModelObject.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets an IEnumerable object of the tags that ‘this’ is a part of.

<!-- !! processed by numpydoc !! -->

<a id="IDataModelObject.Parent"></a>

### *property* IDataModelObject.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the parent object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IDataModelObject.GetPath"></a>

### IDataModelObject.GetPath() → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the path of the object.

<!-- !! processed by numpydoc !! -->


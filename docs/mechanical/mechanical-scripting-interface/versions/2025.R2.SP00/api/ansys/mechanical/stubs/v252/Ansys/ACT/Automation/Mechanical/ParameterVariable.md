# `ParameterVariable`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ParameterVariable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ParameterVariable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ParameterVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ParameterVariable.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ParameterVariable.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ParameterVariable.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ParameterVariable.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ParameterVariable.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ParameterVariable.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ParameterVariable.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ParameterVariable.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ParameterVariable.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ParameterVariable.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ParameterVariable.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ParameterVariable.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ParameterVariable.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ParameterVariable.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ParameterVariable.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ParameterVariable.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ParameterVariable.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ParameterVariable.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ParameterVariable.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ParameterVariable.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ParameterVariable.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ParameterVariable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ParameterVariable.Children"></a>

### *property* ParameterVariable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Comments"></a>

### *property* ParameterVariable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.DataModelObjectCategory"></a>

### *property* ParameterVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Figures"></a>

### *property* ParameterVariable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Images"></a>

### *property* ParameterVariable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.InternalObject"></a>

### *property* ParameterVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Properties"></a>

### *property* ParameterVariable.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.VisibleProperties"></a>

### *property* ParameterVariable.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ParameterVariable.Activate"></a>

### ParameterVariable.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddComment"></a>

### ParameterVariable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddFigure"></a>

### ParameterVariable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddImage"></a>

### ParameterVariable.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CopyTo"></a>

### ParameterVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CreateParameter"></a>

### ParameterVariable.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Duplicate"></a>

### ParameterVariable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetChildren"></a>

### ParameterVariable.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetParameter"></a>

### ParameterVariable.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupAllSimilarChildren"></a>

### ParameterVariable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupSimilarObjects"></a>

### ParameterVariable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByAPIName"></a>

### ParameterVariable.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByName"></a>

### ParameterVariable.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.RemoveParameter"></a>

### ParameterVariable.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


# `Convergence`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.Convergence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Convergence.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Convergence.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Convergence.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Convergence.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Convergence.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Convergence.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Convergence.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Convergence.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Convergence.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Convergence.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Convergence.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Convergence.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Convergence.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Convergence.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Convergence.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Convergence.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AllowableChange`](#Convergence.AllowableChange)                 | Gets or sets the AllowableChange.                             |
| [`Children`](#Convergence.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Convergence.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Convergence.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Convergence.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Convergence.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Convergence.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsConverged`](#Convergence.IsConverged)                         | Gets the IsConverged.                                         |
| [`LastChange`](#Convergence.LastChange)                           | Gets the LastChange.                                          |
| [`Properties`](#Convergence.Properties)                           | Gets the list of properties for this object.                  |
| [`Type`](#Convergence.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#Convergence.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Convergence.AllowableChange"></a>

### *property* Convergence.AllowableChange *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowableChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Children"></a>

### *property* Convergence.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Comments"></a>

### *property* Convergence.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.DataModelObjectCategory"></a>

### *property* Convergence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Figures"></a>

### *property* Convergence.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Images"></a>

### *property* Convergence.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.InternalObject"></a>

### *property* Convergence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConvergenceAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IsConverged"></a>

### *property* Convergence.IsConverged *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsConverged.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.LastChange"></a>

### *property* Convergence.LastChange *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Properties"></a>

### *property* Convergence.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Type"></a>

### *property* Convergence.Type *: [Ansys.Mechanical.DataModel.Enums.ConvergenceType](../../../../Mechanical/DataModel/Enums/ConvergenceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.VisibleProperties"></a>

### *property* Convergence.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Convergence.Activate"></a>

### Convergence.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddComment"></a>

### Convergence.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddFigure"></a>

### Convergence.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddImage"></a>

### Convergence.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CopyTo"></a>

### Convergence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CreateParameter"></a>

### Convergence.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Delete"></a>

### Convergence.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Duplicate"></a>

### Convergence.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetChildren"></a>

### Convergence.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetParameter"></a>

### Convergence.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupAllSimilarChildren"></a>

### Convergence.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupSimilarObjects"></a>

### Convergence.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByAPIName"></a>

### Convergence.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByName"></a>

### Convergence.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.RemoveParameter"></a>

### Convergence.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


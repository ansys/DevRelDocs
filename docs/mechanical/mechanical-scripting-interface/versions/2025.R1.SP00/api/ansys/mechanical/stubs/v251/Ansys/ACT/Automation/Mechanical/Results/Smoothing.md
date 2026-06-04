# `Smoothing`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.Smoothing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.Smoothing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Smoothing.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Smoothing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Smoothing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Smoothing.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Smoothing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Smoothing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Smoothing.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Smoothing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Evaluate`](#Smoothing.Evaluate)                               | Run the Evaluate action.                                                          |
| [`GetChildren`](#Smoothing.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Smoothing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Smoothing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Smoothing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`ImportSTL`](#Smoothing.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`PropertyByAPIName`](#Smoothing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Smoothing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Smoothing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Smoothing.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Smoothing.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Smoothing.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ExportModel`](#Smoothing.ExportModel)                         | Gets or sets the ExportModel.                                 |
| [`Figures`](#Smoothing.Figures)                                 | Gets the list of associated figures.                          |
| [`FileName`](#Smoothing.FileName)                               | Gets the FileName.                                            |
| [`Images`](#Smoothing.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Smoothing.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#Smoothing.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`MoveLimit`](#Smoothing.MoveLimit)                             | Gets or sets the MoveLimit.                                   |
| [`Properties`](#Smoothing.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Smoothing.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#Smoothing.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Statistics`](#Smoothing.Statistics)                           | Gets the Statistics.                                          |
| [`Suppressed`](#Smoothing.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Smoothing.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Smoothing.Children"></a>

### *property* Smoothing.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Comments"></a>

### *property* Smoothing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.DataModelObjectCategory"></a>

### *property* Smoothing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ExportModel"></a>

### *property* Smoothing.ExportModel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportModel.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Figures"></a>

### *property* Smoothing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.FileName"></a>

### *property* Smoothing.FileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Images"></a>

### *property* Smoothing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.InternalObject"></a>

### *property* Smoothing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.LengthUnits"></a>

### *property* Smoothing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.MoveLimit"></a>

### *property* Smoothing.MoveLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Properties"></a>

### *property* Smoothing.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ReadOnly"></a>

### *property* Smoothing.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ShowAlways"></a>

### *property* Smoothing.ShowAlways *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Statistics"></a>

### *property* Smoothing.Statistics *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Suppressed"></a>

### *property* Smoothing.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.VisibleProperties"></a>

### *property* Smoothing.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Smoothing.Activate"></a>

### Smoothing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddComment"></a>

### Smoothing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddFigure"></a>

### Smoothing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.AddImage"></a>

### Smoothing.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CopyTo"></a>

### Smoothing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CreateParameter"></a>

### Smoothing.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Delete"></a>

### Smoothing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Duplicate"></a>

### Smoothing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Evaluate"></a>

### Smoothing.Evaluate()

Run the Evaluate action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetChildren"></a>

### Smoothing.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetParameter"></a>

### Smoothing.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupAllSimilarChildren"></a>

### Smoothing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupSimilarObjects"></a>

### Smoothing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ImportSTL"></a>

### Smoothing.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByAPIName"></a>

### Smoothing.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByName"></a>

### Smoothing.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.RemoveParameter"></a>

### Smoothing.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


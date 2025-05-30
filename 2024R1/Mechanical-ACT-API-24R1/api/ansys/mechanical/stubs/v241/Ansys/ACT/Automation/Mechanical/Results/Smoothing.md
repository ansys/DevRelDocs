# `Smoothing`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.Smoothing"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.Smoothing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Smoothing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Evaluate`](#Smoothing.Evaluate)                               | Run the Evaluate action.                                                          |
| [`ImportSTL`](#Smoothing.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](#Smoothing.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Smoothing.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Smoothing.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Smoothing.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Smoothing.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Smoothing.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Smoothing.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Smoothing.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Smoothing.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Smoothing.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Smoothing.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Smoothing.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Smoothing.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Smoothing.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`MoveLimit`](#Smoothing.MoveLimit)                             | Gets or sets the MoveLimit.                                   |
| [`FileName`](#Smoothing.FileName)                               | Gets the FileName.                                            |
| [`ExportModel`](#Smoothing.ExportModel)                         | Gets or sets the ExportModel.                                 |
| [`DataModelObjectCategory`](#Smoothing.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Statistics`](#Smoothing.Statistics)                           | Gets the Statistics.                                          |
| [`LengthUnits`](#Smoothing.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](#Smoothing.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](#Smoothing.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](#Smoothing.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Smoothing.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#Smoothing.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#Smoothing.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#Smoothing.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                        | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Smoothing.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Smoothing.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Smoothing.InternalObject"></a>

### *property* Smoothing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.MoveLimit"></a>

### *property* Smoothing.MoveLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.FileName"></a>

### *property* Smoothing.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ExportModel"></a>

### *property* Smoothing.ExportModel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportModel.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.DataModelObjectCategory"></a>

### *property* Smoothing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Statistics"></a>

### *property* Smoothing.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.LengthUnits"></a>

### *property* Smoothing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ShowAlways"></a>

### *property* Smoothing.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Suppressed"></a>

### *property* Smoothing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Children"></a>

### *property* Smoothing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Comments"></a>

### *property* Smoothing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Figures"></a>

### *property* Smoothing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Images"></a>

### *property* Smoothing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ReadOnly"></a>

### *property* Smoothing.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Smoothing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Properties"></a>

### *property* Smoothing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.VisibleProperties"></a>

### *property* Smoothing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Smoothing.Evaluate"></a>

### Smoothing.Evaluate()

Run the Evaluate action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.ImportSTL"></a>

### Smoothing.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Delete"></a>

### Smoothing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetChildren"></a>

### Smoothing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Smoothing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Smoothing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Activate"></a>

### Smoothing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CopyTo"></a>

### Smoothing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.Duplicate"></a>

### Smoothing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupAllSimilarChildren"></a>

### Smoothing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GroupSimilarObjects"></a>

### Smoothing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByName"></a>

### Smoothing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.PropertyByAPIName"></a>

### Smoothing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.CreateParameter"></a>

### Smoothing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.GetParameter"></a>

### Smoothing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Smoothing.RemoveParameter"></a>

### Smoothing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


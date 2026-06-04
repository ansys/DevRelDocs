# `LimitBoundary`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LimitBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LimitBoundary

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LimitBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LimitBoundary.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LimitBoundary.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LimitBoundary.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LimitBoundary.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#LimitBoundary.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LimitBoundary.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LimitBoundary.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LimitBoundary.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LimitBoundary.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LimitBoundary.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LimitBoundary.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LimitBoundary.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#LimitBoundary.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#LimitBoundary.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LimitBoundary.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LimitBoundary.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LimitBoundary.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LimitBoundary.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LimitBoundary.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#LimitBoundary.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#LimitBoundary.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LimitBoundary.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LimitBCDirection`](#LimitBoundary.LimitBCDirection)               | Gets or sets the LimitBCDirection.                            |
| [`LimitBCMax`](#LimitBoundary.LimitBCMax)                           | Gets or sets the LimitBCMax.                                  |
| [`LimitBCMaxX`](#LimitBoundary.LimitBCMaxX)                         | Gets or sets the LimitBCMaxX.                                 |
| [`LimitBCMaxY`](#LimitBoundary.LimitBCMaxY)                         | Gets or sets the LimitBCMaxY.                                 |
| [`LimitBCMaxZ`](#LimitBoundary.LimitBCMaxZ)                         | Gets or sets the LimitBCMaxZ.                                 |
| [`LimitBCMin`](#LimitBoundary.LimitBCMin)                           | Gets or sets the LimitBCMin.                                  |
| [`LimitBCMinX`](#LimitBoundary.LimitBCMinX)                         | Gets or sets the LimitBCMinX.                                 |
| [`LimitBCMinY`](#LimitBoundary.LimitBCMinY)                         | Gets or sets the LimitBCMinY.                                 |
| [`LimitBCMinZ`](#LimitBoundary.LimitBCMinZ)                         | Gets or sets the LimitBCMinZ.                                 |
| [`Location`](#LimitBoundary.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#LimitBoundary.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#LimitBoundary.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#LimitBoundary.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#LimitBoundary.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LimitBoundary.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LimitBoundary.Children"></a>

### *property* LimitBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Comments"></a>

### *property* LimitBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.DataModelObjectCategory"></a>

### *property* LimitBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Figures"></a>

### *property* LimitBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Images"></a>

### *property* LimitBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.InternalObject"></a>

### *property* LimitBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCDirection"></a>

### *property* LimitBoundary.LimitBCDirection *: [Ansys.Mechanical.DataModel.Enums.LimitBCDirection](../../../../Mechanical/DataModel/Enums/LimitBCDirection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LimitBCDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCDirection.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMax"></a>

### *property* LimitBoundary.LimitBCMax *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMax.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxX"></a>

### *property* LimitBoundary.LimitBCMaxX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxX.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxY"></a>

### *property* LimitBoundary.LimitBCMaxY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxY.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMaxZ"></a>

### *property* LimitBoundary.LimitBCMaxZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMaxZ.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMin"></a>

### *property* LimitBoundary.LimitBCMin *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMin.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinX"></a>

### *property* LimitBoundary.LimitBCMinX *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinX.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinY"></a>

### *property* LimitBoundary.LimitBCMinY *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinY.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.LimitBCMinZ"></a>

### *property* LimitBoundary.LimitBCMinZ *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitBCMinZ.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Location"></a>

### *property* LimitBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Properties"></a>

### *property* LimitBoundary.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.ReadOnly"></a>

### *property* LimitBoundary.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.SharedRefBody"></a>

### *property* LimitBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Suppressed"></a>

### *property* LimitBoundary.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.VisibleProperties"></a>

### *property* LimitBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LimitBoundary.Activate"></a>

### LimitBoundary.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddComment"></a>

### LimitBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddFigure"></a>

### LimitBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.AddImage"></a>

### LimitBoundary.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.CopyTo"></a>

### LimitBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.CreateParameter"></a>

### LimitBoundary.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Delete"></a>

### LimitBoundary.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.Duplicate"></a>

### LimitBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GetChildren"></a>

### LimitBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GetParameter"></a>

### LimitBoundary.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GroupAllSimilarChildren"></a>

### LimitBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.GroupSimilarObjects"></a>

### LimitBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.PromoteToNamedSelection"></a>

### LimitBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.PropertyByAPIName"></a>

### LimitBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.PropertyByName"></a>

### LimitBoundary.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LimitBoundary.RemoveParameter"></a>

### LimitBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


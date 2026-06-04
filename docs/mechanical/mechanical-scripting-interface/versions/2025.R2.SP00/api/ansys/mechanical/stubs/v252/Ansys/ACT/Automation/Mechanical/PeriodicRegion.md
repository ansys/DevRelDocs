# `PeriodicRegion`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PeriodicRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PeriodicRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PeriodicRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PeriodicRegion.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PeriodicRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PeriodicRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PeriodicRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PeriodicRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PeriodicRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PeriodicRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PeriodicRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipHighLow`](#PeriodicRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`GetChildren`](#PeriodicRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PeriodicRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PeriodicRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PeriodicRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PeriodicRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PeriodicRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PeriodicRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PeriodicRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PeriodicRegion.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#PeriodicRegion.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#PeriodicRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PeriodicRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`HighBoundaryLocation`](#PeriodicRegion.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`Images`](#PeriodicRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PeriodicRegion.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PeriodicRegion.Location)                               | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#PeriodicRegion.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`Properties`](#PeriodicRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PeriodicRegion.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#PeriodicRegion.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](#PeriodicRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#PeriodicRegion.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#PeriodicRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PeriodicRegion.Children"></a>

### *property* PeriodicRegion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Comments"></a>

### *property* PeriodicRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CoordinateSystem"></a>

### *property* PeriodicRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.DataModelObjectCategory"></a>

### *property* PeriodicRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Figures"></a>

### *property* PeriodicRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.HighBoundaryLocation"></a>

### *property* PeriodicRegion.HighBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Images"></a>

### *property* PeriodicRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.InternalObject"></a>

### *property* PeriodicRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Location"></a>

### *property* PeriodicRegion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.LowBoundaryLocation"></a>

### *property* PeriodicRegion.LowBoundaryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Properties"></a>

### *property* PeriodicRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ReadOnly"></a>

### *property* PeriodicRegion.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.ScopeMode"></a>

### *property* PeriodicRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Suppressed"></a>

### *property* PeriodicRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Type"></a>

### *property* PeriodicRegion.Type *: [Ansys.Mechanical.DataModel.Enums.PeriodicRegionType](../../../Mechanical/DataModel/Enums/PeriodicRegionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.PeriodicRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.VisibleProperties"></a>

### *property* PeriodicRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PeriodicRegion.Activate"></a>

### PeriodicRegion.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddComment"></a>

### PeriodicRegion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddFigure"></a>

### PeriodicRegion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.AddImage"></a>

### PeriodicRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CopyTo"></a>

### PeriodicRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.CreateParameter"></a>

### PeriodicRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Delete"></a>

### PeriodicRegion.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.Duplicate"></a>

### PeriodicRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.FlipHighLow"></a>

### PeriodicRegion.FlipHighLow() → [None](https://docs.python.org/3/library/constants.html#None)

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetChildren"></a>

### PeriodicRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GetParameter"></a>

### PeriodicRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupAllSimilarChildren"></a>

### PeriodicRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.GroupSimilarObjects"></a>

### PeriodicRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByAPIName"></a>

### PeriodicRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.PropertyByName"></a>

### PeriodicRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PeriodicRegion.RemoveParameter"></a>

### PeriodicRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


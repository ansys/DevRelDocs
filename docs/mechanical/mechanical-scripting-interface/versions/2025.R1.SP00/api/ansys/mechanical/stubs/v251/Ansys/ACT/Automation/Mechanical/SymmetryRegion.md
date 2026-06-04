# `SymmetryRegion`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SymmetryRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SymmetryRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SymmetryRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SymmetryRegion.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#SymmetryRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SymmetryRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SymmetryRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SymmetryRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SymmetryRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SymmetryRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SymmetryRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipHighLow`](#SymmetryRegion.FlipHighLow)                         | Flips the High and Low Boundaries.                                                |
| [`GetChildren`](#SymmetryRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SymmetryRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SymmetryRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SymmetryRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SymmetryRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SymmetryRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SymmetryRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`ApplyTo`](#SymmetryRegion.ApplyTo)                                 | Gets or sets the ApplyTo.                                     |
| [`Behavior`](#SymmetryRegion.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#SymmetryRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SymmetryRegion.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#SymmetryRegion.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SymmetryRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SymmetryRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`HighBoundaryLocation`](#SymmetryRegion.HighBoundaryLocation)       | Gets or sets the HighBoundaryLocation.                        |
| [`Images`](#SymmetryRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SymmetryRegion.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LinearShift`](#SymmetryRegion.LinearShift)                         | Gets or sets the LinearShift.                                 |
| [`Location`](#SymmetryRegion.Location)                               | Gets or sets the Location.                                    |
| [`LowBoundaryLocation`](#SymmetryRegion.LowBoundaryLocation)         | Gets or sets the LowBoundaryLocation.                         |
| [`PeriodicityDirection`](#SymmetryRegion.PeriodicityDirection)       | Gets or sets the PeriodicityDirection.                        |
| [`Properties`](#SymmetryRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SymmetryRegion.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ScopeMode`](#SymmetryRegion.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`Suppressed`](#SymmetryRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SymmetryNormal`](#SymmetryRegion.SymmetryNormal)                   | Gets or sets the SymmetryNormal.                              |
| [`Type`](#SymmetryRegion.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#SymmetryRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryRegion.ApplyTo"></a>

### *property* SymmetryRegion.ApplyTo *: [Ansys.Mechanical.DataModel.Enums.PeriodicApplyTo](../../../Mechanical/DataModel/Enums/PeriodicApplyTo.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PeriodicApplyTo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyTo.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Behavior"></a>

### *property* SymmetryRegion.Behavior *: [Ansys.Mechanical.DataModel.Enums.SymmetryBehavior](../../../Mechanical/DataModel/Enums/SymmetryBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SymmetryBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Children"></a>

### *property* SymmetryRegion.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Comments"></a>

### *property* SymmetryRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CoordinateSystem"></a>

### *property* SymmetryRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.DataModelObjectCategory"></a>

### *property* SymmetryRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Figures"></a>

### *property* SymmetryRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.HighBoundaryLocation"></a>

### *property* SymmetryRegion.HighBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HighBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Images"></a>

### *property* SymmetryRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.InternalObject"></a>

### *property* SymmetryRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGeneralAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LinearShift"></a>

### *property* SymmetryRegion.LinearShift *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearShift.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Location"></a>

### *property* SymmetryRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.LowBoundaryLocation"></a>

### *property* SymmetryRegion.LowBoundaryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowBoundaryLocation.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PeriodicityDirection"></a>

### *property* SymmetryRegion.PeriodicityDirection *: [Ansys.Mechanical.DataModel.Enums.PeriodicityDirectionType](../../../Mechanical/DataModel/Enums/PeriodicityDirectionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PeriodicityDirectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PeriodicityDirection.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Properties"></a>

### *property* SymmetryRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ReadOnly"></a>

### *property* SymmetryRegion.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.ScopeMode"></a>

### *property* SymmetryRegion.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Suppressed"></a>

### *property* SymmetryRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.SymmetryNormal"></a>

### *property* SymmetryRegion.SymmetryNormal *: [Ansys.Mechanical.DataModel.Enums.SymmetryNormalType](../../../Mechanical/DataModel/Enums/SymmetryNormalType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SymmetryNormalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryNormal.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Type"></a>

### *property* SymmetryRegion.Type *: [Ansys.Mechanical.DataModel.Enums.SymmetryRegionType](../../../Mechanical/DataModel/Enums/SymmetryRegionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SymmetryRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.VisibleProperties"></a>

### *property* SymmetryRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryRegion.Activate"></a>

### SymmetryRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddComment"></a>

### SymmetryRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddFigure"></a>

### SymmetryRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.AddImage"></a>

### SymmetryRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CopyTo"></a>

### SymmetryRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.CreateParameter"></a>

### SymmetryRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Delete"></a>

### SymmetryRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.Duplicate"></a>

### SymmetryRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.FlipHighLow"></a>

### SymmetryRegion.FlipHighLow()

Flips the High and Low Boundaries.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetChildren"></a>

### SymmetryRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GetParameter"></a>

### SymmetryRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupAllSimilarChildren"></a>

### SymmetryRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.GroupSimilarObjects"></a>

### SymmetryRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByAPIName"></a>

### SymmetryRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.PropertyByName"></a>

### SymmetryRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryRegion.RemoveParameter"></a>

### SymmetryRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


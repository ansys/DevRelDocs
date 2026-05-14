# `PointMass`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PointMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PointMass.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#PointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#PointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PointMass.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PointMass.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToRemotePoint`](#PointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#PointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AppliedBy`](#PointMass.AppliedBy)                                   | Gets or sets the AppliedBy.                                                                                                                                                                                   |
| [`BeamCoincidentLengthFactor`](#PointMass.BeamCoincidentLengthFactor) | Gets or sets the Coincident Length Factor that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when Behavior is set to “Beam”. Default: 1. |
| [`BeamRadius`](#PointMass.BeamRadius)                                 | Gets or sets the BeamRadius.                                                                                                                                                                                  |
| [`Behavior`](#PointMass.Behavior)                                     | Gets or sets the Behavior.                                                                                                                                                                                    |
| [`Children`](#PointMass.Children)                                     | Gets the list of children.                                                                                                                                                                                    |
| [`Comments`](#PointMass.Comments)                                     | Gets the list of associated comments.                                                                                                                                                                         |
| [`CoordinateSystem`](#PointMass.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                                                                                                                                                                            |
| [`DataModelObjectCategory`](#PointMass.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                                                                  |
| [`ElementAPDLName`](#PointMass.ElementAPDLName)                       | Gets or sets the ElementAPDLName.                                                                                                                                                                             |
| [`Figures`](#PointMass.Figures)                                       | Gets the list of associated figures.                                                                                                                                                                          |
| [`Images`](#PointMass.Images)                                         | Gets the list of associated images.                                                                                                                                                                           |
| [`InternalObject`](#PointMass.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                                                            |
| [`IsDistributedMass`](#PointMass.IsDistributedMass)                   | Gets the IsDistributedMass.                                                                                                                                                                                   |
| [`Location`](#PointMass.Location)                                     | Gets or sets the Geometry.                                                                                                                                                                                    |
| [`Mass`](#PointMass.Mass)                                             | Gets or sets the Mass.                                                                                                                                                                                        |
| [`MassMomentOfInertiaX`](#PointMass.MassMomentOfInertiaX)             | Gets or sets the MassMomentOfInertiaX.                                                                                                                                                                        |
| [`MassMomentOfInertiaY`](#PointMass.MassMomentOfInertiaY)             | Gets or sets the MassMomentOfInertiaY.                                                                                                                                                                        |
| [`MassMomentOfInertiaZ`](#PointMass.MassMomentOfInertiaZ)             | Gets or sets the MassMomentOfInertiaZ.                                                                                                                                                                        |
| [`Material`](#PointMass.Material)                                     | Gets or sets the Material.                                                                                                                                                                                    |
| [`NodalCoordinateSystem`](#PointMass.NodalCoordinateSystem)           | Gets the NodalCoordinateSystem.                                                                                                                                                                               |
| [`PinballRegion`](#PointMass.PinballRegion)                           | Gets or sets the PinballRegion.                                                                                                                                                                               |
| [`Properties`](#PointMass.Properties)                                 | Gets the list of properties for this object.                                                                                                                                                                  |
| [`ReadOnly`](#PointMass.ReadOnly)                                     | Gets or sets the ReadOnly.                                                                                                                                                                                    |
| [`RemotePoint`](#PointMass.RemotePoint)                               | Gets the remote point associated to the point mass.                                                                                                                                                           |
| [`Suppressed`](#PointMass.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                                                                  |
| [`VisibleProperties`](#PointMass.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                                                                 |
| [`XCoordinate`](#PointMass.XCoordinate)                               | Gets or sets the XCoordinate.                                                                                                                                                                                 |
| [`YCoordinate`](#PointMass.YCoordinate)                               | Gets or sets the YCoordinate.                                                                                                                                                                                 |
| [`ZCoordinate`](#PointMass.ZCoordinate)                               | Gets or sets the ZCoordinate.                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="PointMass.AppliedBy"></a>

### *property* PointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.BeamCoincidentLengthFactor"></a>

### *property* PointMass.BeamCoincidentLengthFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coincident Length Factor that scales the stiffness of the connection between the beam elements and the remote point. This property is applicable when Behavior is set to “Beam”. Default: 1.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.BeamRadius"></a>

### *property* PointMass.BeamRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Behavior"></a>

### *property* PointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Children"></a>

### *property* PointMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Comments"></a>

### *property* PointMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CoordinateSystem"></a>

### *property* PointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.DataModelObjectCategory"></a>

### *property* PointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.ElementAPDLName"></a>

### *property* PointMass.ElementAPDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Figures"></a>

### *property* PointMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Images"></a>

### *property* PointMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.InternalObject"></a>

### *property* PointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.IsDistributedMass"></a>

### *property* PointMass.IsDistributedMass *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Location"></a>

### *property* PointMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Mass"></a>

### *property* PointMass.Mass *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaX"></a>

### *property* PointMass.MassMomentOfInertiaX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaX.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaY"></a>

### *property* PointMass.MassMomentOfInertiaY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaY.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.MassMomentOfInertiaZ"></a>

### *property* PointMass.MassMomentOfInertiaZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassMomentOfInertiaZ.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Material"></a>

### *property* PointMass.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.NodalCoordinateSystem"></a>

### *property* PointMass.NodalCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NodalCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PinballRegion"></a>

### *property* PointMass.PinballRegion *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Properties"></a>

### *property* PointMass.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.ReadOnly"></a>

### *property* PointMass.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.RemotePoint"></a>

### *property* PointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Suppressed"></a>

### *property* PointMass.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.VisibleProperties"></a>

### *property* PointMass.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.XCoordinate"></a>

### *property* PointMass.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.YCoordinate"></a>

### *property* PointMass.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.ZCoordinate"></a>

### *property* PointMass.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PointMass.Activate"></a>

### PointMass.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddCommandSnippet"></a>

### PointMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddComment"></a>

### PointMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddFigure"></a>

### PointMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.AddImage"></a>

### PointMass.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CopyTo"></a>

### PointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.CreateParameter"></a>

### PointMass.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Delete"></a>

### PointMass.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.Duplicate"></a>

### PointMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GetChildren"></a>

### PointMass.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GetParameter"></a>

### PointMass.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GroupAllSimilarChildren"></a>

### PointMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.GroupSimilarObjects"></a>

### PointMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PromoteToRemotePoint"></a>

### PointMass.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PropertyByAPIName"></a>

### PointMass.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PointMass.PropertyByName"></a>

### PointMass.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PointMass.RemoveParameter"></a>

### PointMass.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


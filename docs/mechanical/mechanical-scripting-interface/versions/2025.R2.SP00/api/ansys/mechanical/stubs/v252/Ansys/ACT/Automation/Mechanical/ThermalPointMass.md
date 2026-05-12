# `ThermalPointMass`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ThermalPointMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ThermalPointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ThermalPointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ThermalPointMass.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ThermalPointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ThermalPointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ThermalPointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ThermalPointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ThermalPointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ThermalPointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ThermalPointMass.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ThermalPointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ThermalPointMass.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ThermalPointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ThermalPointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThermalPointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToRemotePoint`](#ThermalPointMass.PromoteToRemotePoint)       | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#ThermalPointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ThermalPointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ThermalPointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#ThermalPointMass.AppliedBy)                             | Gets or sets the AppliedBy.                                   |
| [`Behavior`](#ThermalPointMass.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#ThermalPointMass.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ThermalPointMass.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#ThermalPointMass.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#ThermalPointMass.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ThermalPointMass.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ThermalPointMass.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ThermalPointMass.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#ThermalPointMass.IsDistributedMass)             | Gets the IsDistributedMass.                                   |
| [`Location`](#ThermalPointMass.Location)                               | Gets or sets the Geometry.                                    |
| [`PinballRegion`](#ThermalPointMass.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`Properties`](#ThermalPointMass.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ThermalPointMass.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](#ThermalPointMass.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`Suppressed`](#ThermalPointMass.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ThermalCapacitance`](#ThermalPointMass.ThermalCapacitance)           | Gets or sets the ThermalCapacitance.                          |
| [`VisibleProperties`](#ThermalPointMass.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XCoordinate`](#ThermalPointMass.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#ThermalPointMass.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#ThermalPointMass.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ThermalPointMass.AppliedBy"></a>

### *property* ThermalPointMass.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Behavior"></a>

### *property* ThermalPointMass.Behavior *: [Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior](../../../Mechanical/DataModel/Enums/ThermalPointMassBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ThermalPointMassBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Children"></a>

### *property* ThermalPointMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Comments"></a>

### *property* ThermalPointMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CoordinateSystem"></a>

### *property* ThermalPointMass.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.DataModelObjectCategory"></a>

### *property* ThermalPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Figures"></a>

### *property* ThermalPointMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Images"></a>

### *property* ThermalPointMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.InternalObject"></a>

### *property* ThermalPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.IsDistributedMass"></a>

### *property* ThermalPointMass.IsDistributedMass *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Location"></a>

### *property* ThermalPointMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PinballRegion"></a>

### *property* ThermalPointMass.PinballRegion *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Properties"></a>

### *property* ThermalPointMass.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ReadOnly"></a>

### *property* ThermalPointMass.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemotePoint"></a>

### *property* ThermalPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Suppressed"></a>

### *property* ThermalPointMass.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ThermalCapacitance"></a>

### *property* ThermalPointMass.ThermalCapacitance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.VisibleProperties"></a>

### *property* ThermalPointMass.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.XCoordinate"></a>

### *property* ThermalPointMass.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.YCoordinate"></a>

### *property* ThermalPointMass.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.ZCoordinate"></a>

### *property* ThermalPointMass.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalPointMass.Activate"></a>

### ThermalPointMass.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddCommandSnippet"></a>

### ThermalPointMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddComment"></a>

### ThermalPointMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddFigure"></a>

### ThermalPointMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.AddImage"></a>

### ThermalPointMass.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CopyTo"></a>

### ThermalPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.CreateParameter"></a>

### ThermalPointMass.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Delete"></a>

### ThermalPointMass.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.Duplicate"></a>

### ThermalPointMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetChildren"></a>

### ThermalPointMass.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GetParameter"></a>

### ThermalPointMass.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupAllSimilarChildren"></a>

### ThermalPointMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.GroupSimilarObjects"></a>

### ThermalPointMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PromoteToRemotePoint"></a>

### ThermalPointMass.PromoteToRemotePoint() → Iterable[[Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint)]

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByAPIName"></a>

### ThermalPointMass.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.PropertyByName"></a>

### ThermalPointMass.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalPointMass.RemoveParameter"></a>

### ThermalPointMass.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


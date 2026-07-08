# `SpotWeldConnection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SpotWeldConnection.Activate)                                     | Activate the current object.                                                      |
| [`AddComment`](#SpotWeldConnection.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddImage`](#SpotWeldConnection.AddImage)                                     | Creates a new child Image.                                                        |
| [`AddNewSpotWeld`](#SpotWeldConnection.AddNewSpotWeld)                         | Add a new spot weld with/without a customID.                                      |
| [`CopyTo`](#SpotWeldConnection.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SpotWeldConnection.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`CreateSpotWeldFromHitPoint`](#SpotWeldConnection.CreateSpotWeldFromHitPoint) | Add a new spot weld by using a Hit Point.                                         |
| [`Duplicate`](#SpotWeldConnection.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`ExportToCSVFile`](#SpotWeldConnection.ExportToCSVFile)                       | Export the contents to a CSV file.                                                |
| [`GetChildren`](#SpotWeldConnection.GetChildren)                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SpotWeldConnection.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SpotWeldConnection.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpotWeldConnection.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SpotWeldConnection.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#SpotWeldConnection.PropertyByName)                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SpotWeldConnection.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |
| [`RemoveSpotWeld`](#SpotWeldConnection.RemoveSpotWeld)                         | Remove an existing spot weld.                                                     |
| [`SetXCoordinate`](#SpotWeldConnection.SetXCoordinate)                         | Set the X coordinate given the Spot Weld ID.                                      |
| [`SetYCoordinate`](#SpotWeldConnection.SetYCoordinate)                         | Set the Y coordinate given the Spot Weld ID.                                      |
| [`SetZCoordinate`](#SpotWeldConnection.SetZCoordinate)                         | Set the Z coordinate given the Spot Weld ID.                                      |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AngleTolerance`](#SpotWeldConnection.AngleTolerance)                   | Gets or sets the AngleTolerance.                              |
| [`Children`](#SpotWeldConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#SpotWeldConnection.Comments)                               | Gets the list of associated comments.                         |
| [`ConnectionBehavior`](#SpotWeldConnection.ConnectionBehavior)           | Gets or sets the ConnectionBehavior.                          |
| [`DataModelObjectCategory`](#SpotWeldConnection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#SpotWeldConnection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SpotWeldConnection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Material`](#SpotWeldConnection.Material)                               | Gets or sets the Material.                                    |
| [`NumWeldPoints`](#SpotWeldConnection.NumWeldPoints)                     | Gets the NumWeldPoints.                                       |
| [`NumberOfLayers`](#SpotWeldConnection.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`PenetrationTolerance`](#SpotWeldConnection.PenetrationTolerance)       | Gets or sets the PenetrationTolerance.                        |
| [`Properties`](#SpotWeldConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`Radius`](#SpotWeldConnection.Radius)                                   | Gets or sets the Radius.                                      |
| [`ReadOnly`](#SpotWeldConnection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SearchDistance`](#SpotWeldConnection.SearchDistance)                   | Gets or sets the SearchDistance.                              |
| [`ShellThicknessEffect`](#SpotWeldConnection.ShellThicknessEffect)       | Gets or sets the ShellThicknessEffect.                        |
| [`SnapToEdgeTolerance`](#SpotWeldConnection.SnapToEdgeTolerance)         | Gets or sets the SnapToEdgeTolerance.                         |
| [`SourceGeometry`](#SpotWeldConnection.SourceGeometry)                   | Gets or sets the SourceGeometry.                              |
| [`StiffnessBehavior`](#SpotWeldConnection.StiffnessBehavior)             | Gets or sets the StiffnessBehavior.                           |
| [`TargetGeometry`](#SpotWeldConnection.TargetGeometry)                   | Gets or sets the TargetGeometry.                              |
| [`Type`](#SpotWeldConnection.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#SpotWeldConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpotWeldConnection.AngleTolerance"></a>

### *property* SpotWeldConnection.AngleTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Children"></a>

### *property* SpotWeldConnection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Comments"></a>

### *property* SpotWeldConnection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ConnectionBehavior"></a>

### *property* SpotWeldConnection.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.DataModelObjectCategory"></a>

### *property* SpotWeldConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Images"></a>

### *property* SpotWeldConnection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.InternalObject"></a>

### *property* SpotWeldConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Material"></a>

### *property* SpotWeldConnection.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumWeldPoints"></a>

### *property* SpotWeldConnection.NumWeldPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumberOfLayers"></a>

### *property* SpotWeldConnection.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PenetrationTolerance"></a>

### *property* SpotWeldConnection.PenetrationTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Properties"></a>

### *property* SpotWeldConnection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Radius"></a>

### *property* SpotWeldConnection.Radius *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ReadOnly"></a>

### *property* SpotWeldConnection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SearchDistance"></a>

### *property* SpotWeldConnection.SearchDistance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ShellThicknessEffect"></a>

### *property* SpotWeldConnection.ShellThicknessEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SnapToEdgeTolerance"></a>

### *property* SpotWeldConnection.SnapToEdgeTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SourceGeometry"></a>

### *property* SpotWeldConnection.SourceGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.StiffnessBehavior"></a>

### *property* SpotWeldConnection.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.TargetGeometry"></a>

### *property* SpotWeldConnection.TargetGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Type"></a>

### *property* SpotWeldConnection.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.VisibleProperties"></a>

### *property* SpotWeldConnection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpotWeldConnection.Activate"></a>

### SpotWeldConnection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddComment"></a>

### SpotWeldConnection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddImage"></a>

### SpotWeldConnection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddNewSpotWeld"></a>

### SpotWeldConnection.AddNewSpotWeld(customId: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Add a new spot weld with/without a customID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CopyTo"></a>

### SpotWeldConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateParameter"></a>

### SpotWeldConnection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateSpotWeldFromHitPoint"></a>

### SpotWeldConnection.CreateSpotWeldFromHitPoint() → [None](https://docs.python.org/3/library/constants.html#None)

Add a new spot weld by using a Hit Point.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Duplicate"></a>

### SpotWeldConnection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ExportToCSVFile"></a>

### SpotWeldConnection.ExportToCSVFile(fileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Export the contents to a CSV file.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetChildren"></a>

### SpotWeldConnection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetParameter"></a>

### SpotWeldConnection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupAllSimilarChildren"></a>

### SpotWeldConnection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupSimilarObjects"></a>

### SpotWeldConnection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByAPIName"></a>

### SpotWeldConnection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByName"></a>

### SpotWeldConnection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveParameter"></a>

### SpotWeldConnection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveSpotWeld"></a>

### SpotWeldConnection.RemoveSpotWeld(spotWeldId: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Remove an existing spot weld.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetXCoordinate"></a>

### SpotWeldConnection.SetXCoordinate(spotWeldId: [int](https://docs.python.org/3/library/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Set the X coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetYCoordinate"></a>

### SpotWeldConnection.SetYCoordinate(spotWeldId: [int](https://docs.python.org/3/library/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Set the Y coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetZCoordinate"></a>

### SpotWeldConnection.SetZCoordinate(spotWeldId: [int](https://docs.python.org/3/library/functions.html#int), val: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Set the Z coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->


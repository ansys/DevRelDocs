# `SpotWeldConnection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------|-----------------------------------------------------------------------------------|
| `SetXCoordinate`             | Set the X coordinate given the Spot Weld ID.                                      |
| `SetYCoordinate`             | Set the Y coordinate given the Spot Weld ID.                                      |
| `SetZCoordinate`             | Set the Z coordinate given the Spot Weld ID.                                      |
| `AddNewSpotWeld`             | Add a new spot weld with/without a customID.                                      |
| `RemoveSpotWeld`             | Remove an existing spot weld.                                                     |
| `ExportToCSVFile`            | Export the contents to a CSV file.                                                |
| `CreateSpotWeldFromHitPoint` | Add a new spot weld by using a Hit Point.                                         |
| `GetChildren`                | Gets the list of children, filtered by type.                                      |
| `GetChildren`                | Gets the list of children, filtered by type.                                      |
| `AddComment`                 | Creates a new child Comment.                                                      |
| `AddImage`                   | Creates a new child Image.                                                        |
| `Activate`                   | Activate the current object.                                                      |
| `CopyTo`                     | Copies all visible properties from this object to another.                        |
| `Duplicate`                  | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`    | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`        | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`             | Get a property by its unique name.                                                |
| `PropertyByAPIName`          | Get a property by its API name.                                                   |
| `CreateParameter`            | Creates a new parameter for a Property.                                           |
| `GetParameter`               | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`            | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Material`                | Gets or sets the Material.                                    |
| `NumberOfLayers`          | Gets or sets the NumberOfLayers.                              |
| `NumWeldPoints`           | Gets the NumWeldPoints.                                       |
| `AngleTolerance`          | Gets or sets the AngleTolerance.                              |
| `PenetrationTolerance`    | Gets or sets the PenetrationTolerance.                        |
| `Radius`                  | Gets or sets the Radius.                                      |
| `SnapToEdgeTolerance`     | Gets or sets the SnapToEdgeTolerance.                         |
| `SearchDistance`          | Gets or sets the SearchDistance.                              |
| `ConnectionBehavior`      | Gets or sets the ConnectionBehavior.                          |
| `Type`                    | Gets or sets the Type.                                        |
| `StiffnessBehavior`       | Gets or sets the StiffnessBehavior.                           |
| `ShellThicknessEffect`    | Gets or sets the ShellThicknessEffect.                        |
| `SourceGeometry`          | Gets or sets the SourceGeometry.                              |
| `TargetGeometry`          | Gets or sets the TargetGeometry.                              |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* SpotWeldConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.SearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchDistance.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.SourceGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceGeometry.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.TargetGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometry.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SpotWeldConnection.SetXCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the X coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.SetYCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Y coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.SetZCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Z coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.AddNewSpotWeld(customId: System.Int32)

Add a new spot weld with/without a customID.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.RemoveSpotWeld(spotWeldId: System.Int32)

Remove an existing spot weld.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.ExportToCSVFile(fileName: System.String)

Export the contents to a CSV file.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.CreateSpotWeldFromHitPoint()

Add a new spot weld by using a Hit Point.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


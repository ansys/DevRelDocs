# SpotWeldConnection

### *class* SpotWeldConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SpotWeldConnection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SetXCoordinate`](#SpotWeldConnection.SetXCoordinate)                         | Set the X coordinate given the Spot Weld ID.                                      |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetYCoordinate`](#SpotWeldConnection.SetYCoordinate)                         | Set the Y coordinate given the Spot Weld ID.                                      |
| [`SetZCoordinate`](#SpotWeldConnection.SetZCoordinate)                         | Set the Z coordinate given the Spot Weld ID.                                      |
| [`AddNewSpotWeld`](#SpotWeldConnection.AddNewSpotWeld)                         | Add a new spot weld with/without a customID.                                      |
| [`RemoveSpotWeld`](#SpotWeldConnection.RemoveSpotWeld)                         | Remove an existing spot weld.                                                     |
| [`ExportToCSVFile`](#SpotWeldConnection.ExportToCSVFile)                       | Export the contents to a CSV file.                                                |
| [`CreateSpotWeldFromHitPoint`](#SpotWeldConnection.CreateSpotWeldFromHitPoint) | Add a new spot weld by using a Hit Point.                                         |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SpotWeldConnection.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddImage`](#SpotWeldConnection.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](#SpotWeldConnection.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](#SpotWeldConnection.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SpotWeldConnection.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SpotWeldConnection.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpotWeldConnection.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SpotWeldConnection.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SpotWeldConnection.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#SpotWeldConnection.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SpotWeldConnection.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SpotWeldConnection.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`NumberOfLayers`](#SpotWeldConnection.NumberOfLayers)                                                                 | Gets or sets the NumberOfLayers.                              |
| [`NumWeldPoints`](#SpotWeldConnection.NumWeldPoints)                                                                   | Gets the NumWeldPoints.                                       |
| [`AngleTolerance`](#SpotWeldConnection.AngleTolerance)                                                                 | Gets or sets the AngleTolerance.                              |
| [`PenetrationTolerance`](#SpotWeldConnection.PenetrationTolerance)                                                     | Gets or sets the PenetrationTolerance.                        |
| [`Radius`](#SpotWeldConnection.Radius)                                                                                 | Gets or sets the Radius.                                      |
| [`SnapToEdgeTolerance`](#SpotWeldConnection.SnapToEdgeTolerance)                                                       | Gets or sets the SnapToEdgeTolerance.                         |
| [`SearchDistance`](#SpotWeldConnection.SearchDistance)                                                                 | Gets or sets the SearchDistance.                              |
| [`ConnectionBehavior`](#SpotWeldConnection.ConnectionBehavior)                                                         | Gets or sets the ConnectionBehavior.                          |
| [`Type`](#SpotWeldConnection.Type)                                                                                     | Gets or sets the Type.                                        |
| [`StiffnessBehavior`](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior)                   | Gets or sets the StiffnessBehavior.                           |
| [`ShellThicknessEffect`](#SpotWeldConnection.ShellThicknessEffect)                                                     | Gets or sets the ShellThicknessEffect.                        |
| [`SourceGeometry`](#SpotWeldConnection.SourceGeometry)                                                                 | Gets or sets the SourceGeometry.                              |
| [`TargetGeometry`](#SpotWeldConnection.TargetGeometry)                                                                 | Gets or sets the TargetGeometry.                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#SpotWeldConnection.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#SpotWeldConnection.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Images`](#SpotWeldConnection.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#SpotWeldConnection.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SpotWeldConnection.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SpotWeldConnection.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import SpotWeldConnection
```

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

### *property* SpotWeldConnection.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* SpotWeldConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SpotWeldConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### SpotWeldConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SpotWeldConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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

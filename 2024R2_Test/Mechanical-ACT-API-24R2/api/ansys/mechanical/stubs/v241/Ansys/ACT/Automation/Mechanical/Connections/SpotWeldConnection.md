# `SpotWeldConnection`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetXCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SetXCoordinate)                         | Set the X coordinate given the Spot Weld ID.                                      |
| [`SetYCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SetYCoordinate)                         | Set the Y coordinate given the Spot Weld ID.                                      |
| [`SetZCoordinate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SetZCoordinate)                         | Set the Z coordinate given the Spot Weld ID.                                      |
| [`AddNewSpotWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.AddNewSpotWeld)                         | Add a new spot weld with/without a customID.                                      |
| [`RemoveSpotWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.RemoveSpotWeld)                         | Remove an existing spot weld.                                                     |
| [`ExportToCSVFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.ExportToCSVFile)                       | Export the contents to a CSV file.                                                |
| [`CreateSpotWeldFromHitPoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.CreateSpotWeldFromHitPoint) | Add a new spot weld by using a Hit Point.                                         |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.AddComment)                                 | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.AddImage)                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.PropertyByName)                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Material`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Material)                               | Gets or sets the Material.                                    |
| [`NumberOfLayers`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.NumberOfLayers)                   | Gets or sets the NumberOfLayers.                              |
| [`NumWeldPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.NumWeldPoints)                     | Gets the NumWeldPoints.                                       |
| [`AngleTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.AngleTolerance)                   | Gets or sets the AngleTolerance.                              |
| [`PenetrationTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.PenetrationTolerance)       | Gets or sets the PenetrationTolerance.                        |
| [`Radius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Radius)                                   | Gets or sets the Radius.                                      |
| [`SnapToEdgeTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SnapToEdgeTolerance)         | Gets or sets the SnapToEdgeTolerance.                         |
| [`SearchDistance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SearchDistance)                   | Gets or sets the SearchDistance.                              |
| [`ConnectionBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.ConnectionBehavior)           | Gets or sets the ConnectionBehavior.                          |
| [`Type`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Type)                                       | Gets or sets the Type.                                        |
| [`StiffnessBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.StiffnessBehavior)             | Gets or sets the StiffnessBehavior.                           |
| [`ShellThicknessEffect`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.ShellThicknessEffect)       | Gets or sets the ShellThicknessEffect.                        |
| [`SourceGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.SourceGeometry)                   | Gets or sets the SourceGeometry.                              |
| [`TargetGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.TargetGeometry)                   | Gets or sets the TargetGeometry.                              |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/SpotWeldConnection.md#SpotWeldConnection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SpotWeldConnection.InternalObject"></a>

### *property* SpotWeldConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Material"></a>

### *property* SpotWeldConnection.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumberOfLayers"></a>

### *property* SpotWeldConnection.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.NumWeldPoints"></a>

### *property* SpotWeldConnection.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AngleTolerance"></a>

### *property* SpotWeldConnection.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PenetrationTolerance"></a>

### *property* SpotWeldConnection.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Radius"></a>

### *property* SpotWeldConnection.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SnapToEdgeTolerance"></a>

### *property* SpotWeldConnection.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SearchDistance"></a>

### *property* SpotWeldConnection.SearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ConnectionBehavior"></a>

### *property* SpotWeldConnection.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Type"></a>

### *property* SpotWeldConnection.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.StiffnessBehavior"></a>

### *property* SpotWeldConnection.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ShellThicknessEffect"></a>

### *property* SpotWeldConnection.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SourceGeometry"></a>

### *property* SpotWeldConnection.SourceGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.TargetGeometry"></a>

### *property* SpotWeldConnection.TargetGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometry.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.DataModelObjectCategory"></a>

### *property* SpotWeldConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Children"></a>

### *property* SpotWeldConnection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Comments"></a>

### *property* SpotWeldConnection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Images"></a>

### *property* SpotWeldConnection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ReadOnly"></a>

### *property* SpotWeldConnection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SpotWeldConnection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Properties"></a>

### *property* SpotWeldConnection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.VisibleProperties"></a>

### *property* SpotWeldConnection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SpotWeldConnection.SetXCoordinate"></a>

### SpotWeldConnection.SetXCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the X coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetYCoordinate"></a>

### SpotWeldConnection.SetYCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Y coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.SetZCoordinate"></a>

### SpotWeldConnection.SetZCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Z coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddNewSpotWeld"></a>

### SpotWeldConnection.AddNewSpotWeld(customId: System.Int32)

Add a new spot weld with/without a customID.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveSpotWeld"></a>

### SpotWeldConnection.RemoveSpotWeld(spotWeldId: System.Int32)

Remove an existing spot weld.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.ExportToCSVFile"></a>

### SpotWeldConnection.ExportToCSVFile(fileName: System.String)

Export the contents to a CSV file.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateSpotWeldFromHitPoint"></a>

### SpotWeldConnection.CreateSpotWeldFromHitPoint()

Add a new spot weld by using a Hit Point.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetChildren"></a>

### SpotWeldConnection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SpotWeldConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddComment"></a>

### SpotWeldConnection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.AddImage"></a>

### SpotWeldConnection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Activate"></a>

### SpotWeldConnection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CopyTo"></a>

### SpotWeldConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.Duplicate"></a>

### SpotWeldConnection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupAllSimilarChildren"></a>

### SpotWeldConnection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GroupSimilarObjects"></a>

### SpotWeldConnection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByName"></a>

### SpotWeldConnection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.PropertyByAPIName"></a>

### SpotWeldConnection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.CreateParameter"></a>

### SpotWeldConnection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.GetParameter"></a>

### SpotWeldConnection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SpotWeldConnection.RemoveParameter"></a>

### SpotWeldConnection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


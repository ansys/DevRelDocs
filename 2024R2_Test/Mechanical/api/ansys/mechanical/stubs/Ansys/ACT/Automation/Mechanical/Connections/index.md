<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections"></a>

<a id="the-connections-package"></a>

# The `Connections` package

<a id="summary"></a>

## Summary

### Classes

| [`AMBondConnection`](AMBondConnection.md#AMBondConnection)       | Defines a AMBondConnection.   |
|------------------------------------------------------------------|-------------------------------|
| [`SpotWeldConnection`](SpotWeldConnection.md#SpotWeldConnection) | Defines a SpotWeldConnection. |
| [`SpotWeldGroup`](SpotWeldGroup.md#SpotWeldGroup)                | Defines a SpotWeldGroup.      |
| [`Beam`](Beam.md#Beam)                                           | Defines a Beam.               |
| [`Bearing`](Bearing.md#Bearing)                                  | Defines a Bearing.            |
| [`BodyInteraction`](BodyInteraction.md#BodyInteraction)          | Defines a BodyInteraction.    |
| [`ContactRegion`](ContactRegion.md#ContactRegion)                | Defines a ContactRegion.      |
| [`ContactTool`](ContactTool.md#ContactTool)                      | Defines a ContactTool.        |
| [`Spring`](Spring.md#Spring)                                     | Defines a Spring.             |
| [`Joint`](Joint.md#Joint)                                        | Defines a Joint.              |
| [`Connections`](Connections.md#Connections)                      | Defines a Connections.        |
| [`ConnectionGroup`](ConnectionGroup.md#ConnectionGroup)          | Defines a ConnectionGroup.    |
| [`BodyInteractions`](BodyInteractions.md#BodyInteractions)       | Defines a BodyInteractions.   |

<a id="description"></a>

## Description

Connections subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Connections.AMBondConnection"></a>

### *class* Connections.AMBondConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMBondConnection.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SearchConnectionsForDuplicatePairs`](#id429)   | Run the SearchConnectionsForDuplicatePairs action.                                |
|--------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipContactTarget`](#id214)                    | Run the FlipContactTarget action.                                                 |
| [`AddCommandSnippet`](#id363)                    | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#id364)              | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                               | Run the Delete action.                                                            |
| [`GetChildren`](#id469)                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                            | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                             | Creates a new child Image.                                                        |
| [`Activate`](#id473)                             | Activate the current object.                                                      |
| [`CopyTo`](#id474)                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                            | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)              | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                  | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                       | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                    | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                      | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                      | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`SourceLocation`](#id181)                                                                                             | Gets or sets the SourceLocation.                              |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TargetLocation`](#id182)                                                                                             | Gets or sets the TargetLocation.                              |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ContactBodies`](#id192)                                                                                              | Gets the ContactBodies.                                       |
| [`TargetBodies`](#id193)                                                                                               | Gets the TargetBodies.                                        |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import AMBondConnection
```

<a id="property-detail"></a>

## Property detail

<a id="Connections.SourceLocation"></a>

### *property* Connections.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetLocation"></a>

### *property* Connections.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InternalObject"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMBondConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactBodies"></a>

### *property* Connections.ContactBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetBodies"></a>

### *property* Connections.TargetBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactType"></a>

### *property* Connections.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Suppressed"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DataModelObjectCategory"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Children"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Comments"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Figures"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Images"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReadOnly"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Properties"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connections.VisibleProperties"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connections.SearchConnectionsForDuplicatePairs"></a>

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FlipContactTarget"></a>

### Connections.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddCommandSnippet"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Connections.RenameBasedOnDefinition"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Delete"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetChildren"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddComment"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddFigure"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddImage"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Activate"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CopyTo"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Duplicate"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupAllSimilarChildren"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupSimilarObjects"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByName"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByAPIName"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateParameter"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetParameter"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RemoveParameter"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpotWeldConnection"></a>

### *class* Connections.SpotWeldConnection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SpotWeldConnection.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SetXCoordinate`](#Connections.SetXCoordinate)                         | Set the X coordinate given the Spot Weld ID.                                      |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetYCoordinate`](#Connections.SetYCoordinate)                         | Set the Y coordinate given the Spot Weld ID.                                      |
| [`SetZCoordinate`](#Connections.SetZCoordinate)                         | Set the Z coordinate given the Spot Weld ID.                                      |
| [`AddNewSpotWeld`](#Connections.AddNewSpotWeld)                         | Add a new spot weld with/without a customID.                                      |
| [`RemoveSpotWeld`](#Connections.RemoveSpotWeld)                         | Remove an existing spot weld.                                                     |
| [`ExportToCSVFile`](#Connections.ExportToCSVFile)                       | Export the contents to a CSV file.                                                |
| [`CreateSpotWeldFromHitPoint`](#Connections.CreateSpotWeldFromHitPoint) | Add a new spot weld by using a Hit Point.                                         |
| [`GetChildren`](#id469)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                                  | Creates a new child Comment.                                                      |
| [`AddImage`](#id472)                                                    | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                                    | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                                      | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                                     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                              | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                                | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`NumberOfLayers`](#id32)                                                                                              | Gets or sets the NumberOfLayers.                              |
| [`NumWeldPoints`](#id33)                                                                                               | Gets the NumWeldPoints.                                       |
| [`AngleTolerance`](#id34)                                                                                              | Gets or sets the AngleTolerance.                              |
| [`PenetrationTolerance`](#id200)                                                                                       | Gets or sets the PenetrationTolerance.                        |
| [`Radius`](#id333)                                                                                                     | Gets or sets the Radius.                                      |
| [`SnapToEdgeTolerance`](#id36)                                                                                         | Gets or sets the SnapToEdgeTolerance.                         |
| [`SearchDistance`](#Connections.SearchDistance)                                                                        | Gets or sets the SearchDistance.                              |
| [`ConnectionBehavior`](#id37)                                                                                          | Gets or sets the ConnectionBehavior.                          |
| [`Type`](#id343)                                                                                                       | Gets or sets the Type.                                        |
| [`StiffnessBehavior`](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior)                   | Gets or sets the StiffnessBehavior.                           |
| [`ShellThicknessEffect`](#id201)                                                                                       | Gets or sets the ShellThicknessEffect.                        |
| [`SourceGeometry`](#Connections.SourceGeometry)                                                                        | Gets or sets the SourceGeometry.                              |
| [`TargetGeometry`](#Connections.TargetGeometry)                                                                        | Gets or sets the TargetGeometry.                              |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import SpotWeldConnection
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Material"></a>

### *property* Connections.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NumberOfLayers"></a>

### *property* Connections.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NumWeldPoints"></a>

### *property* Connections.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AngleTolerance"></a>

### *property* Connections.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PenetrationTolerance"></a>

### *property* Connections.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Radius"></a>

### *property* Connections.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SnapToEdgeTolerance"></a>

### *property* Connections.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SearchDistance"></a>

### *property* Connections.SearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ConnectionBehavior"></a>

### *property* Connections.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Type"></a>

### *property* Connections.Type *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StiffnessBehavior"></a>

### *property* Connections.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShellThicknessEffect"></a>

### *property* Connections.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SourceGeometry"></a>

### *property* Connections.SourceGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceGeometry.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetGeometry"></a>

### *property* Connections.TargetGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometry.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

## Method detail

<a id="Connections.SetXCoordinate"></a>

### Connections.SetXCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the X coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SetYCoordinate"></a>

### Connections.SetYCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Y coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SetZCoordinate"></a>

### Connections.SetZCoordinate(spotWeldId: System.Int32, val: Ansys.Core.Units.Quantity)

Set the Z coordinate given the Spot Weld ID.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddNewSpotWeld"></a>

### Connections.AddNewSpotWeld(customId: System.Int32)

Add a new spot weld with/without a customID.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RemoveSpotWeld"></a>

### Connections.RemoveSpotWeld(spotWeldId: System.Int32)

Remove an existing spot weld.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportToCSVFile"></a>

### Connections.ExportToCSVFile(fileName: System.String)

Export the contents to a CSV file.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateSpotWeldFromHitPoint"></a>

### Connections.CreateSpotWeldFromHitPoint()

Add a new spot weld by using a Hit Point.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpotWeldGroup"></a>

### *class* Connections.SpotWeldGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SpotWeldGroup.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddSpotWeldConnection`](#Connections.AddSpotWeldConnection)             | Creates a new child SpotWeldConnection.                                           |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToFile`](#Connections.ExportToFile)                               | Exports all spot welds to user selected path.                                     |
| [`GenerateSpotWeldConnections`](#Connections.GenerateSpotWeldConnections) | Generate spot welds provided in the Weld input file.                              |
| [`GetChildren`](#id469)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                                    | Creates a new child Comment.                                                      |
| [`AddImage`](#id472)                                                      | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                                      | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                                        | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                                | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                                  | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`NumConnections`](#Connections.NumConnections)                                                                        | Gets the NumConnections.                                      |
| [`NumberOfLayers`](#id32)                                                                                              | Gets or sets the NumberOfLayers.                              |
| [`NumWeldPoints`](#id33)                                                                                               | Gets the NumWeldPoints.                                       |
| [`SpotWeldFileName`](#Connections.SpotWeldFileName)                                                                    | Gets or sets the SpotWeldFileName.                            |
| [`AngleTolerance`](#id34)                                                                                              | Gets or sets the AngleTolerance.                              |
| [`PenetrationTolerance`](#id200)                                                                                       | Gets or sets the PenetrationTolerance.                        |
| [`SnapToEdgeTolerance`](#id36)                                                                                         | Gets or sets the SnapToEdgeTolerance.                         |
| [`WeldRadius`](#Connections.WeldRadius)                                                                                | Gets or sets the WeldRadius.                                  |
| [`WeldSearchDistance`](#Connections.WeldSearchDistance)                                                                | Gets or sets the WeldSearchDistance.                          |
| [`ChildrenCreationMethod`](#Connections.ChildrenCreationMethod)                                                        | Gets or sets the ChildrenCreationMethod.                      |
| [`ConnectionBehavior`](#id37)                                                                                          | Gets or sets the ConnectionBehavior.                          |
| [`Units`](#Connections.Units)                                                                                          | Gets or sets the Units.                                       |
| [`WeldType`](#Connections.WeldType)                                                                                    | Gets or sets the WeldType.                                    |
| [`StiffnessBehavior`](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior)                   | Gets or sets the StiffnessBehavior.                           |
| [`ShellThicknessEffect`](#id201)                                                                                       | Gets or sets the ShellThicknessEffect.                        |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id28"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import SpotWeldGroup
```

<a id="id29"></a>

## Property detail

<a id="id30"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpotWeldGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* Connections.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NumConnections"></a>

### *property* Connections.NumConnections *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumConnections.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* Connections.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfLayers.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* Connections.NumWeldPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumWeldPoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpotWeldFileName"></a>

### *property* Connections.SpotWeldFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpotWeldFileName.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* Connections.AngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* Connections.PenetrationTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* Connections.SnapToEdgeTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToEdgeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.WeldRadius"></a>

### *property* Connections.WeldRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.WeldSearchDistance"></a>

### *property* Connections.WeldSearchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldSearchDistance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ChildrenCreationMethod"></a>

### *property* Connections.ChildrenCreationMethod *: [Ansys.Mechanical.DataModel.Enums.ConnectionCreationMethod](../../../../Mechanical/DataModel/Enums/ConnectionCreationMethod.md#ConnectionCreationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChildrenCreationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* Connections.ConnectionBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Units"></a>

### *property* Connections.Units *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Units.

<!-- !! processed by numpydoc !! -->

<a id="Connections.WeldType"></a>

### *property* Connections.WeldType *: [Ansys.Mechanical.DataModel.Enums.SpotWeldTypes](../../../../Mechanical/DataModel/Enums/SpotWeldTypes.md#SpotWeldTypes) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeldType.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* Connections.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../Mechanical/DataModel/Enums/StiffnessBehavior.md#StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* Connections.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

## Method detail

<a id="Connections.AddSpotWeldConnection"></a>

### Connections.AddSpotWeldConnection()

Creates a new child SpotWeldConnection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportToFile"></a>

### Connections.ExportToFile(filePath: System.String)

Exports all spot welds to user selected path.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateSpotWeldConnections"></a>

### Connections.GenerateSpotWeldConnections()

Generate spot welds provided in the Weld input file.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Beam"></a>

### *class* Connections.Beam

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Beam.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`PromoteToNamedSelection`](#id361)   | Run the PromoteToNamedSelection action.                                           |
|---------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#id362)      | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#id363)         | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#id364)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                    | Run the Delete action.                                                            |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                 | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                  | Creates a new child Image.                                                        |
| [`Activate`](#id473)                  | Activate the current object.                                                      |
| [`CopyTo`](#id474)                    | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)            | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)         | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)              | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BeamElementAPDLName`](#Connections.BeamElementAPDLName)                                                              | Gets or sets the BeamElementAPDLName.                         |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`MobileBeamMaterial`](#id329)                                                                                         | Gets or sets the MobileBeamMaterial.                          |
| [`MobileBody`](#id330)                                                                                                 | Gets the MobileBody.                                          |
| [`ReferenceBeamMaterial`](#id331)                                                                                      | Gets or sets the ReferenceBeamMaterial.                       |
| [`ReferenceBody`](#id332)                                                                                              | Gets the ReferenceBody.                                       |
| [`MobileBeamRadius`](#id338)                                                                                           | Gets or sets the MobileBeamRadius.                            |
| [`MobileXCoordinate`](#id274)                                                                                          | Gets or sets the MobileXCoordinate.                           |
| [`MobileYCoordinate`](#id275)                                                                                          | Gets or sets the MobileYCoordinate.                           |
| [`MobileZCoordinate`](#id276)                                                                                          | Gets or sets the MobileZCoordinate.                           |
| [`MobilePinballRegion`](#id334)                                                                                        | Gets or sets the MobilePinballRegion.                         |
| [`Radius`](#id333)                                                                                                     | Gets or sets the Radius.                                      |
| [`ReferenceBeamRadius`](#id339)                                                                                        | Gets or sets the ReferenceBeamRadius.                         |
| [`ReferenceXCoordinate`](#id278)                                                                                       | Gets or sets the ReferenceXCoordinate.                        |
| [`ReferenceYCoordinate`](#id279)                                                                                       | Gets or sets the ReferenceYCoordinate.                        |
| [`ReferenceZCoordinate`](#id280)                                                                                       | Gets or sets the ReferenceZCoordinate.                        |
| [`ReferencePinballRegion`](#id335)                                                                                     | Gets or sets the ReferencePinballRegion.                      |
| [`CrossSection`](../CrossSection.md#CrossSection)                                                                      | Gets the CrossSection.                                        |
| [`MobileAppliedBy`](#id344)                                                                                            | Gets or sets the MobileAppliedBy.                             |
| [`MobileBehavior`](#id340)                                                                                             | Gets or sets the MobileBehavior.                              |
| [`ReferenceAppliedBy`](#id345)                                                                                         | Gets or sets the ReferenceAppliedBy.                          |
| [`ReferenceBehavior`](#id341)                                                                                          | Gets or sets the ReferenceBehavior.                           |
| [`Scope`](#id287)                                                                                                      | Gets or sets the Scope.                                       |
| [`Visible`](#id288)                                                                                                    | Gets or sets the Visible.                                     |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`MobileCoordinateSystem`](#id347)                                                                                     | Gets or sets the MobileCoordinateSystem.                      |
| [`ReferenceCoordinateSystem`](#id348)                                                                                  | Gets or sets the ReferenceCoordinateSystem.                   |
| [`MobileLocation`](#id349)                                                                                             | Gets or sets the MobileLocation.                              |
| [`ReferenceLocationPoint`](#Connections.ReferenceLocationPoint)                                                        | Gets or sets the ReferenceLocationPoint.                      |
| [`ReferenceLocation`](#id350)                                                                                          | Gets or sets the ReferenceLocation.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id63"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Beam
```

<a id="id64"></a>

## Property detail

<a id="id65"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BeamElementAPDLName"></a>

### *property* Connections.BeamElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* Connections.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileBeamMaterial"></a>

### *property* Connections.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileBody"></a>

### *property* Connections.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceBeamMaterial"></a>

### *property* Connections.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceBody"></a>

### *property* Connections.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileBeamRadius"></a>

### *property* Connections.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileXCoordinate"></a>

### *property* Connections.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileYCoordinate"></a>

### *property* Connections.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileZCoordinate"></a>

### *property* Connections.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobilePinballRegion"></a>

### *property* Connections.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* Connections.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceBeamRadius"></a>

### *property* Connections.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceXCoordinate"></a>

### *property* Connections.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceYCoordinate"></a>

### *property* Connections.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceZCoordinate"></a>

### *property* Connections.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferencePinballRegion"></a>

### *property* Connections.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CrossSection"></a>

### *property* Connections.CrossSection *: [Ansys.Mechanical.DataModel.Enums.CrossSectionType](../../../../Mechanical/DataModel/Enums/CrossSectionType.md#CrossSectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileAppliedBy"></a>

### *property* Connections.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileBehavior"></a>

### *property* Connections.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceAppliedBy"></a>

### *property* Connections.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceBehavior"></a>

### *property* Connections.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Scope"></a>

### *property* Connections.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Visible"></a>

### *property* Connections.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileCoordinateSystem"></a>

### *property* Connections.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceCoordinateSystem"></a>

### *property* Connections.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileLocation"></a>

### *property* Connections.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceLocationPoint"></a>

### *property* Connections.ReferenceLocationPoint *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocationPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceLocation"></a>

### *property* Connections.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

## Method detail

<a id="Connections.PromoteToNamedSelection"></a>

### Connections.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PromoteToRemotePoint"></a>

### Connections.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Bearing"></a>

### *class* Connections.Bearing

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Bearing.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`PromoteToNamedSelection`](#id361)   | Run the PromoteToNamedSelection action.                                           |
|---------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#id362)      | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#id363)         | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#id364)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                    | Run the Delete action.                                                            |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                 | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                  | Creates a new child Image.                                                        |
| [`Activate`](#id473)                  | Activate the current object.                                                      |
| [`CopyTo`](#id474)                    | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)            | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)         | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)              | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ReferenceSet`](#Connections.ReferenceSet)                                                                            | Gets the ReferenceSet.                                        |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`AnsBCType`](#Connections.AnsBCType)                                                                                  | Gets the AnsBCType.                                           |
| [`MobileBeamMaterial`](#id329)                                                                                         | Gets or sets the MobileBeamMaterial.                          |
| [`MobileBody`](#id330)                                                                                                 | Gets the MobileBody.                                          |
| [`ReferenceBeamMaterial`](#id331)                                                                                      | Gets or sets the ReferenceBeamMaterial.                       |
| [`ReferenceBodyName`](#Connections.ReferenceBodyName)                                                                  | Gets the ReferenceBodyName.                                   |
| [`DampingC11`](#Connections.DampingC11)                                                                                | Gets the DampingC11.                                          |
| [`DampingC12`](#Connections.DampingC12)                                                                                | Gets the DampingC12.                                          |
| [`DampingC21`](#Connections.DampingC21)                                                                                | Gets the DampingC21.                                          |
| [`DampingC22`](#Connections.DampingC22)                                                                                | Gets the DampingC22.                                          |
| [`StiffnessK11`](#Connections.StiffnessK11)                                                                            | Gets the StiffnessK11.                                        |
| [`StiffnessK12`](#Connections.StiffnessK12)                                                                            | Gets the StiffnessK12.                                        |
| [`StiffnessK21`](#Connections.StiffnessK21)                                                                            | Gets the StiffnessK21.                                        |
| [`StiffnessK22`](#Connections.StiffnessK22)                                                                            | Gets the StiffnessK22.                                        |
| [`MobileBeamRadius`](#id338)                                                                                           | Gets or sets the MobileBeamRadius.                            |
| [`MobileXCoordinate`](#id274)                                                                                          | Gets or sets the MobileXCoordinate.                           |
| [`MobileYCoordinate`](#id275)                                                                                          | Gets or sets the MobileYCoordinate.                           |
| [`MobileZCoordinate`](#id276)                                                                                          | Gets or sets the MobileZCoordinate.                           |
| [`MobilePinballSize`](#Connections.MobilePinballSize)                                                                  | Gets or sets the MobilePinballSize.                           |
| [`ReferenceBeamRadius`](#id339)                                                                                        | Gets or sets the ReferenceBeamRadius.                         |
| [`ReferenceXCoordinate`](#id278)                                                                                       | Gets or sets the ReferenceXCoordinate.                        |
| [`ReferenceYCoordinate`](#id279)                                                                                       | Gets or sets the ReferenceYCoordinate.                        |
| [`ReferenceZCoordinate`](#id280)                                                                                       | Gets or sets the ReferenceZCoordinate.                        |
| [`ReferencePinballRegion`](#id335)                                                                                     | Gets or sets the ReferencePinballRegion.                      |
| [`MobileBehavior`](#id340)                                                                                             | Gets or sets the MobileBehavior.                              |
| [`ReferenceBehavior`](#id341)                                                                                          | Gets or sets the ReferenceBehavior.                           |
| [`ReferenceRotationPlane`](#Connections.ReferenceRotationPlane)                                                        | Gets or sets the ReferenceRotationPlane.                      |
| [`ConnectionType`](#id412)                                                                                             | Gets or sets the ConnectionType.                              |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`MobileCoordinateSystem`](#id347)                                                                                     | Gets or sets the MobileCoordinateSystem.                      |
| [`ReferenceCoordinateSystem`](#id348)                                                                                  | Gets or sets the ReferenceCoordinateSystem.                   |
| [`MobileLocation`](#id349)                                                                                             | Gets or sets the MobileLocation.                              |
| [`ReferenceLocation`](#id350)                                                                                          | Gets or sets the ReferenceLocation.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id97"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Bearing
```

<a id="id98"></a>

## Property detail

<a id="Connections.ReferenceSet"></a>

### *property* Connections.ReferenceSet *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceSet.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBearingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AnsBCType"></a>

### *property* Connections.AnsBCType *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnsBCType.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* Connections.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* Connections.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* Connections.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceBodyName"></a>

### *property* Connections.ReferenceBodyName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBodyName.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DampingC11"></a>

### *property* Connections.DampingC11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC11.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DampingC12"></a>

### *property* Connections.DampingC12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC12.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DampingC21"></a>

### *property* Connections.DampingC21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC21.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DampingC22"></a>

### *property* Connections.DampingC22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingC22.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StiffnessK11"></a>

### *property* Connections.StiffnessK11 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK11.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StiffnessK12"></a>

### *property* Connections.StiffnessK12 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK12.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StiffnessK21"></a>

### *property* Connections.StiffnessK21 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK21.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StiffnessK22"></a>

### *property* Connections.StiffnessK22 *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StiffnessK22.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* Connections.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* Connections.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* Connections.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* Connections.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobilePinballSize"></a>

### *property* Connections.MobilePinballSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballSize.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* Connections.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* Connections.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* Connections.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* Connections.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* Connections.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* Connections.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* Connections.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceRotationPlane"></a>

### *property* Connections.ReferenceRotationPlane *: [Ansys.Mechanical.DataModel.Enums.RotationPlane](../../../../Mechanical/DataModel/Enums/RotationPlane.md#RotationPlane) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRotationPlane.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ConnectionType"></a>

### *property* Connections.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.ConnectionScopingType](../../../../Mechanical/DataModel/Enums/ConnectionScopingType.md#ConnectionScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* Connections.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* Connections.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* Connections.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* Connections.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

## Method detail

<a id="id129"></a>

### Connections.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### Connections.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BodyInteraction"></a>

### *class* Connections.BodyInteraction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BodyInteraction.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Delete`](#id467)                  | Run the Delete action.                                                            |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id469)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                | Creates a new child Image.                                                        |
| [`Activate`](#id473)                | Activate the current object.                                                      |
| [`CopyTo`](#id474)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DecayConstant`](#id185)                                                                                              | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#id186)                                                                                         | Gets or sets the DynamicCoefficient.                          |
| [`NormalForceExponent`](#id188)                                                                                        | Gets or sets the NormalForceExponent.                         |
| [`NormalStressExponent`](#id189)                                                                                       | Gets or sets the NormalStressExponent.                        |
| [`ShearForceExponent`](#id190)                                                                                         | Gets or sets the ShearForceExponent.                          |
| [`ShearStressExponent`](#id191)                                                                                        | Gets or sets the ShearStressExponent.                         |
| [`FrictionCoefficient`](#id327)                                                                                        | Gets or sets the FrictionCoefficient.                         |
| [`MaximumOffset`](#Connections.MaximumOffset)                                                                          | Gets or sets the MaximumOffset.                               |
| [`NormalForceLimit`](#id194)                                                                                           | Gets or sets the NormalForceLimit.                            |
| [`NormalStressLimit`](#id195)                                                                                          | Gets or sets the NormalStressLimit.                           |
| [`ShearForceLimit`](#id196)                                                                                            | Gets or sets the ShearForceLimit.                             |
| [`ShearStressLimit`](#id197)                                                                                           | Gets or sets the ShearStressLimit.                            |
| [`Breakable`](#id198)                                                                                                  | Gets or sets the Breakable.                                   |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`Location`](#id416)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id149"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import BodyInteraction
```

<a id="id150"></a>

## Property detail

<a id="id151"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DecayConstant"></a>

### *property* Connections.DecayConstant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DynamicCoefficient"></a>

### *property* Connections.DynamicCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalForceExponent"></a>

### *property* Connections.NormalForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalStressExponent"></a>

### *property* Connections.NormalStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShearForceExponent"></a>

### *property* Connections.ShearForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShearStressExponent"></a>

### *property* Connections.ShearStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FrictionCoefficient"></a>

### *property* Connections.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MaximumOffset"></a>

### *property* Connections.MaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalForceLimit"></a>

### *property* Connections.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalStressLimit"></a>

### *property* Connections.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShearForceLimit"></a>

### *property* Connections.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShearStressLimit"></a>

### *property* Connections.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Breakable"></a>

### *property* Connections.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* Connections.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Location"></a>

### *property* Connections.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

## Method detail

<a id="id163"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactRegion"></a>

### *class* Connections.ContactRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactRegion.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SearchConnectionsForDuplicatePairs`](#id429)                        | Run the SearchConnectionsForDuplicatePairs action.                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`FlipContactTarget`](#id214)                                         | Run the FlipContactTarget action.                                                 |
| [`SetDefaultAPDLNames`](#id434)                                       | Run the SetDefaultAPDLNames action.                                               |
| [`SaveContactRegionSettings`](#Connections.SaveContactRegionSettings) | Run the SaveContactRegionSettings action.                                         |
| [`LoadContactRegionSettings`](#Connections.LoadContactRegionSettings) | Run the LoadContactRegionSettings action.                                         |
| [`ResetToDefault`](#id215)                                            | Run the ResetToDefault action.                                                    |
| [`ResetToDefault`](#id215)                                            | Run the ResetToDefault action with optional verification dialog.                  |
| [`PromoteToNamedSelection`](#id361)                                   | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#id362)                                      | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#id363)                                         | Creates a new CommandSnippet                                                      |
| [`AddPythonCodeEventBased`](#Connections.AddPythonCodeEventBased)     | Creates a new PythonCodeEventBased                                                |
| [`RenameBasedOnDefinition`](#id364)                                   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                                                    | Run the Delete action.                                                            |
| [`GetChildren`](#id469)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                                | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                                                 | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                                                  | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                                  | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                                    | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                                   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                            | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                              | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ContactAPDLName`](#Connections.ContactAPDLName)                                                                      | Gets or sets the ContactAPDLName.                             |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TargetAPDLName`](#Connections.TargetAPDLName)                                                                        | Gets or sets the TargetAPDLName.                              |
| [`SourceLocation`](#id181)                                                                                             | Gets or sets the SourceLocation.                              |
| [`TargetLocation`](#id182)                                                                                             | Gets or sets the TargetLocation.                              |
| [`AutomaticNormalStiffness`](#Connections.AutomaticNormalStiffness)                                                    | Gets or sets the AutomaticNormalStiffness.                    |
| [`BeamMaterialName`](#Connections.BeamMaterialName)                                                                    | Gets or sets the BeamMaterialName.                            |
| [`BeamBeamDetection`](#Connections.BeamBeamDetection)                                                                  | Gets or sets the BeamBeamDetection.                           |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`StabilizationDampingFactor`](#Connections.StabilizationDampingFactor)                                                | Gets or sets the StabilizationDampingFactor.                  |
| [`DecayConstant`](#id185)                                                                                              | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#id186)                                                                                         | Gets or sets the DynamicCoefficient.                          |
| [`ElasticSlipToleranceFactor`](#Connections.ElasticSlipToleranceFactor)                                                | Gets or sets the ElasticSlipToleranceFactor.                  |
| [`FrictionCoefficient`](#id327)                                                                                        | Gets or sets the FrictionCoefficient.                         |
| [`InitialClearanceFactor`](#Connections.InitialClearanceFactor)                                                        | Gets or sets the InitialClearanceFactor.                      |
| [`NormalForceExponent`](#id188)                                                                                        | Gets or sets the NormalForceExponent.                         |
| [`NormalStiffnessFactor`](#Connections.NormalStiffnessFactor)                                                          | Gets or sets the NormalStiffnessFactor.                       |
| [`NormalStressExponent`](#id189)                                                                                       | Gets or sets the NormalStressExponent.                        |
| [`PenetrationToleranceFactor`](#Connections.PenetrationToleranceFactor)                                                | Gets or sets the PenetrationToleranceFactor.                  |
| [`PinballFactor`](#id455)                                                                                              | Gets or sets the PinballFactor.                               |
| [`PressureAtZeroPenetrationFactor`](#Connections.PressureAtZeroPenetrationFactor)                                      | Gets or sets the PressureAtZeroPenetrationFactor.             |
| [`RestitutionFactor`](#id328)                                                                                          | Gets or sets the RestitutionFactor.                           |
| [`ShearForceExponent`](#id190)                                                                                         | Gets or sets the ShearForceExponent.                          |
| [`ShearStressExponent`](#id191)                                                                                        | Gets or sets the ShearStressExponent.                         |
| [`ContactBodies`](#id192)                                                                                              | Gets the ContactBodies.                                       |
| [`TargetBodies`](#id193)                                                                                               | Gets the TargetBodies.                                        |
| [`AutomaticDetectionValue`](#Connections.AutomaticDetectionValue)                                                      | Gets the AutomaticDetectionValue.                             |
| [`BeamRadius`](#Connections.BeamRadius)                                                                                | Gets or sets the BeamRadius.                                  |
| [`ThreadAngle`](#Connections.ThreadAngle)                                                                              | Gets or sets the ThreadAngle.                                 |
| [`MeanPitchDiameter`](#Connections.MeanPitchDiameter)                                                                  | Gets or sets the MeanPitchDiameter.                           |
| [`PitchDistance`](#Connections.PitchDistance)                                                                          | Gets or sets the PitchDistance.                               |
| [`BondedMaximumOffset`](#Connections.BondedMaximumOffset)                                                              | Gets or sets the BondedMaximumOffset.                         |
| [`ElasticSlipToleranceValue`](#Connections.ElasticSlipToleranceValue)                                                  | Gets or sets the ElasticSlipToleranceValue.                   |
| [`ElectricCapacitanceValue`](#Connections.ElectricCapacitanceValue)                                                    | Gets or sets the ElectricCapacitanceValue.                    |
| [`ElectricConductanceValue`](#Connections.ElectricConductanceValue)                                                    | Gets or sets the ElectricConductanceValue.                    |
| [`InitialClearanceValue`](#Connections.InitialClearanceValue)                                                          | Gets or sets the InitialClearanceValue.                       |
| [`NormalForceLimit`](#id194)                                                                                           | Gets or sets the NormalForceLimit.                            |
| [`NormalStiffnessValue`](#Connections.NormalStiffnessValue)                                                            | Gets or sets the NormalStiffnessValue.                        |
| [`NormalStressLimit`](#id195)                                                                                          | Gets or sets the NormalStressLimit.                           |
| [`PenetrationToleranceValue`](#Connections.PenetrationToleranceValue)                                                  | Gets or sets the PenetrationToleranceValue.                   |
| [`PinballRadius`](#Connections.PinballRadius)                                                                          | Gets or sets the PinballRadius.                               |
| [`PressureAtZeroPenetrationValue`](#Connections.PressureAtZeroPenetrationValue)                                        | Gets or sets the PressureAtZeroPenetrationValue.              |
| [`ShearForceLimit`](#id196)                                                                                            | Gets or sets the ShearForceLimit.                             |
| [`ShearStressLimit`](#id197)                                                                                           | Gets or sets the ShearStressLimit.                            |
| [`ThermalConductanceValue`](#Connections.ThermalConductanceValue)                                                      | Gets or sets the ThermalConductanceValue.                     |
| [`TrimTolerance`](#Connections.TrimTolerance)                                                                          | Gets or sets the TrimTolerance.                               |
| [`UserOffset`](#Connections.UserOffset)                                                                                | Gets or sets the UserOffset.                                  |
| [`LineLineDetection`](#Connections.LineLineDetection)                                                                  | Gets or sets the LineLineDetection.                           |
| [`BeamBeamModel`](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#BeamBeamModel)                               | Gets or sets the BeamBeamModel.                               |
| [`Handedness`](#Connections.Handedness)                                                                                | Gets or sets the Handedness.                                  |
| [`ThreadType`](#Connections.ThreadType)                                                                                | Gets or sets the ThreadType.                                  |
| [`Breakable`](#id198)                                                                                                  | Gets or sets the Breakable.                                   |
| [`ConstraintType`](#Connections.ConstraintType)                                                                        | Gets or sets the ConstraintType.                              |
| [`ContactGeometryCorrection`](#Connections.ContactGeometryCorrection)                                                  | Gets or sets the ContactGeometryCorrection.                   |
| [`ContactFormulation`](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation)                | Gets or sets the ContactFormulation.                          |
| [`ContactOrientation`](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ContactOrientation)                | Gets or sets the ContactOrientation.                          |
| [`ContactShellFace`](#Connections.ContactShellFace)                                                                    | Gets or sets the ContactShellFace.                            |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`ContinuousDistanceComputation`](#Connections.ContinuousDistanceComputation)                                          | Gets or sets the ContinuousDistanceComputation.               |
| [`DetectionMethod`](#Connections.DetectionMethod)                                                                      | Gets or sets the DetectionMethod.                             |
| [`EdgeContactType`](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#EdgeContactType)                         | Gets or sets the EdgeContactType.                             |
| [`InitialClearance`](#Connections.InitialClearance)                                                                    | Gets or sets the InitialClearance.                            |
| [`InterfaceTreatment`](#Connections.InterfaceTreatment)                                                                | Gets or sets the InterfaceTreatment.                          |
| [`ScopeMode`](#Connections.ScopeMode)                                                                                  | Gets the ScopeMode.                                           |
| [`NormalStiffnessValueType`](#Connections.NormalStiffnessValueType)                                                    | Gets or sets the NormalStiffnessValueType.                    |
| [`PinballRegion`](#Connections.PinballRegion)                                                                          | Gets or sets the PinballRegion.                               |
| [`PressureAtZeroPenetration`](#Connections.PressureAtZeroPenetration)                                                  | Gets or sets the PressureAtZeroPenetration.                   |
| [`RBDContactDetection`](#Connections.RBDContactDetection)                                                              | Gets or sets the RBDContactDetection.                         |
| [`SmallSliding`](#Connections.SmallSliding)                                                                            | Gets or sets the SmallSliding.                                |
| [`Behavior`](#Connections.Behavior)                                                                                    | Gets or sets the Behavior.                                    |
| [`TargetGeometryCorrection`](#Connections.TargetGeometryCorrection)                                                    | Gets or sets the TargetGeometryCorrection.                    |
| [`TargetOrientation`](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#TargetOrientation)                   | Gets or sets the TargetOrientation.                           |
| [`TargetShellFace`](#Connections.TargetShellFace)                                                                      | Gets or sets the TargetShellFace.                             |
| [`TimeStepControls`](#Connections.TimeStepControls)                                                                    | Gets or sets the TimeStepControls.                            |
| [`TrimContact`](#Connections.TrimContact)                                                                              | Gets or sets the TrimContact.                                 |
| [`UpdateStiffness`](#Connections.UpdateStiffness)                                                                      | Gets or sets the UpdateStiffness.                             |
| [`ElasticSlipTolerance`](#Connections.ElasticSlipTolerance)                                                            | Gets or sets the ElasticSlipTolerance.                        |
| [`PenetrationTolerance`](#id200)                                                                                       | Gets or sets the PenetrationTolerance.                        |
| [`DisplayElementNormal`](#Connections.DisplayElementNormal)                                                            | Gets or sets the DisplayElementNormal.                        |
| [`FlipContact`](#Connections.FlipContact)                                                                              | Gets or sets the FlipContact.                                 |
| [`FlipTarget`](#Connections.FlipTarget)                                                                                | Gets or sets the FlipTarget.                                  |
| [`Protected`](#Connections.Protected)                                                                                  | Gets or sets the Protected.                                   |
| [`ShellThicknessEffect`](#id201)                                                                                       | Gets or sets the ShellThicknessEffect.                        |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`AutomaticElectricCapacitance`](#Connections.AutomaticElectricCapacitance)                                            | Gets or sets the AutomaticElectricCapacitance.                |
| [`AutomaticElectricConductance`](#Connections.AutomaticElectricConductance)                                            | Gets or sets the AutomaticElectricConductance.                |
| [`AutomaticThermalConductance`](#Connections.AutomaticThermalConductance)                                              | Gets or sets the AutomaticThermalConductance.                 |
| [`ContactCenterPoint`](#Connections.ContactCenterPoint)                                                                | Gets or sets the ContactCenterPoint.                          |
| [`ContactEndingPoint`](#Connections.ContactEndingPoint)                                                                | Gets or sets the ContactEndingPoint.                          |
| [`ContactStartingPoint`](#Connections.ContactStartingPoint)                                                            | Gets or sets the ContactStartingPoint.                        |
| [`SharedSourceBody`](#Connections.SharedSourceBody)                                                                    | Gets or sets the SharedSourceBody.                            |
| [`SharedTargetBody`](#Connections.SharedTargetBody)                                                                    | Gets or sets the SharedTargetBody.                            |
| [`TargetCenterPoint`](#Connections.TargetCenterPoint)                                                                  | Gets or sets the TargetCenterPoint.                           |
| [`TargetEndingPoint`](#Connections.TargetEndingPoint)                                                                  | Gets or sets the TargetEndingPoint.                           |
| [`TargetStartingPoint`](#Connections.TargetStartingPoint)                                                              | Gets or sets the TargetStartingPoint.                         |
| [`SharedSourceReverseNormalLocation`](#Connections.SharedSourceReverseNormalLocation)                                  | Gets or sets the SharedSourceReverseNormalLocation.           |
| [`SharedTargetReverseNormalLocation`](#Connections.SharedTargetReverseNormalLocation)                                  | Gets or sets the SharedTargetReverseNormalLocation.           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id179"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ContactRegion
```

<a id="id180"></a>

## Property detail

<a id="Connections.ContactAPDLName"></a>

### *property* Connections.ContactAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetAPDLName"></a>

### *property* Connections.TargetAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* Connections.SourceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* Connections.TargetLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticNormalStiffness"></a>

### *property* Connections.AutomaticNormalStiffness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BeamMaterialName"></a>

### *property* Connections.BeamMaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterialName.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BeamBeamDetection"></a>

### *property* Connections.BeamBeamDetection *: [Ansys.Mechanical.DataModel.Enums.BeamBeamContactDetectionType](../../../../Mechanical/DataModel/Enums/BeamBeamContactDetectionType.md#BeamBeamContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamDetection.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* Connections.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="Connections.StabilizationDampingFactor"></a>

### *property* Connections.StabilizationDampingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* Connections.DecayConstant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* Connections.DynamicCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElasticSlipToleranceFactor"></a>

### *property* Connections.ElasticSlipToleranceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* Connections.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InitialClearanceFactor"></a>

### *property* Connections.InitialClearanceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceFactor.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* Connections.NormalForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalStiffnessFactor"></a>

### *property* Connections.NormalStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* Connections.NormalStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PenetrationToleranceFactor"></a>

### *property* Connections.PenetrationToleranceFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PinballFactor"></a>

### *property* Connections.PinballFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PressureAtZeroPenetrationFactor"></a>

### *property* Connections.PressureAtZeroPenetrationFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RestitutionFactor"></a>

### *property* Connections.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* Connections.ShearForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* Connections.ShearStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* Connections.ContactBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* Connections.TargetBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticDetectionValue"></a>

### *property* Connections.AutomaticDetectionValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutomaticDetectionValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BeamRadius"></a>

### *property* Connections.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ThreadAngle"></a>

### *property* Connections.ThreadAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadAngle.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MeanPitchDiameter"></a>

### *property* Connections.MeanPitchDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeanPitchDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PitchDistance"></a>

### *property* Connections.PitchDistance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PitchDistance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BondedMaximumOffset"></a>

### *property* Connections.BondedMaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BondedMaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElasticSlipToleranceValue"></a>

### *property* Connections.ElasticSlipToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElectricCapacitanceValue"></a>

### *property* Connections.ElectricCapacitanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricCapacitanceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElectricConductanceValue"></a>

### *property* Connections.ElectricConductanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InitialClearanceValue"></a>

### *property* Connections.InitialClearanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearanceValue.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* Connections.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalStiffnessValue"></a>

### *property* Connections.NormalStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* Connections.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PenetrationToleranceValue"></a>

### *property* Connections.PenetrationToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PinballRadius"></a>

### *property* Connections.PinballRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PressureAtZeroPenetrationValue"></a>

### *property* Connections.PressureAtZeroPenetrationValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetrationValue.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* Connections.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* Connections.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ThermalConductanceValue"></a>

### *property* Connections.ThermalConductanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductanceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TrimTolerance"></a>

### *property* Connections.TrimTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.UserOffset"></a>

### *property* Connections.UserOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserOffset.

<!-- !! processed by numpydoc !! -->

<a id="Connections.LineLineDetection"></a>

### *property* Connections.LineLineDetection *: [Ansys.Mechanical.DataModel.Enums.LineLineContactDetectionType](../../../../Mechanical/DataModel/Enums/LineLineContactDetectionType.md#LineLineContactDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineLineDetection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BeamBeamModel"></a>

### *property* Connections.BeamBeamModel *: [Ansys.Mechanical.DataModel.Enums.BeamBeamModel](../../../../Mechanical/DataModel/Enums/BeamBeamModel.md#BeamBeamModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamBeamModel.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Handedness"></a>

### *property* Connections.Handedness *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadHand](../../../../Mechanical/DataModel/Enums/ContactBoltThreadHand.md#ContactBoltThreadHand) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Handedness.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ThreadType"></a>

### *property* Connections.ThreadType *: [Ansys.Mechanical.DataModel.Enums.ContactBoltThreadType](../../../../Mechanical/DataModel/Enums/ContactBoltThreadType.md#ContactBoltThreadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThreadType.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* Connections.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ConstraintType"></a>

### *property* Connections.ConstraintType *: [Ansys.Mechanical.DataModel.Enums.ContactConstraintType](../../../../Mechanical/DataModel/Enums/ContactConstraintType.md#ContactConstraintType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstraintType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactGeometryCorrection"></a>

### *property* Connections.ContactGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.ContactCorrection](../../../../Mechanical/DataModel/Enums/ContactCorrection.md#ContactCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactFormulation"></a>

### *property* Connections.ContactFormulation *: [Ansys.Mechanical.DataModel.Enums.ContactFormulation](../../../../Mechanical/DataModel/Enums/ContactFormulation.md#ContactFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactOrientation"></a>

### *property* Connections.ContactOrientation *: [Ansys.Mechanical.DataModel.Enums.ContactOrientation](../../../../Mechanical/DataModel/Enums/ContactOrientation.md#ContactOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactOrientation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactShellFace"></a>

### *property* Connections.ContactShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactShellFace.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* Connections.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContinuousDistanceComputation"></a>

### *property* Connections.ContinuousDistanceComputation *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContinuousDistanceComputation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DetectionMethod"></a>

### *property* Connections.DetectionMethod *: [Ansys.Mechanical.DataModel.Enums.ContactDetectionPoint](../../../../Mechanical/DataModel/Enums/ContactDetectionPoint.md#ContactDetectionPoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EdgeContactType"></a>

### *property* Connections.EdgeContactType *: [Ansys.Mechanical.DataModel.Enums.EdgeContactType](../../../../Mechanical/DataModel/Enums/EdgeContactType.md#EdgeContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeContactType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InitialClearance"></a>

### *property* Connections.InitialClearance *: [Ansys.Mechanical.DataModel.Enums.InitialClearanceType](../../../../Mechanical/DataModel/Enums/InitialClearanceType.md#InitialClearanceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialClearance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InterfaceTreatment"></a>

### *property* Connections.InterfaceTreatment *: [Ansys.Mechanical.DataModel.Enums.ContactInitialEffect](../../../../Mechanical/DataModel/Enums/ContactInitialEffect.md#ContactInitialEffect) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceTreatment.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ScopeMode"></a>

### *property* Connections.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NormalStiffnessValueType"></a>

### *property* Connections.NormalStiffnessValueType *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValueType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PinballRegion"></a>

### *property* Connections.PinballRegion *: [Ansys.Mechanical.DataModel.Enums.ContactPinballType](../../../../Mechanical/DataModel/Enums/ContactPinballType.md#ContactPinballType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PressureAtZeroPenetration"></a>

### *property* Connections.PressureAtZeroPenetration *: [Ansys.Mechanical.DataModel.Enums.PressureAtZeroPenetrationType](../../../../Mechanical/DataModel/Enums/PressureAtZeroPenetrationType.md#PressureAtZeroPenetrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureAtZeroPenetration.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RBDContactDetection"></a>

### *property* Connections.RBDContactDetection *: [Ansys.Mechanical.DataModel.Enums.DSRBDContactDetection](../../../../Mechanical/DataModel/Enums/DSRBDContactDetection.md#DSRBDContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RBDContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SmallSliding"></a>

### *property* Connections.SmallSliding *: [Ansys.Mechanical.DataModel.Enums.ContactSmallSlidingType](../../../../Mechanical/DataModel/Enums/ContactSmallSlidingType.md#ContactSmallSlidingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SmallSliding.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Behavior"></a>

### *property* Connections.Behavior *: [Ansys.Mechanical.DataModel.Enums.ContactBehavior](../../../../Mechanical/DataModel/Enums/ContactBehavior.md#ContactBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetGeometryCorrection"></a>

### *property* Connections.TargetGeometryCorrection *: [Ansys.Mechanical.DataModel.Enums.TargetCorrection](../../../../Mechanical/DataModel/Enums/TargetCorrection.md#TargetCorrection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetGeometryCorrection.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetOrientation"></a>

### *property* Connections.TargetOrientation *: [Ansys.Mechanical.DataModel.Enums.TargetOrientation](../../../../Mechanical/DataModel/Enums/TargetOrientation.md#TargetOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetOrientation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetShellFace"></a>

### *property* Connections.TargetShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TimeStepControls"></a>

### *property* Connections.TimeStepControls *: [Ansys.Mechanical.DataModel.Enums.ContactTimeStepControls](../../../../Mechanical/DataModel/Enums/ContactTimeStepControls.md#ContactTimeStepControls) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepControls.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TrimContact"></a>

### *property* Connections.TrimContact *: [Ansys.Mechanical.DataModel.Enums.ContactTrimType](../../../../Mechanical/DataModel/Enums/ContactTrimType.md#ContactTrimType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TrimContact.

<!-- !! processed by numpydoc !! -->

<a id="Connections.UpdateStiffness"></a>

### *property* Connections.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#UpdateContactStiffness) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElasticSlipTolerance"></a>

### *property* Connections.ElasticSlipTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactElasticSlipToleranceType](../../../../Mechanical/DataModel/Enums/ContactElasticSlipToleranceType.md#ContactElasticSlipToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticSlipTolerance.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* Connections.PenetrationTolerance *: [Ansys.Mechanical.DataModel.Enums.ContactPenetrationToleranceType](../../../../Mechanical/DataModel/Enums/ContactPenetrationToleranceType.md#ContactPenetrationToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DisplayElementNormal"></a>

### *property* Connections.DisplayElementNormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayElementNormal.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FlipContact"></a>

### *property* Connections.FlipContact *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipContact.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FlipTarget"></a>

### *property* Connections.FlipTarget *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FlipTarget.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Protected"></a>

### *property* Connections.Protected *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Protected.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* Connections.ShellThicknessEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessEffect.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticElectricCapacitance"></a>

### *property* Connections.AutomaticElectricCapacitance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricCapacitance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticElectricConductance"></a>

### *property* Connections.AutomaticElectricConductance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticElectricConductance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticThermalConductance"></a>

### *property* Connections.AutomaticThermalConductance *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticThermalConductance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactCenterPoint"></a>

### *property* Connections.ContactCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactEndingPoint"></a>

### *property* Connections.ContactEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactStartingPoint"></a>

### *property* Connections.ContactStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SharedSourceBody"></a>

### *property* Connections.SharedSourceBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SharedTargetBody"></a>

### *property* Connections.SharedTargetBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetCenterPoint"></a>

### *property* Connections.TargetCenterPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetCenterPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetEndingPoint"></a>

### *property* Connections.TargetEndingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetEndingPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TargetStartingPoint"></a>

### *property* Connections.TargetStartingPoint *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TargetStartingPoint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SharedSourceReverseNormalLocation"></a>

### *property* Connections.SharedSourceReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedSourceReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SharedTargetReverseNormalLocation"></a>

### *property* Connections.SharedTargetReverseNormalLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedTargetReverseNormalLocation.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

## Method detail

<a id="id213"></a>

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### Connections.FlipContactTarget()

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SetDefaultAPDLNames"></a>

### Connections.SetDefaultAPDLNames()

Run the SetDefaultAPDLNames action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SaveContactRegionSettings"></a>

### Connections.SaveContactRegionSettings(fName: System.String)

Run the SaveContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.LoadContactRegionSettings"></a>

### Connections.LoadContactRegionSettings(fName: System.String)

Run the LoadContactRegionSettings action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ResetToDefault"></a>

### Connections.ResetToDefault()

Run the ResetToDefault action.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### Connections.ResetToDefault(b_Verify: System.Boolean)

Run the ResetToDefault action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### Connections.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### Connections.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddPythonCodeEventBased"></a>

### Connections.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactTool"></a>

### *class* Connections.ContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#Connections.ClearGeneratedData)   | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#Connections.EvaluateAllResults)   | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#id394)                 | Run the GenerateInitialContactResults action.                                     |
| [`Delete`](#id467)                                        | Run the Delete action.                                                            |
| [`GetChildren`](#id469)                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                    | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                                      | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                      | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                        | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                  | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ScopingMethod`](#Connections.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                               |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#id416)                                                                                                   | Gets or sets the Location.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id236"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ContactTool
```

<a id="id237"></a>

## Property detail

<a id="Connections.ScopingMethod"></a>

### *property* Connections.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* Connections.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

## Method detail

<a id="Connections.ClearGeneratedData"></a>

### Connections.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EvaluateAllResults"></a>

### Connections.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateInitialContactResults"></a>

### Connections.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Spring"></a>

### *class* Connections.Spring

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Spring.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`PromoteToNamedSelection`](#id361)   | Run the PromoteToNamedSelection action.                                           |
|---------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#id362)      | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#id363)         | Creates a new CommandSnippet                                                      |
| [`RenameBasedOnDefinition`](#id364)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                    | Run the Delete action.                                                            |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                 | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                  | Creates a new child Image.                                                        |
| [`Activate`](#id473)                  | Activate the current object.                                                      |
| [`CopyTo`](#id474)                    | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                 | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)            | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)         | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)              | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NonLinearLongitudinalStiffness`](#Connections.NonLinearLongitudinalStiffness)                                        | Gets the non linear longitudinal stiffness defined in the tabular data.   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`LongitudinalStiffness`](#Connections.LongitudinalStiffness)                                                          | Gets or sets the constant longitudinal stiffness (expressed in N/m).      |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.                        |
| [`Material`](../Material.md#Material)                                                                                  | Gets or sets the Material.                                                |
| [`MobileBeamMaterial`](#id329)                                                                                         | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](#id330)                                                                                                 | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](#id331)                                                                                      | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](#id332)                                                                                              | Gets the ReferenceBody.                                                   |
| [`SpringElementAPDLName`](#Connections.SpringElementAPDLName)                                                          | Gets or sets the SpringElementAPDLName.                                   |
| [`MobileBeamRadius`](#id338)                                                                                           | Gets or sets the MobileBeamRadius.                                        |
| [`MobileXCoordinate`](#id274)                                                                                          | Gets or sets the MobileXCoordinate.                                       |
| [`MobileYCoordinate`](#id275)                                                                                          | Gets or sets the MobileYCoordinate.                                       |
| [`MobileZCoordinate`](#id276)                                                                                          | Gets or sets the MobileZCoordinate.                                       |
| [`ReferenceBeamRadius`](#id339)                                                                                        | Gets or sets the ReferenceBeamRadius.                                     |
| [`ReferenceXCoordinate`](#id278)                                                                                       | Gets or sets the ReferenceXCoordinate.                                    |
| [`ReferenceYCoordinate`](#id279)                                                                                       | Gets or sets the ReferenceYCoordinate.                                    |
| [`ReferenceZCoordinate`](#id280)                                                                                       | Gets or sets the ReferenceZCoordinate.                                    |
| [`SpringLength`](#Connections.SpringLength)                                                                            | Gets the SpringLength.                                                    |
| [`LongitudinalDamping`](#Connections.LongitudinalDamping)                                                              | Gets or sets the LongitudinalDamping.                                     |
| [`MobilePinballRegion`](#id334)                                                                                        | Gets or sets the MobilePinballRegion.                                     |
| [`FreeLength`](#Connections.FreeLength)                                                                                | Gets or sets the FreeLength.                                              |
| [`Load`](#Connections.Load)                                                                                            | Gets or sets the Load.                                                    |
| [`Rotation`](#Connections.Rotation)                                                                                    | Gets or sets the Rotation.                                                |
| [`Torque`](#Connections.Torque)                                                                                        | Gets or sets the Torque.                                                  |
| [`ReferencePinballRegion`](#id335)                                                                                     | Gets or sets the ReferencePinballRegion.                                  |
| [`TorsionalDamping`](#id336)                                                                                           | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](#id337)                                                                                         | Gets or sets the TorsionalStiffness.                                      |
| [`MobileAppliedBy`](#id344)                                                                                            | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](#id345)                                                                                         | Gets or sets the ReferenceAppliedBy.                                      |
| [`SpringBehavior`](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#SpringBehavior)                            | Gets or sets the SpringBehavior.                                          |
| [`MobileBehavior`](#id340)                                                                                             | Gets or sets the MobileBehavior.                                          |
| [`PreloadType`](#Connections.PreloadType)                                                                              | Gets or sets the PreloadType.                                             |
| [`ReferenceBehavior`](#id341)                                                                                          | Gets or sets the ReferenceBehavior.                                       |
| [`Scope`](#id287)                                                                                                      | Gets or sets the Scope.                                                   |
| [`SpringType`](../../../../Mechanical/DataModel/Enums/SpringType.md#SpringType)                                        | Gets or sets the SpringType.                                              |
| [`Visible`](#id288)                                                                                                    | Gets or sets the Visible.                                                 |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                              |
| [`MobileCoordinateSystem`](#id347)                                                                                     | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](#id348)                                                                                  | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](#id349)                                                                                             | Gets or sets the MobileLocation.                                          |
| [`MobileScopeLocation`](#Connections.MobileScopeLocation)                                                              | Gets or sets the MobileScopeLocation.                                     |
| [`ReferenceLocation`](#id350)                                                                                          | Gets or sets the ReferenceLocation.                                       |
| [`ReferenceScopeLocation`](#Connections.ReferenceScopeLocation)                                                        | Gets or sets the ReferenceScopeLocation.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                              |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                                |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                                     |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                                      |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                                       |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.                        |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                              |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object.             |

<a id="id265"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Spring
```

<a id="id266"></a>

## Property detail

<a id="Connections.NonLinearLongitudinalStiffness"></a>

### *property* Connections.NonLinearLongitudinalStiffness *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the non linear longitudinal stiffness defined in the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="Connections.LongitudinalStiffness"></a>

### *property* Connections.LongitudinalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the constant longitudinal stiffness (expressed in N/m).

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSpringAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* Connections.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* Connections.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* Connections.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* Connections.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* Connections.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpringElementAPDLName"></a>

### *property* Connections.SpringElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* Connections.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* Connections.MobileXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* Connections.MobileYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* Connections.MobileZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* Connections.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* Connections.ReferenceXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* Connections.ReferenceYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* Connections.ReferenceZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpringLength"></a>

### *property* Connections.SpringLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SpringLength.

<!-- !! processed by numpydoc !! -->

<a id="Connections.LongitudinalDamping"></a>

### *property* Connections.LongitudinalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LongitudinalDamping.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* Connections.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FreeLength"></a>

### *property* Connections.FreeLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FreeLength.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Load"></a>

### *property* Connections.Load *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Load.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Rotation"></a>

### *property* Connections.Rotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Torque"></a>

### *property* Connections.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Torque.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* Connections.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TorsionalDamping"></a>

### *property* Connections.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TorsionalStiffness"></a>

### *property* Connections.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* Connections.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* Connections.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpringBehavior"></a>

### *property* Connections.SpringBehavior *: [Ansys.Mechanical.DataModel.Enums.SpringBehavior](../../../../Mechanical/DataModel/Enums/SpringBehavior.md#SpringBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* Connections.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PreloadType"></a>

### *property* Connections.PreloadType *: [Ansys.Mechanical.DataModel.Enums.SpringPreloadType](../../../../Mechanical/DataModel/Enums/SpringPreloadType.md#SpringPreloadType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreloadType.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* Connections.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* Connections.Scope *: [Ansys.Mechanical.DataModel.Enums.SpringScopingType](../../../../Mechanical/DataModel/Enums/SpringScopingType.md#SpringScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Scope.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SpringType"></a>

### *property* Connections.SpringType *: [Ansys.Mechanical.DataModel.Enums.SpringType](../../../../Mechanical/DataModel/Enums/SpringType.md#SpringType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringType.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* Connections.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* Connections.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* Connections.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* Connections.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileScopeLocation"></a>

### *property* Connections.MobileScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* Connections.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceScopeLocation"></a>

### *property* Connections.ReferenceScopeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceScopeLocation.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

## Method detail

<a id="id304"></a>

### Connections.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### Connections.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Joint"></a>

### *class* Connections.Joint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Joint.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`PromoteToNamedSelection`](#id361)                       | Run the PromoteToNamedSelection action.                                           |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#id362)                          | Run the PromoteToRemotePoint action.                                              |
| [`AddCommandSnippet`](#id363)                             | Creates a new CommandSnippet                                                      |
| [`FlipReferenceMobile`](#Connections.FlipReferenceMobile) | Run the FlipReferenceMobile action.                                               |
| [`RenameBasedOnDefinition`](#id364)                       | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id467)                                        | Run the Delete action.                                                            |
| [`GetChildren`](#id469)                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                    | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                                      | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                      | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                        | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                  | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BushingWorksheet`](#Connections.BushingWorksheet)                                                                    | Returns the Bushing Coeffients worksheet associated with Bushing Joint.   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.                        |
| [`FrictionCoefficient`](#id327)                                                                                        | Gets or sets the FrictionCoefficient.                                     |
| [`JointElementAPDLName`](#Connections.JointElementAPDLName)                                                            | Gets or sets the JointElementAPDLName.                                    |
| [`RestitutionFactor`](#id328)                                                                                          | Gets or sets the RestitutionFactor.                                       |
| [`MobileBeamMaterial`](#id329)                                                                                         | Gets or sets the MobileBeamMaterial.                                      |
| [`MobileBody`](#id330)                                                                                                 | Gets the MobileBody.                                                      |
| [`ReferenceBeamMaterial`](#id331)                                                                                      | Gets or sets the ReferenceBeamMaterial.                                   |
| [`ReferenceBody`](#id332)                                                                                              | Gets the ReferenceBody.                                                   |
| [`EffectiveLength`](#Connections.EffectiveLength)                                                                      | Gets or sets the EffectiveLength.                                         |
| [`InnerRadius`](#Connections.InnerRadius)                                                                              | Gets or sets the InnerRadius.                                             |
| [`OuterRadius`](#Connections.OuterRadius)                                                                              | Gets or sets the OuterRadius.                                             |
| [`Radius`](#id333)                                                                                                     | Gets or sets the Radius.                                                  |
| [`MobilePinballRegion`](#id334)                                                                                        | Gets or sets the MobilePinballRegion.                                     |
| [`ReferencePinballRegion`](#id335)                                                                                     | Gets or sets the ReferencePinballRegion.                                  |
| [`RadialGapHeight`](#Connections.RadialGapHeight)                                                                      | Gets or sets the RadialGapHeight.                                         |
| [`RadialGapInnerDiameter`](#Connections.RadialGapInnerDiameter)                                                        | Gets or sets the RadialGapInnerDiameter.                                  |
| [`RadialOuterDiameter`](#Connections.RadialOuterDiameter)                                                              | Gets or sets the RadialOuterDiameter.                                     |
| [`ScrewPitch`](#Connections.ScrewPitch)                                                                                | Gets or sets the ScrewPitch.                                              |
| [`RXMaximum`](#Connections.RXMaximum)                                                                                  | Gets or sets the RXMaximum.                                               |
| [`RXMinimum`](#Connections.RXMinimum)                                                                                  | Gets or sets the RXMinimum.                                               |
| [`RYMaximum`](#Connections.RYMaximum)                                                                                  | Gets or sets the RYMaximum.                                               |
| [`RYMinimum`](#Connections.RYMinimum)                                                                                  | Gets or sets the RYMinimum.                                               |
| [`RZMaximum`](#Connections.RZMaximum)                                                                                  | Gets or sets the RZMaximum.                                               |
| [`RZMinimum`](#Connections.RZMinimum)                                                                                  | Gets or sets the RZMinimum.                                               |
| [`XMaximum`](#Connections.XMaximum)                                                                                    | Gets or sets the XMaximum.                                                |
| [`XMinimum`](#Connections.XMinimum)                                                                                    | Gets or sets the XMinimum.                                                |
| [`YMaximum`](#Connections.YMaximum)                                                                                    | Gets or sets the YMaximum.                                                |
| [`YMinimum`](#Connections.YMinimum)                                                                                    | Gets or sets the YMinimum.                                                |
| [`ZMaximum`](#Connections.ZMaximum)                                                                                    | Gets or sets the ZMaximum.                                                |
| [`ZMinimum`](#Connections.ZMinimum)                                                                                    | Gets or sets the ZMinimum.                                                |
| [`TorsionalDamping`](#id336)                                                                                           | Gets or sets the TorsionalDamping.                                        |
| [`TorsionalStiffness`](#id337)                                                                                         | Gets or sets the TorsionalStiffness.                                      |
| [`MobileBeamRadius`](#id338)                                                                                           | Gets or sets the MobileBeamRadius.                                        |
| [`ReferenceBeamRadius`](#id339)                                                                                        | Gets or sets the ReferenceBeamRadius.                                     |
| [`GeneralPrimitiveType`](#Connections.GeneralPrimitiveType)                                                            | Gets or sets the GeneralPrimitiveType.                                    |
| [`InitialPosition`](#Connections.InitialPosition)                                                                      | Gets or sets the InitialPosition.                                         |
| [`MobileBehavior`](#id340)                                                                                             | Gets or sets the MobileBehavior.                                          |
| [`ReferenceBehavior`](#id341)                                                                                          | Gets or sets the ReferenceBehavior.                                       |
| [`Formulation`](#id456)                                                                                                | Gets or sets the Formulation.                                             |
| [`JointFrictionType`](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#JointFrictionType)                   | Gets or sets the JointFrictionType.                                       |
| [`MobileFormulation`](#Connections.MobileFormulation)                                                                  | Gets or sets the MobileFormulation.                                       |
| [`RadialGapType`](#Connections.RadialGapType)                                                                          | Gets or sets the RadialGapType.                                           |
| [`ReferenceFormulation`](#Connections.ReferenceFormulation)                                                            | Gets or sets the ReferenceFormulation.                                    |
| [`ConnectionType`](#id412)                                                                                             | Gets or sets the ConnectionType.                                          |
| [`RXMaximumType`](#Connections.RXMaximumType)                                                                          | Gets or sets the RXMaximumType.                                           |
| [`RXMinimumType`](#Connections.RXMinimumType)                                                                          | Gets or sets the RXMinimumType.                                           |
| [`RYMaximumType`](#Connections.RYMaximumType)                                                                          | Gets or sets the RYMaximumType.                                           |
| [`RYMinimumType`](#Connections.RYMinimumType)                                                                          | Gets or sets the RYMinimumType.                                           |
| [`RZMaximumType`](#Connections.RZMaximumType)                                                                          | Gets or sets the RZMaximumType.                                           |
| [`RZMinimumType`](#Connections.RZMinimumType)                                                                          | Gets or sets the RZMinimumType.                                           |
| [`XMaximumType`](#Connections.XMaximumType)                                                                            | Gets or sets the XMaximumType.                                            |
| [`XMinimumType`](#Connections.XMinimumType)                                                                            | Gets or sets the XMinimumType.                                            |
| [`YMaximumType`](#Connections.YMaximumType)                                                                            | Gets or sets the YMaximumType.                                            |
| [`YMinimumType`](#Connections.YMinimumType)                                                                            | Gets or sets the YMinimumType.                                            |
| [`ZMaximumType`](#Connections.ZMaximumType)                                                                            | Gets or sets the ZMaximumType.                                            |
| [`ZMinimumType`](#Connections.ZMinimumType)                                                                            | Gets or sets the ZMinimumType.                                            |
| [`Type`](#id343)                                                                                                       | Gets or sets the Type.                                                    |
| [`MobileAppliedBy`](#id344)                                                                                            | Gets or sets the MobileAppliedBy.                                         |
| [`ReferenceAppliedBy`](#id345)                                                                                         | Gets or sets the ReferenceAppliedBy.                                      |
| [`Rotations`](#Connections.Rotations)                                                                                  | Gets or sets the Rotations.                                               |
| [`SolverElementType`](#Connections.SolverElementType)                                                                  | Gets or sets the SolverElementType.                                       |
| [`TranslationX`](#Connections.TranslationX)                                                                            | Gets or sets the TranslationX.                                            |
| [`TranslationY`](#Connections.TranslationY)                                                                            | Gets or sets the TranslationY.                                            |
| [`TranslationZ`](#Connections.TranslationZ)                                                                            | Gets or sets the TranslationZ.                                            |
| [`MobileRelaxationMethod`](#Connections.MobileRelaxationMethod)                                                        | Gets or sets the MobileRelaxationMethod.                                  |
| [`ReferenceRelaxationMethod`](#Connections.ReferenceRelaxationMethod)                                                  | Gets or sets the ReferenceRelaxationMethod.                               |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                              |
| [`SuppressedForSolve`](#Connections.SuppressedForSolve)                                                                | Gets the SuppressedForSolve.                                              |
| [`ElementCoordinateSystem`](#Connections.ElementCoordinateSystem)                                                      | Gets or sets the ElementCoordinateSystem.                                 |
| [`MobileCoordinateSystem`](#id347)                                                                                     | Gets or sets the MobileCoordinateSystem.                                  |
| [`ReferenceCoordinateSystem`](#id348)                                                                                  | Gets or sets the ReferenceCoordinateSystem.                               |
| [`MobileLocation`](#id349)                                                                                             | Gets or sets the MobileLocation.                                          |
| [`CurveOrientationSurface`](#Connections.CurveOrientationSurface)                                                      | Gets or sets the CurveOrientationSurface.                                 |
| [`ReferenceLocation`](#id350)                                                                                          | Gets or sets the ReferenceLocation.                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                              |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                                |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                                     |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                                      |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                                       |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                                |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.                        |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                              |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object.             |

<a id="id324"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Joint
```

<a id="id325"></a>

## Property detail

<a id="Connections.BushingWorksheet"></a>

### *property* Connections.BushingWorksheet *: Ansys.ACT.Interfaces.Common.IWorksheet | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Bushing Coeffients worksheet associated with Bushing Joint.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSJointAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* Connections.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="Connections.JointElementAPDLName"></a>

### *property* Connections.JointElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointElementAPDLName.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* Connections.RestitutionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestitutionFactor.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* Connections.MobileBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* Connections.MobileBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MobileBody.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* Connections.ReferenceBeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* Connections.ReferenceBody *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReferenceBody.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EffectiveLength"></a>

### *property* Connections.EffectiveLength *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EffectiveLength.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InnerRadius"></a>

### *property* Connections.InnerRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.OuterRadius"></a>

### *property* Connections.OuterRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* Connections.Radius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* Connections.MobilePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobilePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* Connections.ReferencePinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferencePinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RadialGapHeight"></a>

### *property* Connections.RadialGapHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapHeight.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RadialGapInnerDiameter"></a>

### *property* Connections.RadialGapInnerDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapInnerDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RadialOuterDiameter"></a>

### *property* Connections.RadialOuterDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialOuterDiameter.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ScrewPitch"></a>

### *property* Connections.ScrewPitch *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScrewPitch.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RXMaximum"></a>

### *property* Connections.RXMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RXMinimum"></a>

### *property* Connections.RXMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RYMaximum"></a>

### *property* Connections.RYMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RYMinimum"></a>

### *property* Connections.RYMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RZMaximum"></a>

### *property* Connections.RZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RZMinimum"></a>

### *property* Connections.RZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.XMaximum"></a>

### *property* Connections.XMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.XMinimum"></a>

### *property* Connections.XMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.YMaximum"></a>

### *property* Connections.YMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.YMinimum"></a>

### *property* Connections.YMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ZMaximum"></a>

### *property* Connections.ZMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ZMinimum"></a>

### *property* Connections.ZMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimum.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* Connections.TorsionalDamping *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalDamping.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* Connections.TorsionalStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TorsionalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* Connections.MobileBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* Connections.ReferenceBeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GeneralPrimitiveType"></a>

### *property* Connections.GeneralPrimitiveType *: [Ansys.Mechanical.DataModel.Enums.JointGeneralPrimitiveType](../../../../Mechanical/DataModel/Enums/JointGeneralPrimitiveType.md#JointGeneralPrimitiveType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralPrimitiveType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InitialPosition"></a>

### *property* Connections.InitialPosition *: [Ansys.Mechanical.DataModel.Enums.JointInitialPosition](../../../../Mechanical/DataModel/Enums/JointInitialPosition.md#JointInitialPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialPosition.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* Connections.MobileBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileBehavior.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* Connections.ReferenceBehavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Formulation"></a>

### *property* Connections.Formulation *: [Ansys.Mechanical.DataModel.Enums.JointFormulation](../../../../Mechanical/DataModel/Enums/JointFormulation.md#JointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.JointFrictionType"></a>

### *property* Connections.JointFrictionType *: [Ansys.Mechanical.DataModel.Enums.JointFrictionType](../../../../Mechanical/DataModel/Enums/JointFrictionType.md#JointFrictionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JointFrictionType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileFormulation"></a>

### *property* Connections.MobileFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileFormulation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RadialGapType"></a>

### *property* Connections.RadialGapType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadialGapType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceFormulation"></a>

### *property* Connections.ReferenceFormulation *: [Ansys.Mechanical.DataModel.Enums.RemotePointFormulation](../../../../Mechanical/DataModel/Enums/RemotePointFormulation.md#RemotePointFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFormulation.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* Connections.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.JointScopingType](../../../../Mechanical/DataModel/Enums/JointScopingType.md#JointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RXMaximumType"></a>

### *property* Connections.RXMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RXMinimumType"></a>

### *property* Connections.RXMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RXMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RYMaximumType"></a>

### *property* Connections.RYMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RYMinimumType"></a>

### *property* Connections.RYMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RYMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RZMaximumType"></a>

### *property* Connections.RZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RZMinimumType"></a>

### *property* Connections.RZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.XMaximumType"></a>

### *property* Connections.XMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.XMinimumType"></a>

### *property* Connections.XMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.YMaximumType"></a>

### *property* Connections.YMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.YMinimumType"></a>

### *property* Connections.YMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ZMaximumType"></a>

### *property* Connections.ZMaximumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMaximumType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ZMinimumType"></a>

### *property* Connections.ZMinimumType *: [Ansys.Mechanical.DataModel.Enums.JointStopType](../../../../Mechanical/DataModel/Enums/JointStopType.md#JointStopType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZMinimumType.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* Connections.Type *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../../Mechanical/DataModel/Enums/JointType.md#JointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* Connections.MobileAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* Connections.ReferenceAppliedBy *: [Ansys.Mechanical.DataModel.Enums.RemoteApplicationType](../../../../Mechanical/DataModel/Enums/RemoteApplicationType.md#RemoteApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceAppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Rotations"></a>

### *property* Connections.Rotations *: [Ansys.Mechanical.DataModel.Enums.JointRotationDOFType](../../../../Mechanical/DataModel/Enums/JointRotationDOFType.md#JointRotationDOFType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Rotations.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SolverElementType"></a>

### *property* Connections.SolverElementType *: [Ansys.Mechanical.DataModel.Enums.JointSolverElementType](../../../../Mechanical/DataModel/Enums/JointSolverElementType.md#JointSolverElementType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverElementType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TranslationX"></a>

### *property* Connections.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TranslationY"></a>

### *property* Connections.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TranslationZ"></a>

### *property* Connections.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MobileRelaxationMethod"></a>

### *property* Connections.MobileRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ReferenceRelaxationMethod"></a>

### *property* Connections.ReferenceRelaxationMethod *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRelaxationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SuppressedForSolve"></a>

### *property* Connections.SuppressedForSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SuppressedForSolve.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElementCoordinateSystem"></a>

### *property* Connections.ElementCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* Connections.MobileCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* Connections.ReferenceCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* Connections.MobileLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MobileLocation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CurveOrientationSurface"></a>

### *property* Connections.CurveOrientationSurface *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurveOrientationSurface.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* Connections.ReferenceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceLocation.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

## Method detail

<a id="id361"></a>

### Connections.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### Connections.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### Connections.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Connections.FlipReferenceMobile"></a>

### Connections.FlipReferenceMobile()

Run the FlipReferenceMobile action.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### Connections.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Connections"></a>

### *class* Connections.Connections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Connections.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddContactRegion`](#id427)                                                  | Creates a new child ContactRegion.                                                |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactTool`](#Connections.AddContactTool)                               | Creates a new ContactTool                                                         |
| [`AddSpotWeldGroup`](#Connections.AddSpotWeldGroup)                           | Creates a new child SpotWeldGroup.                                                |
| [`AddSpotWeld`](#id430)                                                       | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](#id431)                                                     | Creates a new child InterStage.                                                   |
| [`AddJoint`](#id428)                                                          | Creates a new child Joint.                                                        |
| [`AddBodyInteraction`](#id466)                                                | Creates a new child BodyInteraction.                                              |
| [`SearchConnectionsForDuplicatePairs`](#id429)                                | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`CreateAutomaticConnections`](#id432)                                        | Run the CreateAutomaticConnections action.                                        |
| [`ExportModelTopology`](#Connections.ExportModelTopology)                     | ExportModelTopology method.                                                       |
| [`AddAMBondConnection`](#Connections.AddAMBondConnection)                     | Creates a new AMBondConnection                                                    |
| [`AddBeam`](#Connections.AddBeam)                                             | Creates a new Beam                                                                |
| [`AddBearing`](#Connections.AddBearing)                                       | Creates a new Bearing                                                             |
| [`AddConnectionGroup`](#Connections.AddConnectionGroup)                       | Creates a new ConnectionGroup                                                     |
| [`AddContactSolutionInformation`](#Connections.AddContactSolutionInformation) | Creates a new ContactSolutionInformation                                          |
| [`AddEndRelease`](#Connections.AddEndRelease)                                 | Creates a new EndRelease                                                          |
| [`AddSpring`](#Connections.AddSpring)                                         | Creates a new Spring                                                              |
| [`GenerateInitialContactResults`](#id394)                                     | Run the GenerateInitialContactResults action.                                     |
| [`RepairOverlappingContactRegions`](#id435)                                   | Run the RepairOverlappingContactRegions action.                                   |
| [`GetChildren`](#id469)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                                        | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                                                          | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                                          | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                                            | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                                    | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                                                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                                      | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SolverFilesDirectory`](#Connections.SolverFilesDirectory)                                                            | Gets or sets the SolverFilesDirectory.                        |
| [`GenerateAutomaticConnectionOnRefresh`](#Connections.GenerateAutomaticConnectionOnRefresh)                            | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| [`FixedJoints`](#Connections.FixedJoints)                                                                              | Gets or sets the FixedJoints.                                 |
| [`TransparencyEnabled`](#Connections.TransparencyEnabled)                                                              | Gets or sets the TransparencyEnabled.                         |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id381"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Connections
```

<a id="id382"></a>

## Property detail

<a id="id383"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SolverFilesDirectory"></a>

### *property* Connections.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateAutomaticConnectionOnRefresh"></a>

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticConnectionOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FixedJoints"></a>

### *property* Connections.FixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TransparencyEnabled"></a>

### *property* Connections.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

## Method detail

<a id="Connections.AddContactRegion"></a>

### Connections.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactTool"></a>

### Connections.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeldGroup"></a>

### Connections.AddSpotWeldGroup()

Creates a new child SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeld"></a>

### Connections.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddInterStage"></a>

### Connections.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddJoint"></a>

### Connections.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBodyInteraction"></a>

### Connections.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateAutomaticConnections"></a>

### Connections.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportModelTopology"></a>

### Connections.ExportModelTopology(filename: System.String)

ExportModelTopology method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddAMBondConnection"></a>

### Connections.AddAMBondConnection()

Creates a new AMBondConnection

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBeam"></a>

### Connections.AddBeam()

Creates a new Beam

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBearing"></a>

### Connections.AddBearing()

Creates a new Bearing

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddConnectionGroup"></a>

### Connections.AddConnectionGroup()

Creates a new ConnectionGroup

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactSolutionInformation"></a>

### Connections.AddContactSolutionInformation()

Creates a new ContactSolutionInformation

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddEndRelease"></a>

### Connections.AddEndRelease()

Creates a new EndRelease

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpring"></a>

### Connections.AddSpring()

Creates a new Spring

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### Connections.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RepairOverlappingContactRegions"></a>

### Connections.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ConnectionGroup"></a>

### *class* Connections.ConnectionGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ConnectionGroup.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddContactRegion`](#id427)                                  | Creates a new child ContactRegion.                                                |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddJoint`](#id428)                                          | Creates a new child Joint.                                                        |
| [`SearchConnectionsForDuplicatePairs`](#id429)                | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddSpotWeld`](#id430)                                       | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](#id431)                                     | Creates a new child InterStage.                                                   |
| [`CreateAutomaticConnections`](#id432)                        | Run the CreateAutomaticConnections action.                                        |
| [`DeleteChildren`](#id433)                                    | Run the DeleteChildren action.                                                    |
| [`DeleteChildren`](#id433)                                    | Run the DeleteChildren action with optional verification dialog.                  |
| [`RenameBasedOnChildren`](#Connections.RenameBasedOnChildren) | Rename the Connection group based on the children.                                |
| [`SetDefaultAPDLNames`](#id434)                               | Loop over all the valid contact regions and set the default APDL names.           |
| [`RepairOverlappingContactRegions`](#id435)                   | Run the RepairOverlappingContactRegions action.                                   |
| [`Delete`](#id467)                                            | Run the Delete action.                                                            |
| [`GetChildren`](#id469)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)                                        | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                                          | Creates a new child Image.                                                        |
| [`Activate`](#id473)                                          | Activate the current object.                                                      |
| [`CopyTo`](#id474)                                            | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)                                    | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)                                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)                                      | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ConnectionType`](#id412)                                                                                             | Gets or sets the ConnectionType.                              |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`ActiveConnections`](#Connections.ActiveConnections)                                                                  | Gets the ActiveConnections.                                   |
| [`Connections`](Connections.md#Connections)                                                                            | Gets the Connections.                                         |
| [`EdgeOverlapTolerance`](#Connections.EdgeOverlapTolerance)                                                            | Gets or sets the EdgeOverlapTolerance.                        |
| [`FaceOverlapTolerance`](#Connections.FaceOverlapTolerance)                                                            | Gets or sets the FaceOverlapTolerance.                        |
| [`MinimumDistancePercentage`](#Connections.MinimumDistancePercentage)                                                  | Gets or sets the MinimumDistancePercentage.                   |
| [`ThicknessScaleFactor`](#Connections.ThicknessScaleFactor)                                                            | Gets or sets the ThicknessScaleFactor.                        |
| [`ToleranceSlider`](#Connections.ToleranceSlider)                                                                      | Gets or sets the ToleranceSlider.                             |
| [`FaceFaceDetectionAngleTolerence`](#Connections.FaceFaceDetectionAngleTolerence)                                      | Gets or sets the FaceFaceDetectionAngleTolerence.             |
| [`FaceAngleTolerance`](#Connections.FaceAngleTolerance)                                                                | Gets or sets the FaceAngleTolerance.                          |
| [`MinimumDistanceValue`](#Connections.MinimumDistanceValue)                                                            | Gets the MinimumDistanceValue.                                |
| [`ToleranceValue`](#Connections.ToleranceValue)                                                                        | Gets or sets the ToleranceValue.                              |
| [`CylindricalFaces`](#Connections.CylindricalFaces)                                                                    | Gets or sets the CylindricalFaces.                            |
| [`Priority`](#Connections.Priority)                                                                                    | Gets or sets the Priority.                                    |
| [`GroupBy`](#Connections.GroupBy)                                                                                      | Gets or sets the GroupBy.                                     |
| [`SearchAcross`](#Connections.SearchAcross)                                                                            | Gets or sets the SearchAcross.                                |
| [`ToleranceType`](../../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`EdgeEdge`](#Connections.EdgeEdge)                                                                                    | Gets or sets the EdgeEdge.                                    |
| [`FaceEdge`](#Connections.FaceEdge)                                                                                    | Gets or sets the FaceEdge.                                    |
| [`AutomaticFixedJoints`](#Connections.AutomaticFixedJoints)                                                            | Gets or sets the AutomaticFixedJoints.                        |
| [`RevoluteJoints`](#Connections.RevoluteJoints)                                                                        | Gets or sets the RevoluteJoints.                              |
| [`Suppressed`](#id415)                                                                                                 | Gets or sets the Suppressed.                                  |
| [`FaceFace`](#Connections.FaceFace)                                                                                    | Gets or sets the FaceFace.                                    |
| [`UseRange`](#Connections.UseRange)                                                                                    | Gets or sets the UseRange.                                    |
| [`Location`](#id416)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`ReadOnly`](#id422)                                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id410"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import ConnectionGroup
```

<a id="id411"></a>

## Property detail

<a id="id412"></a>

### *property* Connections.ConnectionType *: [Ansys.Mechanical.DataModel.Enums.AutoDetectionType](../../../../Mechanical/DataModel/Enums/AutoDetectionType.md#AutoDetectionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConnectionType.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConnectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ActiveConnections"></a>

### *property* Connections.ActiveConnections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveConnections.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* Connections.Connections *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Connections.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EdgeOverlapTolerance"></a>

### *property* Connections.EdgeOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FaceOverlapTolerance"></a>

### *property* Connections.FaceOverlapTolerance *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceOverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MinimumDistancePercentage"></a>

### *property* Connections.MinimumDistancePercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumDistancePercentage.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ThicknessScaleFactor"></a>

### *property* Connections.ThicknessScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThicknessScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ToleranceSlider"></a>

### *property* Connections.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FaceFaceDetectionAngleTolerence"></a>

### *property* Connections.FaceFaceDetectionAngleTolerence *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFaceDetectionAngleTolerence.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FaceAngleTolerance"></a>

### *property* Connections.FaceAngleTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceAngleTolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.MinimumDistanceValue"></a>

### *property* Connections.MinimumDistanceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDistanceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ToleranceValue"></a>

### *property* Connections.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CylindricalFaces"></a>

### *property* Connections.CylindricalFaces *: [Ansys.Mechanical.DataModel.Enums.CylindricalFacesOption](../../../../Mechanical/DataModel/Enums/CylindricalFacesOption.md#CylindricalFacesOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CylindricalFaces.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Priority"></a>

### *property* Connections.Priority *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgePriority](../../../../Mechanical/DataModel/Enums/ContactFaceEdgePriority.md#ContactFaceEdgePriority) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Priority.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupBy"></a>

### *property* Connections.GroupBy *: [Ansys.Mechanical.DataModel.Enums.ContactGroupingType](../../../../Mechanical/DataModel/Enums/ContactGroupingType.md#ContactGroupingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GroupBy.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SearchAcross"></a>

### *property* Connections.SearchAcross *: [Ansys.Mechanical.DataModel.Enums.ContactSearchingType](../../../../Mechanical/DataModel/Enums/ContactSearchingType.md#ContactSearchingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SearchAcross.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ToleranceType"></a>

### *property* Connections.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EdgeEdge"></a>

### *property* Connections.EdgeEdge *: [Ansys.Mechanical.DataModel.Enums.ContactEdgeEdgeOption](../../../../Mechanical/DataModel/Enums/ContactEdgeEdgeOption.md#ContactEdgeEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeEdge.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FaceEdge"></a>

### *property* Connections.FaceEdge *: [Ansys.Mechanical.DataModel.Enums.ContactFaceEdgeOption](../../../../Mechanical/DataModel/Enums/ContactFaceEdgeOption.md#ContactFaceEdgeOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceEdge.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AutomaticFixedJoints"></a>

### *property* Connections.AutomaticFixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticFixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RevoluteJoints"></a>

### *property* Connections.RevoluteJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RevoluteJoints.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* Connections.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FaceFace"></a>

### *property* Connections.FaceFace *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceFace.

<!-- !! processed by numpydoc !! -->

<a id="Connections.UseRange"></a>

### *property* Connections.UseRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseRange.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* Connections.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* Connections.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

## Method detail

<a id="id427"></a>

### Connections.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### Connections.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### Connections.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### Connections.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### Connections.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DeleteChildren"></a>

### Connections.DeleteChildren()

Run the DeleteChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### Connections.DeleteChildren(b_Verify: System.Boolean)

Run the DeleteChildren action with optional verification dialog.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RenameBasedOnChildren"></a>

### Connections.RenameBasedOnChildren()

Rename the Connection group based on the children.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### Connections.SetDefaultAPDLNames()

Loop over all the valid contact regions and set the default APDL names.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### Connections.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BodyInteractions"></a>

### *class* Connections.BodyInteractions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BodyInteractions.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddBodyInteraction`](#id466)      | Creates a new child BodyInteraction.                                              |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id467)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id469)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id469)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id470)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id471)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id472)                | Creates a new child Image.                                                        |
| [`Activate`](#id473)                | Activate the current object.                                                      |
| [`CopyTo`](#id474)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id475)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id476) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id477)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id478)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id479)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id480)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id481)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id482)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`PinballFactor`](#id455)                                                                                              | Gets or sets the PinballFactor.                               |
| [`Tolerance`](#Connections.Tolerance)                                                                                  | Gets or sets the Tolerance.                                   |
| [`ShellThicknessFactor`](#Connections.ShellThicknessFactor)                                                            | Gets or sets the ShellThicknessFactor.                        |
| [`TimestepSafetyFactor`](#Connections.TimestepSafetyFactor)                                                            | Gets or sets the TimestepSafetyFactor.                        |
| [`LimitingTimestepVelocity`](#Connections.LimitingTimestepVelocity)                                                    | Gets or sets the LimitingTimestepVelocity.                    |
| [`ContactDetection`](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ContactDetection)                      | Gets or sets the ContactDetection.                            |
| [`Formulation`](#id456)                                                                                                | Gets or sets the Formulation.                                 |
| [`ManualContactTreatment`](#Connections.ManualContactTreatment)                                                        | Gets or sets the ManualContactTreatment.                      |
| [`NodalShellThickness`](#Connections.NodalShellThickness)                                                              | Gets or sets the NodalShellThickness.                         |
| [`SlidingContact`](#Connections.SlidingContact)                                                                        | Gets or sets the SlidingContact.                              |
| [`BodySelfContact`](#Connections.BodySelfContact)                                                                      | Gets or sets the BodySelfContact.                             |
| [`ElementSelfContact`](#Connections.ElementSelfContact)                                                                | Gets or sets the ElementSelfContact.                          |
| [`EdgeOnEdgeContact`](#Connections.EdgeOnEdgeContact)                                                                  | Gets or sets the EdgeOnEdgeContact.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id458)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id459)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id460)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id461)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id462)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id463)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id464)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id452"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import BodyInteractions
```

<a id="id453"></a>

## Property detail

<a id="id454"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* Connections.PinballFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Tolerance"></a>

### *property* Connections.Tolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ShellThicknessFactor"></a>

### *property* Connections.ShellThicknessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellThicknessFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TimestepSafetyFactor"></a>

### *property* Connections.TimestepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimestepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="Connections.LimitingTimestepVelocity"></a>

### *property* Connections.LimitingTimestepVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitingTimestepVelocity.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ContactDetection"></a>

### *property* Connections.ContactDetection *: [Ansys.Mechanical.DataModel.Enums.ContactDetection](../../../../Mechanical/DataModel/Enums/ContactDetection.md#ContactDetection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactDetection.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* Connections.Formulation *: [Ansys.Mechanical.DataModel.Enums.BodyInteractionFormulation](../../../../Mechanical/DataModel/Enums/BodyInteractionFormulation.md#BodyInteractionFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Formulation.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ManualContactTreatment"></a>

### *property* Connections.ManualContactTreatment *: [Ansys.Mechanical.DataModel.Enums.ManualContactTreatmentType](../../../../Mechanical/DataModel/Enums/ManualContactTreatmentType.md#ManualContactTreatmentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ManualContactTreatment.

<!-- !! processed by numpydoc !! -->

<a id="Connections.NodalShellThickness"></a>

### *property* Connections.NodalShellThickness *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalShellThickness.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SlidingContact"></a>

### *property* Connections.SlidingContact *: [Ansys.Mechanical.DataModel.Enums.SlidingContactType](../../../../Mechanical/DataModel/Enums/SlidingContactType.md#SlidingContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlidingContact.

<!-- !! processed by numpydoc !! -->

<a id="Connections.BodySelfContact"></a>

### *property* Connections.BodySelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodySelfContact.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ElementSelfContact"></a>

### *property* Connections.ElementSelfContact *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelfContact.

<!-- !! processed by numpydoc !! -->

<a id="Connections.EdgeOnEdgeContact"></a>

### *property* Connections.EdgeOnEdgeContact *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeOnEdgeContact.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

## Method detail

<a id="id466"></a>

### Connections.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### Connections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id473"></a>

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

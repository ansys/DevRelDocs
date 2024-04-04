# Connections

### *class* Connections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Connections.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddContactRegion`](#Connections.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactTool`](#Connections.AddContactTool)                                         | Creates a new ContactTool                                                         |
| [`AddSpotWeldGroup`](#Connections.AddSpotWeldGroup)                                     | Creates a new child SpotWeldGroup.                                                |
| [`AddSpotWeld`](#Connections.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](#Connections.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`AddJoint`](#Connections.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`AddBodyInteraction`](#Connections.AddBodyInteraction)                                 | Creates a new child BodyInteraction.                                              |
| [`SearchConnectionsForDuplicatePairs`](#Connections.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`CreateAutomaticConnections`](#Connections.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`ExportModelTopology`](#Connections.ExportModelTopology)                               | ExportModelTopology method.                                                       |
| [`AddAMBondConnection`](#Connections.AddAMBondConnection)                               | Creates a new AMBondConnection                                                    |
| [`AddBeam`](#Connections.AddBeam)                                                       | Creates a new Beam                                                                |
| [`AddBearing`](#Connections.AddBearing)                                                 | Creates a new Bearing                                                             |
| [`AddConnectionGroup`](#Connections.AddConnectionGroup)                                 | Creates a new ConnectionGroup                                                     |
| [`AddContactSolutionInformation`](#Connections.AddContactSolutionInformation)           | Creates a new ContactSolutionInformation                                          |
| [`AddEndRelease`](#Connections.AddEndRelease)                                           | Creates a new EndRelease                                                          |
| [`AddSpring`](#Connections.AddSpring)                                                   | Creates a new Spring                                                              |
| [`GenerateInitialContactResults`](#Connections.GenerateInitialContactResults)           | Run the GenerateInitialContactResults action.                                     |
| [`RepairOverlappingContactRegions`](#Connections.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Connections.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#Connections.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#Connections.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#Connections.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#Connections.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Connections.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Connections.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Connections.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Connections.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Connections.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#Connections.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Connections.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Connections.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SolverFilesDirectory`](#Connections.SolverFilesDirectory)                                                            | Gets or sets the SolverFilesDirectory.                        |
| [`GenerateAutomaticConnectionOnRefresh`](#Connections.GenerateAutomaticConnectionOnRefresh)                            | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| [`FixedJoints`](#Connections.FixedJoints)                                                                              | Gets or sets the FixedJoints.                                 |
| [`TransparencyEnabled`](#Connections.TransparencyEnabled)                                                              | Gets or sets the TransparencyEnabled.                         |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Connections.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Connections.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Connections.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Connections.Images)                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Connections.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Connections.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import Connections
```

## Property detail

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Connections.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticConnectionOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* Connections.FixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedJoints.

<!-- !! processed by numpydoc !! -->

### *property* Connections.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Connections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Connections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Connections.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

### Connections.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

### Connections.AddSpotWeldGroup()

Creates a new child SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

### Connections.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

### Connections.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

### Connections.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

### Connections.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### Connections.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

### Connections.ExportModelTopology(filename: System.String)

ExportModelTopology method.

<!-- !! processed by numpydoc !! -->

### Connections.AddAMBondConnection()

Creates a new AMBondConnection

<!-- !! processed by numpydoc !! -->

### Connections.AddBeam()

Creates a new Beam

<!-- !! processed by numpydoc !! -->

### Connections.AddBearing()

Creates a new Bearing

<!-- !! processed by numpydoc !! -->

### Connections.AddConnectionGroup()

Creates a new ConnectionGroup

<!-- !! processed by numpydoc !! -->

### Connections.AddContactSolutionInformation()

Creates a new ContactSolutionInformation

<!-- !! processed by numpydoc !! -->

### Connections.AddEndRelease()

Creates a new EndRelease

<!-- !! processed by numpydoc !! -->

### Connections.AddSpring()

Creates a new Spring

<!-- !! processed by numpydoc !! -->

### Connections.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

### Connections.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Connections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Connections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Connections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Connections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Connections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Connections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Connections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

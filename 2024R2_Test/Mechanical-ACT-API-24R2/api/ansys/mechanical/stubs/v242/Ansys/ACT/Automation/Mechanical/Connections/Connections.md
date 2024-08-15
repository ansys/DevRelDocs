# `Connections`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.Connections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Connections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `AddContactRegion`                   | Creates a new child ContactRegion.                                                                                                 |
| `AddContactTool`                     | Creates a new ContactTool                                                                                                          |
| `AddSpotWeldGroup`                   | Creates a new child SpotWeldGroup.                                                                                                 |
| `AddSpotWeld`                        | Creates a new child SpotWeld.                                                                                                      |
| `AddInterStage`                      | Creates a new child InterStage.                                                                                                    |
| `AddJoint`                           | Creates a new child Joint.                                                                                                         |
| `AddBodyInteraction`                 | Creates a new child BodyInteraction.                                                                                               |
| `SearchConnectionsForDuplicatePairs` | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |
| `CreateAutomaticConnections`         | Run the CreateAutomaticConnections action.                                                                                         |
| `ExportModelTopology`                | ExportModelTopology method.                                                                                                        |
| `AddAMBondConnection`                | Creates a new AMBondConnection                                                                                                     |
| `AddBeam`                            | Creates a new Beam                                                                                                                 |
| `AddBearing`                         | Creates a new Bearing                                                                                                              |
| `AddConnectionGroup`                 | Creates a new ConnectionGroup                                                                                                      |
| `AddContactSolutionInformation`      | Creates a new ContactSolutionInformation                                                                                           |
| `AddEndRelease`                      | Creates a new EndRelease                                                                                                           |
| `AddSpring`                          | Creates a new Spring                                                                                                               |
| `GenerateInitialContactResults`      | Generate Initial Contact Results and Mesh Parts                                                                                    |
| `RepairOverlappingContactRegions`    | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                                       |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                                       |
| `AddComment`                         | Creates a new child Comment.                                                                                                       |
| `AddFigure`                          | Creates a new child Figure.                                                                                                        |
| `AddImage`                           | Creates a new child Image.                                                                                                         |
| `Activate`                           | Activate the current object.                                                                                                       |
| `CopyTo`                             | Copies all visible properties from this object to another.                                                                         |
| `Duplicate`                          | Creates a copy of the current DataModelObject.                                                                                     |
| `GroupAllSimilarChildren`            | Run the GroupAllSimilarChildren action.                                                                                            |
| `GroupSimilarObjects`                | Run the GroupSimilarObjects action.                                                                                                |
| `PropertyByName`                     | Get a property by its unique name.                                                                                                 |
| `PropertyByAPIName`                  | Get a property by its API name.                                                                                                    |
| `CreateParameter`                    | Creates a new parameter for a Property.                                                                                            |
| `GetParameter`                       | Gets the parameter corresponding to the given property.                                                                            |
| `RemoveParameter`                    | Removes the parameter from the parameter set corresponding to the given property.                                                  |

### Properties

| Name | Description |
|----------------------------------------|---------------------------------------------------------------|
| `InternalObject`                       | Gets the internal object. For advanced usage only.            |
| `SolverFilesDirectory`                 | Gets or sets the SolverFilesDirectory.                        |
| `GenerateAutomaticConnectionOnRefresh` | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| `FixedJoints`                          | Gets or sets the FixedJoints.                                 |
| `TransparencyEnabled`                  | Gets or sets the TransparencyEnabled.                         |
| `DataModelObjectCategory`              | Gets the current DataModelObject's category.                  |
| `Children`                             | Gets the list of children.                                    |
| `Comments`                             | Gets the list of associated comments.                         |
| `Figures`                              | Gets the list of associated figures.                          |
| `Images`                               | Gets the list of associated images.                           |
| `InternalObject`                       | Gets the internal object. For advanced usage only.            |
| `Properties`                           | Gets the list of properties for this object.                  |
| `VisibleProperties`                    | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Connections.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticConnectionOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* Connections.FixedJoints *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedJoints.

<!-- !! processed by numpydoc !! -->

### *property* Connections.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

### Connections.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Connections.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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


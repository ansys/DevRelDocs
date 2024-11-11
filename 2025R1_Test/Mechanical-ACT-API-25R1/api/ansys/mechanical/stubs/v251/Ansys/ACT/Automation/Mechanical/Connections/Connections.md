# `Connections`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Connections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Connections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Connections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Connections.Activate)                                                     | Activate the current object.                                                                                                       |
| [`AddAMBondConnection`](#Connections.AddAMBondConnection)                               | Creates a new AMBondConnection                                                                                                     |
| [`AddBeam`](#Connections.AddBeam)                                                       | Creates a new Beam                                                                                                                 |
| [`AddBearing`](#Connections.AddBearing)                                                 | Creates a new Bearing                                                                                                              |
| [`AddBodyInteraction`](#Connections.AddBodyInteraction)                                 | Creates a new child BodyInteraction.                                                                                               |
| [`AddComment`](#Connections.AddComment)                                                 | Creates a new child Comment.                                                                                                       |
| [`AddConnectionGroup`](#Connections.AddConnectionGroup)                                 | Creates a new ConnectionGroup                                                                                                      |
| [`AddContactRegion`](#Connections.AddContactRegion)                                     | Creates a new child ContactRegion.                                                                                                 |
| [`AddContactSolutionInformation`](#Connections.AddContactSolutionInformation)           | Creates a new ContactSolutionInformation                                                                                           |
| [`AddContactTool`](#Connections.AddContactTool)                                         | Creates a new ContactTool                                                                                                          |
| [`AddEndRelease`](#Connections.AddEndRelease)                                           | Creates a new EndRelease                                                                                                           |
| [`AddFigure`](#Connections.AddFigure)                                                   | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#Connections.AddImage)                                                     | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#Connections.AddInterStage)                                           | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#Connections.AddJoint)                                                     | Creates a new child Joint.                                                                                                         |
| [`AddSpotWeld`](#Connections.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                                                                      |
| [`AddSpotWeldGroup`](#Connections.AddSpotWeldGroup)                                     | Creates a new child SpotWeldGroup.                                                                                                 |
| [`AddSpring`](#Connections.AddSpring)                                                   | Creates a new Spring                                                                                                               |
| [`CopyTo`](#Connections.CopyTo)                                                         | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#Connections.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateParameter`](#Connections.CreateParameter)                                       | Creates a new parameter for a Property.                                                                                            |
| [`Duplicate`](#Connections.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                                     |
| [`ExportModelTopology`](#Connections.ExportModelTopology)                               | ExportModelTopology method.                                                                                                        |
| [`GenerateInitialContactResults`](#Connections.GenerateInitialContactResults)           | Generate Initial Contact Results and Mesh Parts                                                                                    |
| [`GetChildren`](#Connections.GetChildren)                                               | Gets the list of children, filtered by type.                                                                                       |
| [`GetParameter`](#Connections.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                                            |
| [`GroupAllSimilarChildren`](#Connections.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#Connections.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                                                |
| [`PropertyByAPIName`](#Connections.PropertyByAPIName)                                   | Get a property by its API name.                                                                                                    |
| [`PropertyByName`](#Connections.PropertyByName)                                         | Get a property by its unique name.                                                                                                 |
| [`RemoveParameter`](#Connections.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RepairOverlappingContactRegions`](#Connections.RepairOverlappingContactRegions)       | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#Connections.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Connections.Children)                                                         | Gets the list of children.                                    |
| [`Comments`](#Connections.Comments)                                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Connections.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                  |
| [`Figures`](#Connections.Figures)                                                           | Gets the list of associated figures.                          |
| [`FixedJoints`](#Connections.FixedJoints)                                                   | Gets or sets the FixedJoints.                                 |
| [`GenerateAutomaticConnectionOnRefresh`](#Connections.GenerateAutomaticConnectionOnRefresh) | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| [`Images`](#Connections.Images)                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#Connections.InternalObject)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Connections.Properties)                                                     | Gets the list of properties for this object.                  |
| [`SolverFilesDirectory`](#Connections.SolverFilesDirectory)                                 | Gets or sets the SolverFilesDirectory.                        |
| [`TransparencyEnabled`](#Connections.TransparencyEnabled)                                   | Gets or sets the TransparencyEnabled.                         |
| [`VisibleProperties`](#Connections.VisibleProperties)                                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connections.Children"></a>

### *property* Connections.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Comments"></a>

### *property* Connections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DataModelObjectCategory"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Figures"></a>

### *property* Connections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FixedJoints"></a>

### *property* Connections.FixedJoints *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateAutomaticConnectionOnRefresh"></a>

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticConnectionOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Images"></a>

### *property* Connections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InternalObject"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Properties"></a>

### *property* Connections.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SolverFilesDirectory"></a>

### *property* Connections.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TransparencyEnabled"></a>

### *property* Connections.TransparencyEnabled *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="Connections.VisibleProperties"></a>

### *property* Connections.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connections.Activate"></a>

### Connections.Activate()

Activate the current object.

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

<a id="Connections.AddBodyInteraction"></a>

### Connections.AddBodyInteraction()

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddComment"></a>

### Connections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddConnectionGroup"></a>

### Connections.AddConnectionGroup()

Creates a new ConnectionGroup

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactRegion"></a>

### Connections.AddContactRegion()

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactSolutionInformation"></a>

### Connections.AddContactSolutionInformation()

Creates a new ContactSolutionInformation

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactTool"></a>

### Connections.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddEndRelease"></a>

### Connections.AddEndRelease()

Creates a new EndRelease

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddFigure"></a>

### Connections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddImage"></a>

### Connections.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddInterStage"></a>

### Connections.AddInterStage()

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddJoint"></a>

### Connections.AddJoint()

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeld"></a>

### Connections.AddSpotWeld()

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeldGroup"></a>

### Connections.AddSpotWeldGroup()

Creates a new child SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpring"></a>

### Connections.AddSpring()

Creates a new Spring

<!-- !! processed by numpydoc !! -->

<a id="Connections.CopyTo"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateAutomaticConnections"></a>

### Connections.CreateAutomaticConnections()

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateParameter"></a>

### Connections.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Duplicate"></a>

### Connections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportModelTopology"></a>

### Connections.ExportModelTopology(filename: [str](https://docs.python.org/3/library/stdtypes.html#str))

ExportModelTopology method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateInitialContactResults"></a>

### Connections.GenerateInitialContactResults()

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetChildren"></a>

### Connections.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetParameter"></a>

### Connections.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupAllSimilarChildren"></a>

### Connections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupSimilarObjects"></a>

### Connections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByAPIName"></a>

### Connections.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByName"></a>

### Connections.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RemoveParameter"></a>

### Connections.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RepairOverlappingContactRegions"></a>

### Connections.RepairOverlappingContactRegions()

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SearchConnectionsForDuplicatePairs"></a>

### Connections.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->


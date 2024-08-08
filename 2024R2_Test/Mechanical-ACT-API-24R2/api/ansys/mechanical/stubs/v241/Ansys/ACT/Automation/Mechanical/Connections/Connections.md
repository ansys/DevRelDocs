# `Connections`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Connections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Connections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddContactRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddContactRegion)                                     | Creates a new child ContactRegion.                                                |
| [`AddContactTool`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddContactTool)                                         | Creates a new ContactTool                                                         |
| [`AddSpotWeldGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddSpotWeldGroup)                                     | Creates a new child SpotWeldGroup.                                                |
| [`AddSpotWeld`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddSpotWeld)                                               | Creates a new child SpotWeld.                                                     |
| [`AddInterStage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddInterStage)                                           | Creates a new child InterStage.                                                   |
| [`AddJoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddJoint)                                                     | Creates a new child Joint.                                                        |
| [`AddBodyInteraction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddBodyInteraction)                                 | Creates a new child BodyInteraction.                                              |
| [`SearchConnectionsForDuplicatePairs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`CreateAutomaticConnections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.CreateAutomaticConnections)                 | Run the CreateAutomaticConnections action.                                        |
| [`ExportModelTopology`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.ExportModelTopology)                               | ExportModelTopology method.                                                       |
| [`AddAMBondConnection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddAMBondConnection)                               | Creates a new AMBondConnection                                                    |
| [`AddBeam`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddBeam)                                                       | Creates a new Beam                                                                |
| [`AddBearing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddBearing)                                                 | Creates a new Bearing                                                             |
| [`AddConnectionGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddConnectionGroup)                                 | Creates a new ConnectionGroup                                                     |
| [`AddContactSolutionInformation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddContactSolutionInformation)           | Creates a new ContactSolutionInformation                                          |
| [`AddEndRelease`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddEndRelease)                                           | Creates a new EndRelease                                                          |
| [`AddSpring`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddSpring)                                                   | Creates a new Spring                                                              |
| [`GenerateInitialContactResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.GenerateInitialContactResults)           | Run the GenerateInitialContactResults action.                                     |
| [`RepairOverlappingContactRegions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.RepairOverlappingContactRegions)       | Run the RepairOverlappingContactRegions action.                                   |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#id0)                                                                    | Gets the internal object. For advanced usage only.            |
| [`SolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.SolverFilesDirectory)                                 | Gets or sets the SolverFilesDirectory.                        |
| [`GenerateAutomaticConnectionOnRefresh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.GenerateAutomaticConnectionOnRefresh) | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| [`FixedJoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.FixedJoints)                                                   | Gets or sets the FixedJoints.                                 |
| [`TransparencyEnabled`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.TransparencyEnabled)                                   | Gets or sets the TransparencyEnabled.                         |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.DataModelObjectCategory)                           | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Children)                                                         | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Comments)                                                         | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Figures)                                                           | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Images)                                                             | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#id0)                                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.Properties)                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Connections/Connections.md#Connections.VisibleProperties)                                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connections.InternalObject"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SolverFilesDirectory"></a>

### *property* Connections.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateAutomaticConnectionOnRefresh"></a>

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="Connections.DataModelObjectCategory"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Children"></a>

### *property* Connections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Comments"></a>

### *property* Connections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Figures"></a>

### *property* Connections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Images"></a>

### *property* Connections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

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

<a id="Connections.SearchConnectionsForDuplicatePairs"></a>

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

<a id="Connections.GenerateInitialContactResults"></a>

### Connections.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RepairOverlappingContactRegions"></a>

### Connections.RepairOverlappingContactRegions()

Run the RepairOverlappingContactRegions action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetChildren"></a>

### Connections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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


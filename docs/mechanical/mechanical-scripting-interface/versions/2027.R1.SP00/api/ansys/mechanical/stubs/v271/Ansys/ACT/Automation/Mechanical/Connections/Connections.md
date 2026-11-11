# `Connections`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Connections"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.Connections(internalObject: Any)

<a id="Connections"></a>

### *class* Connections(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Connections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Connections.Activate)                                                                                   | Activate the current object.                                                                                                       |
| [`AddAMBondConnection`](#Connections.AddAMBondConnection)                                                             | Creates a new AMBondConnection                                                                                                     |
| [`AddBeam`](#Connections.AddBeam)                                                                                     | Creates a new Beam                                                                                                                 |
| [`AddBeamInternal`](#Connections.AddBeamInternal)                                                                     | AddBeamInternal method.                                                                                                            |
| [`AddBearing`](#Connections.AddBearing)                                                                               | Creates a new Bearing                                                                                                              |
| [`AddBodyInteraction`](#Connections.AddBodyInteraction)                                                               | Creates a new child BodyInteraction.                                                                                               |
| [`AddComment`](#Connections.AddComment)                                                                               | Creates a new child Comment.                                                                                                       |
| [`AddConnectionGroup`](#Connections.AddConnectionGroup)                                                               | Creates a new ConnectionGroup                                                                                                      |
| [`AddContactDefinition`](#Connections.AddContactDefinition)                                                           | Creates a new child .                                                                                                              |
| [`AddContactRegion`](#Connections.AddContactRegion)                                                                   | Creates a new child ContactRegion.                                                                                                 |
| [`AddContactRegionInternal`](#Connections.AddContactRegionInternal)                                                   | AddContactRegionInternal method.                                                                                                   |
| [`AddContactSolutionInformation`](#Connections.AddContactSolutionInformation)                                         | Creates a new ContactSolutionInformation                                                                                           |
| [`AddContactTool`](#Connections.AddContactTool)                                                                       | Creates a new ContactTool                                                                                                          |
| [`AddEndRelease`](#Connections.AddEndRelease)                                                                         | Creates a new EndRelease                                                                                                           |
| [`AddFigure`](#Connections.AddFigure)                                                                                 | Creates a new child Figure.                                                                                                        |
| [`AddImage`](#Connections.AddImage)                                                                                   | Creates a new child Image.                                                                                                         |
| [`AddInterStage`](#Connections.AddInterStage)                                                                         | Creates a new child InterStage.                                                                                                    |
| [`AddJoint`](#Connections.AddJoint)                                                                                   | Creates a new child Joint.                                                                                                         |
| [`AddJointInternal`](#Connections.AddJointInternal)                                                                   | AddJointInternal method.                                                                                                           |
| [`AddSpotWeld`](#Connections.AddSpotWeld)                                                                             | Creates a new child SpotWeld.                                                                                                      |
| [`AddSpotWeldGroup`](#Connections.AddSpotWeldGroup)                                                                   | Creates a new child SpotWeldGroup.                                                                                                 |
| [`AddSpring`](#Connections.AddSpring)                                                                                 | Creates a new Spring                                                                                                               |
| [`AddSpringInternal`](#Connections.AddSpringInternal)                                                                 | AddSpringInternal method.                                                                                                          |
| [`AddTransducer`](#Connections.AddTransducer)                                                                         | Creates a new child Transducer.                                                                                                    |
| [`Copy`](#Connections.Copy)                                                                                           | Copies the current DataModelObject.                                                                                                |
| [`CopyTo`](#Connections.CopyTo)                                                                                       | Copies all visible properties from this object to another.                                                                         |
| [`CreateAutomaticConnections`](#Connections.CreateAutomaticConnections)                                               | Run the CreateAutomaticConnections action.                                                                                         |
| [`CreateObjRef`](#Connections.CreateObjRef)                                                                           | CreateObjRef method.                                                                                                               |
| [`CreateParameter`](#Connections.CreateParameter)                                                                     | Creates a new parameter for a Property.                                                                                            |
| [`Cut`](#Connections.Cut)                                                                                             | Cuts the current DataModelObject.                                                                                                  |
| [`Duplicate`](#Connections.Duplicate)                                                                                 | Creates a copy of the current DataModelObject.                                                                                     |
| [`Equals`](#Connections.Equals)                                                                                       | Equals method.                                                                                                                     |
| [`ExportContactDefinitions`](#Connections.ExportContactDefinitions)                                                   | Exports the settings of all ContactDefinitions directly under this Connections object.                                             |
| [`ExportModelTopology`](#Connections.ExportModelTopology)                                                             | ExportModelTopology method.                                                                                                        |
| [`GenerateInitialContactResults`](#Connections.GenerateInitialContactResults)                                         | Generate Initial Contact Results and Mesh Parts                                                                                    |
| [`GetAPIName`](#Connections.GetAPIName)                                                                               | Property name bound to dispId.                                                                                                     |
| [`GetAllProperties`](#Connections.GetAllProperties)                                                                   | GetAllProperties method.                                                                                                           |
| [`GetChildren`](#Connections.GetChildren)                                                                             | Gets the list of children, filtered by type.                                                                                       |
| [`GetDetailsView`](#Connections.GetDetailsView)                                                                       | GetDetailsView method.                                                                                                             |
| [`GetEnumName`](#Connections.GetEnumName)                                                                             | Enum name bound to value                                                                                                           |
| [`GetHashCode`](#Connections.GetHashCode)                                                                             | GetHashCode method.                                                                                                                |
| [`GetIconFile`](#Connections.GetIconFile)                                                                             | GetIconFile method.                                                                                                                |
| [`GetJSON`](#Connections.GetJSON)                                                                                     | GetJSON method.                                                                                                                    |
| [`GetLifetimeService`](#Connections.GetLifetimeService)                                                               | GetLifetimeService method.                                                                                                         |
| [`GetObjectData`](#Connections.GetObjectData)                                                                         | GetObjectData method.                                                                                                              |
| [`GetParameter`](#Connections.GetParameter)                                                                           | Gets the parameter corresponding to the given property.                                                                            |
| [`GetPath`](#Connections.GetPath)                                                                                     | GetPath method.                                                                                                                    |
| [`GetPropertyName`](#Connections.GetPropertyName)                                                                     | GetPropertyName method.                                                                                                            |
| [`GetPropertyValue`](#Connections.GetPropertyValue)                                                                   | GetPropertyValue method.                                                                                                           |
| [`GetTableGenerator`](#Connections.GetTableGenerator)                                                                 | GetTableGenerator method.                                                                                                          |
| [`GetVisibleProperties`](#Connections.GetVisibleProperties)                                                           | GetVisibleProperties method.                                                                                                       |
| [`GetVisiblePropertyNames`](#Connections.GetVisiblePropertyNames)                                                     | GetVisiblePropertyNames method.                                                                                                    |
| [`GroupAllSimilarChildren`](#Connections.GroupAllSimilarChildren)                                                     | Run the GroupAllSimilarChildren action.                                                                                            |
| [`GroupSimilarObjects`](#Connections.GroupSimilarObjects)                                                             | Run the GroupSimilarObjects action.                                                                                                |
| [`ImportContactDefinitions`](#Connections.ImportContactDefinitions)                                                   | Imports ContactDefinitions under this Connections object from a ContactDefinition settings XML file.                               |
| [`InitializeLifetimeService`](#Connections.InitializeLifetimeService)                                                 | InitializeLifetimeService method.                                                                                                  |
| [`IsPropertyEditable`](#Connections.IsPropertyEditable)                                                               | IsPropertyEditable method.                                                                                                         |
| [`IsPropertyVisible`](#Connections.IsPropertyVisible)                                                                 | IsPropertyVisible method.                                                                                                          |
| [`Paste`](#Connections.Paste)                                                                                         | Pastes to the current DataModelObject context.                                                                                     |
| [`PromoteMultipleContactRegionsToContactDefinitions`](#Connections.PromoteMultipleContactRegionsToContactDefinitions) | PromoteMultipleContactRegionsToContactDefinitions method.                                                                          |
| [`PromoteToContactDefinition`](#Connections.PromoteToContactDefinition)                                               | Promotes one ContactRegion to a new ContactDefinition and links the region to it.                                                  |
| [`PropertyByAPIName`](#Connections.PropertyByAPIName)                                                                 | Get a property by its API name.                                                                                                    |
| [`PropertyById`](#Connections.PropertyById)                                                                           | PropertyById method.                                                                                                               |
| [`PropertyByName`](#Connections.PropertyByName)                                                                       | Get a property by its unique name.                                                                                                 |
| [`RemoveFromGroup`](#Connections.RemoveFromGroup)                                                                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                        |
| [`RemoveParameter`](#Connections.RemoveParameter)                                                                     | Removes the parameter from the parameter set corresponding to the given property.                                                  |
| [`RenameBasedOnDefinition`](#Connections.RenameBasedOnDefinition)                                                     | Run the RenameBasedOnDefinition action.                                                                                            |
| [`RepairOverlappingContactRegions`](#Connections.RepairOverlappingContactRegions)                                     | Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed. |
| [`SearchConnectionsForDuplicatePairs`](#Connections.SearchConnectionsForDuplicatePairs)                               | Run the SearchConnectionsForDuplicatePairs action.                                                                                 |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Connections.AttachedRefs)                                                 | AttachedRefs property.                                        |
| [`Children`](#Connections.Children)                                                         | Gets the list of children.                                    |
| [`ClsId`](#Connections.ClsId)                                                               | ClsId property.                                               |
| [`Comments`](#Connections.Comments)                                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Connections.DataModelObjectCategory)                           | Gets the current DataModelObject's category.                  |
| [`Figures`](#Connections.Figures)                                                           | Gets the list of associated figures.                          |
| [`FixedJoints`](#Connections.FixedJoints)                                                   | Gets or sets the FixedJoints.                                 |
| [`GenerateAutomaticConnectionOnRefresh`](#Connections.GenerateAutomaticConnectionOnRefresh) | Gets or sets the GenerateAutomaticConnectionOnRefresh.        |
| [`GroupingFolder`](#Connections.GroupingFolder)                                             | GroupingFolder property.                                      |
| [`IconName`](#Connections.IconName)                                                         | IconName property.                                            |
| [`Images`](#Connections.Images)                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#Connections.InternalObject)                                             | Gets the internal object. For advanced usage only.            |
| [`Name`](#Connections.Name)                                                                 | Name property.                                                |
| [`ObjectId`](#Connections.ObjectId)                                                         | ObjectId property.                                            |
| [`ObjectState`](#Connections.ObjectState)                                                   | ObjectState property.                                         |
| [`ObjectTags`](#Connections.ObjectTags)                                                     | ObjectTags property.                                          |
| [`Parent`](#Connections.Parent)                                                             | Parent property.                                              |
| [`Properties`](#Connections.Properties)                                                     | Gets the list of properties for this object.                  |
| [`SolverFilesDirectory`](#Connections.SolverFilesDirectory)                                 | Gets or sets the SolverFilesDirectory.                        |
| [`State`](#Connections.State)                                                               | State property.                                               |
| [`TransparencyEnabled`](#Connections.TransparencyEnabled)                                   | Gets or sets the TransparencyEnabled.                         |
| [`VisibleProperties`](#Connections.VisibleProperties)                                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Connections.AttachedRefs"></a>

### *property* Connections.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Children"></a>

### *property* Connections.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ClsId"></a>

### *property* Connections.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Comments"></a>

### *property* Connections.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Connections.DataModelObjectCategory"></a>

### *property* Connections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Figures"></a>

### *property* Connections.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Connections.FixedJoints"></a>

### *property* Connections.FixedJoints *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FixedJoints.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateAutomaticConnectionOnRefresh"></a>

### *property* Connections.GenerateAutomaticConnectionOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateAutomaticConnectionOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupingFolder"></a>

### *property* Connections.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.IconName"></a>

### *property* Connections.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Images"></a>

### *property* Connections.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Connections.InternalObject"></a>

### *property* Connections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Name"></a>

### *property* Connections.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ObjectId"></a>

### *property* Connections.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ObjectState"></a>

### *property* Connections.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ObjectTags"></a>

### *property* Connections.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Parent"></a>

### *property* Connections.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Properties"></a>

### *property* Connections.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SolverFilesDirectory"></a>

### *property* Connections.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Connections.State"></a>

### *property* Connections.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.TransparencyEnabled"></a>

### *property* Connections.TransparencyEnabled *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="Connections.VisibleProperties"></a>

### *property* Connections.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Connections.Activate"></a>

### Connections.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddAMBondConnection"></a>

### Connections.AddAMBondConnection() → [Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection](AMBondConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection)

Creates a new AMBondConnection

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBeam"></a>

### Connections.AddBeam() → [Ansys.ACT.Automation.Mechanical.Connections.Beam](Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam)

Creates a new Beam

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBeamInternal"></a>

### Connections.AddBeamInternal() → [Ansys.ACT.Automation.Mechanical.Connections.Beam](Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam)

AddBeamInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBearing"></a>

### Connections.AddBearing() → [Ansys.ACT.Automation.Mechanical.Connections.Bearing](Bearing.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Bearing)

Creates a new Bearing

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddBodyInteraction"></a>

### Connections.AddBodyInteraction() → [Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction](BodyInteraction.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction)

Creates a new child BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddComment"></a>

### Connections.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddConnectionGroup"></a>

### Connections.AddConnectionGroup() → [Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup](ConnectionGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ConnectionGroup)

Creates a new ConnectionGroup

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactDefinition"></a>

### Connections.AddContactDefinition() → [Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition](ContactDefinition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition)

Creates a new child .

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactRegion"></a>

### Connections.AddContactRegion() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactRegionInternal"></a>

### Connections.AddContactRegionInternal() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

AddContactRegionInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactSolutionInformation"></a>

### Connections.AddContactSolutionInformation() → [Ansys.ACT.Automation.Mechanical.ContactSolutionInformation](../ContactSolutionInformation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactSolutionInformation)

Creates a new ContactSolutionInformation

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddContactTool"></a>

### Connections.AddContactTool() → [Ansys.ACT.Automation.Mechanical.PreContactTool](../PreContactTool.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreContactTool)

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddEndRelease"></a>

### Connections.AddEndRelease() → [Ansys.ACT.Automation.Mechanical.EndRelease](../EndRelease.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EndRelease)

Creates a new EndRelease

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddFigure"></a>

### Connections.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddImage"></a>

### Connections.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddInterStage"></a>

### Connections.AddInterStage() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child InterStage.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddJoint"></a>

### Connections.AddJoint() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

Creates a new child Joint.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddJointInternal"></a>

### Connections.AddJointInternal() → [Ansys.ACT.Automation.Mechanical.Connections.Joint](Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint)

AddJointInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeld"></a>

### Connections.AddSpotWeld() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child SpotWeld.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpotWeldGroup"></a>

### Connections.AddSpotWeldGroup() → [Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup](SpotWeldGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.SpotWeldGroup)

Creates a new child SpotWeldGroup.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpring"></a>

### Connections.AddSpring() → [Ansys.ACT.Automation.Mechanical.Connections.Spring](Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring)

Creates a new Spring

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddSpringInternal"></a>

### Connections.AddSpringInternal() → [Ansys.ACT.Automation.Mechanical.Connections.Spring](Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring)

AddSpringInternal method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.AddTransducer"></a>

### Connections.AddTransducer() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Creates a new child Transducer.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Copy"></a>

### Connections.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CopyTo"></a>

### Connections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateAutomaticConnections"></a>

### Connections.CreateAutomaticConnections() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticConnections action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateObjRef"></a>

### Connections.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.CreateParameter"></a>

### Connections.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Cut"></a>

### Connections.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Duplicate"></a>

### Connections.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Equals"></a>

### Connections.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportContactDefinitions"></a>

### Connections.ExportContactDefinitions(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Exports the settings of all ContactDefinitions directly under this Connections object.
All definitions are written to the file using the same format as a single ContactDefinition XML document.
Each ContactDefinition is distinguished by the definition name in its Name attribute.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.ExportModelTopology"></a>

### Connections.ExportModelTopology(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportModelTopology method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GenerateInitialContactResults"></a>

### Connections.GenerateInitialContactResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetAPIName"></a>

### Connections.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetAllProperties"></a>

### Connections.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetChildren"></a>

### Connections.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Connections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetDetailsView"></a>

### Connections.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetEnumName"></a>

### Connections.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetHashCode"></a>

### Connections.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetIconFile"></a>

### Connections.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetJSON"></a>

### Connections.GetJSON() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetJSON method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetLifetimeService"></a>

### Connections.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetObjectData"></a>

### Connections.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetParameter"></a>

### Connections.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetPath"></a>

### Connections.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetPropertyName"></a>

### Connections.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetPropertyValue"></a>

### Connections.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetTableGenerator"></a>

### Connections.GetTableGenerator() → Ansys.ACT.Automation.Mechanical.Connections.ConnectionsTableGenerator

GetTableGenerator method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetVisibleProperties"></a>

### Connections.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GetVisiblePropertyNames"></a>

### Connections.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupAllSimilarChildren"></a>

### Connections.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.GroupSimilarObjects"></a>

### Connections.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.ImportContactDefinitions"></a>

### Connections.ImportContactDefinitions(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Imports ContactDefinitions under this Connections object from a ContactDefinition settings XML file.
One or more ContactDefinitions are created for each definition defined in the XML file.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.InitializeLifetimeService"></a>

### Connections.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.IsPropertyEditable"></a>

### Connections.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Connections.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.IsPropertyVisible"></a>

### Connections.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Connections.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.Paste"></a>

### Connections.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PromoteMultipleContactRegionsToContactDefinitions"></a>

### Connections.PromoteMultipleContactRegionsToContactDefinitions(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition](ContactDefinition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition)

PromoteMultipleContactRegionsToContactDefinitions method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PromoteToContactDefinition"></a>

### Connections.PromoteToContactDefinition(contactRegion: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)) → [Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition](ContactDefinition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactDefinition)

Promotes one ContactRegion to a new ContactDefinition and links the region to it.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByAPIName"></a>

### Connections.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyById"></a>

### Connections.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Connections.PropertyByName"></a>

### Connections.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RemoveFromGroup"></a>

### Connections.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RemoveParameter"></a>

### Connections.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RenameBasedOnDefinition"></a>

### Connections.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="Connections.RepairOverlappingContactRegions"></a>

### Connections.RepairOverlappingContactRegions() → [None](https://docs.python.org/3/builtins/constants.html#None)

Check for Overlapping Contact Regions. However, please note that this action does not result in any actual repair being performed.

<!-- !! processed by numpydoc !! -->

<a id="Connections.SearchConnectionsForDuplicatePairs"></a>

### Connections.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->


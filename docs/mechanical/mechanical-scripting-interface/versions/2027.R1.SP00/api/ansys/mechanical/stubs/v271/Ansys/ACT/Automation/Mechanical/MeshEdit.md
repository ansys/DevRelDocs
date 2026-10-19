# `MeshEdit`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshEdit"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshEdit(internalObject: Any)

<a id="MeshEdit"></a>

### *class* MeshEdit(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshEdit.Activate)                                                     | Activate the current object.                                                                |
| [`AddComment`](#MeshEdit.AddComment)                                                 | Creates a new child Comment.                                                                |
| [`AddContactMatchGroup`](#MeshEdit.AddContactMatchGroup)                             | Creates a new ContactMatchGroup                                                             |
| [`AddDirectMorph`](#MeshEdit.AddDirectMorph)                                         | Creates a new DirectMorph                                                                   |
| [`AddFigure`](#MeshEdit.AddFigure)                                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshEdit.AddImage)                                                     | Creates a new child Image.                                                                  |
| [`AddManualMeshConnection`](#MeshEdit.AddManualMeshConnection)                       | Add a new ManualMeshConnection                                                              |
| [`AddMeshConnectionGroup`](#MeshEdit.AddMeshConnectionGroup)                         | Creates a new MeshConnectionGroup                                                           |
| [`AddNodeMerge`](#MeshEdit.AddNodeMerge)                                             | Add a new NodeMerge.                                                                        |
| [`AddNodeMergeGroup`](#MeshEdit.AddNodeMergeGroup)                                   | Creates a new NodeMergeGroup                                                                |
| [`AddNodeMove`](#MeshEdit.AddNodeMove)                                               | Creates a new NodeMove                                                                      |
| [`AddPullExtrude`](#MeshEdit.AddPullExtrude)                                         | Creates a new MeshExtrude                                                                   |
| [`AddPullRevolve`](#MeshEdit.AddPullRevolve)                                         | Creates a new MeshExtrude                                                                   |
| [`AddPullSurfaceCoating`](#MeshEdit.AddPullSurfaceCoating)                           | Creates a new MeshExtrude                                                                   |
| [`ClearGeneratedData`](#MeshEdit.ClearGeneratedData)                                 | Clear the generated data.                                                                   |
| [`Copy`](#MeshEdit.Copy)                                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshEdit.CopyTo)                                                         | Copies all visible properties from this object to another.                                  |
| [`CreateNamedSelectionForSharedNodes`](#MeshEdit.CreateNamedSelectionForSharedNodes) | Run the CreateNamedSelectionForSharedNodes action.                                          |
| [`CreateObjRef`](#MeshEdit.CreateObjRef)                                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshEdit.CreateParameter)                                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshEdit.Cut)                                                               | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#MeshEdit.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshEdit.Equals)                                                         | Equals method.                                                                              |
| [`Generate`](#MeshEdit.Generate)                                                     | Generate all mesh edits.                                                                    |
| [`GenerateSelectedMeshConnectionsACT`](#MeshEdit.GenerateSelectedMeshConnectionsACT) | GenerateSelectedMeshConnectionsACT method.                                                  |
| [`GetAPIName`](#MeshEdit.GetAPIName)                                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshEdit.GetAllProperties)                                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshEdit.GetChildren)                                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshEdit.GetDetailsView)                                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshEdit.GetEnumName)                                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshEdit.GetHashCode)                                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshEdit.GetIconFile)                                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshEdit.GetLifetimeService)                                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshEdit.GetObjectData)                                           | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshEdit.GetParameter)                                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshEdit.GetPath)                                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshEdit.GetPropertyName)                                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshEdit.GetPropertyValue)                                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshEdit.GetVisibleProperties)                             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshEdit.GetVisiblePropertyNames)                       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshEdit.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshEdit.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshEdit.InitializeLifetimeService)                   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshEdit.IsPropertyEditable)                                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshEdit.IsPropertyVisible)                                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshEdit.Paste)                                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshEdit.PropertyByAPIName)                                   | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshEdit.PropertyById)                                             | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshEdit.PropertyByName)                                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshEdit.RemoveFromGroup)                                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshEdit.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MeshEdit.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                                     |
| [`SearchConnectionsForDuplicatePairs`](#MeshEdit.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                          |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`AssociateToPullGeometry`](#MeshEdit.AssociateToPullGeometry)                                     | To Migrate Boundary Conditions from profile to resulting Pull bodies.   |
| [`AttachedRefs`](#MeshEdit.AttachedRefs)                                                           | AttachedRefs property.                                                  |
| [`Children`](#MeshEdit.Children)                                                                   | Gets the list of children.                                              |
| [`ClsId`](#MeshEdit.ClsId)                                                                         | ClsId property.                                                         |
| [`Comments`](#MeshEdit.Comments)                                                                   | Gets the list of associated comments.                                   |
| [`DataModelObjectCategory`](#MeshEdit.DataModelObjectCategory)                                     | Gets the current DataModelObject's category.                            |
| [`Figures`](#MeshEdit.Figures)                                                                     | Gets the list of associated figures.                                    |
| [`GenerateAutomaticMeshConnectionsOnRefresh`](#MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh) | Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.             |
| [`GroupingFolder`](#MeshEdit.GroupingFolder)                                                       | GroupingFolder property.                                                |
| [`IconName`](#MeshEdit.IconName)                                                                   | IconName property.                                                      |
| [`Images`](#MeshEdit.Images)                                                                       | Gets the list of associated images.                                     |
| [`InternalObject`](#MeshEdit.InternalObject)                                                       | Gets the internal object. For advanced usage only.                      |
| [`Name`](#MeshEdit.Name)                                                                           | Name property.                                                          |
| [`ObjectId`](#MeshEdit.ObjectId)                                                                   | ObjectId property.                                                      |
| [`ObjectState`](#MeshEdit.ObjectState)                                                             | ObjectState property.                                                   |
| [`ObjectTags`](#MeshEdit.ObjectTags)                                                               | ObjectTags property.                                                    |
| [`Parent`](#MeshEdit.Parent)                                                                       | Parent property.                                                        |
| [`Properties`](#MeshEdit.Properties)                                                               | Gets the list of properties for this object.                            |
| [`State`](#MeshEdit.State)                                                                         | State property.                                                         |
| [`TransparencyEnabled`](#MeshEdit.TransparencyEnabled)                                             | Gets or sets the TransparencyEnabled.                                   |
| [`VisibleProperties`](#MeshEdit.VisibleProperties)                                                 | Gets the list of properties that are visible for this object.           |

<a id="property-detail"></a>

## Property detail

<a id="MeshEdit.AssociateToPullGeometry"></a>

### *property* MeshEdit.AssociateToPullGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

To Migrate Boundary Conditions from profile to resulting Pull bodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AttachedRefs"></a>

### *property* MeshEdit.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Children"></a>

### *property* MeshEdit.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.ClsId"></a>

### *property* MeshEdit.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Comments"></a>

### *property* MeshEdit.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.DataModelObjectCategory"></a>

### *property* MeshEdit.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Figures"></a>

### *property* MeshEdit.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh"></a>

### *property* MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GroupingFolder"></a>

### *property* MeshEdit.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.IconName"></a>

### *property* MeshEdit.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Images"></a>

### *property* MeshEdit.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.InternalObject"></a>

### *property* MeshEdit.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionsParentAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Name"></a>

### *property* MeshEdit.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.ObjectId"></a>

### *property* MeshEdit.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.ObjectState"></a>

### *property* MeshEdit.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.ObjectTags"></a>

### *property* MeshEdit.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Parent"></a>

### *property* MeshEdit.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Properties"></a>

### *property* MeshEdit.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.State"></a>

### *property* MeshEdit.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.TransparencyEnabled"></a>

### *property* MeshEdit.TransparencyEnabled *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.VisibleProperties"></a>

### *property* MeshEdit.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshEdit.Activate"></a>

### MeshEdit.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddComment"></a>

### MeshEdit.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddContactMatchGroup"></a>

### MeshEdit.AddContactMatchGroup() → [Ansys.ACT.Automation.Mechanical.ContactMatchGroup](ContactMatchGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactMatchGroup)

Creates a new ContactMatchGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddDirectMorph"></a>

### MeshEdit.AddDirectMorph() → [Ansys.ACT.Automation.Mechanical.DirectMorph](DirectMorph.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DirectMorph)

Creates a new DirectMorph

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddFigure"></a>

### MeshEdit.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddImage"></a>

### MeshEdit.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddManualMeshConnection"></a>

### MeshEdit.AddManualMeshConnection() → [Ansys.ACT.Automation.Mechanical.MeshConnection](MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection)

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddMeshConnectionGroup"></a>

### MeshEdit.AddMeshConnectionGroup() → [Ansys.ACT.Automation.Mechanical.MeshConnectionGroup](MeshConnectionGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnectionGroup)

Creates a new MeshConnectionGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMerge"></a>

### MeshEdit.AddNodeMerge() → [Ansys.ACT.Automation.Mechanical.NodeMerge](NodeMerge.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMerge)

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMergeGroup"></a>

### MeshEdit.AddNodeMergeGroup() → [Ansys.ACT.Automation.Mechanical.NodeMergeGroup](NodeMergeGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMergeGroup)

Creates a new NodeMergeGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMove"></a>

### MeshEdit.AddNodeMove() → [Ansys.ACT.Automation.Mechanical.NodeMove](NodeMove.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMove)

Creates a new NodeMove

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullExtrude"></a>

### MeshEdit.AddPullExtrude() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](MeshExtrude.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullRevolve"></a>

### MeshEdit.AddPullRevolve() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](MeshExtrude.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullSurfaceCoating"></a>

### MeshEdit.AddPullSurfaceCoating() → [Ansys.ACT.Automation.Mechanical.MeshExtrude](MeshExtrude.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshExtrude)

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.ClearGeneratedData"></a>

### MeshEdit.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear the generated data.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Copy"></a>

### MeshEdit.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CopyTo"></a>

### MeshEdit.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CreateNamedSelectionForSharedNodes"></a>

### MeshEdit.CreateNamedSelectionForSharedNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateNamedSelectionForSharedNodes action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CreateObjRef"></a>

### MeshEdit.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CreateParameter"></a>

### MeshEdit.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Cut"></a>

### MeshEdit.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Duplicate"></a>

### MeshEdit.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Equals"></a>

### MeshEdit.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Generate"></a>

### MeshEdit.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate all mesh edits.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GenerateSelectedMeshConnectionsACT"></a>

### MeshEdit.GenerateSelectedMeshConnectionsACT(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GenerateSelectedMeshConnectionsACT method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetAPIName"></a>

### MeshEdit.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetAllProperties"></a>

### MeshEdit.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetChildren"></a>

### MeshEdit.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshEdit.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetDetailsView"></a>

### MeshEdit.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetEnumName"></a>

### MeshEdit.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetHashCode"></a>

### MeshEdit.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetIconFile"></a>

### MeshEdit.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetLifetimeService"></a>

### MeshEdit.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetObjectData"></a>

### MeshEdit.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetParameter"></a>

### MeshEdit.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetPath"></a>

### MeshEdit.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetPropertyName"></a>

### MeshEdit.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetPropertyValue"></a>

### MeshEdit.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetVisibleProperties"></a>

### MeshEdit.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetVisiblePropertyNames"></a>

### MeshEdit.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GroupAllSimilarChildren"></a>

### MeshEdit.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GroupSimilarObjects"></a>

### MeshEdit.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.InitializeLifetimeService"></a>

### MeshEdit.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.IsPropertyEditable"></a>

### MeshEdit.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshEdit.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.IsPropertyVisible"></a>

### MeshEdit.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshEdit.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Paste"></a>

### MeshEdit.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.PropertyByAPIName"></a>

### MeshEdit.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.PropertyById"></a>

### MeshEdit.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.PropertyByName"></a>

### MeshEdit.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.RemoveFromGroup"></a>

### MeshEdit.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.RemoveParameter"></a>

### MeshEdit.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.RenameBasedOnDefinition"></a>

### MeshEdit.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.SearchConnectionsForDuplicatePairs"></a>

### MeshEdit.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->


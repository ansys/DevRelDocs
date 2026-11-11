# `NodeMove`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMove"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NodeMove(internalObject: Any)

<a id="NodeMove"></a>

### *class* NodeMove(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodeMove.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NodeMove.Activate)                                   | Activate the current object.                                                                                                                                                                             |
| [`AddComment`](#NodeMove.AddComment)                               | Creates a new child Comment.                                                                                                                                                                             |
| [`AddFigure`](#NodeMove.AddFigure)                                 | Creates a new child Figure.                                                                                                                                                                              |
| [`AddImage`](#NodeMove.AddImage)                                   | Creates a new child Image.                                                                                                                                                                               |
| [`Copy`](#NodeMove.Copy)                                           | Copies the current DataModelObject.                                                                                                                                                                      |
| [`CopyTo`](#NodeMove.CopyTo)                                       | Copies all visible properties from this object to another.                                                                                                                                               |
| [`CreateObjRef`](#NodeMove.CreateObjRef)                           | CreateObjRef method.                                                                                                                                                                                     |
| [`CreateParameter`](#NodeMove.CreateParameter)                     | Creates a new parameter for a Property.                                                                                                                                                                  |
| [`Cut`](#NodeMove.Cut)                                             | Cuts the current DataModelObject.                                                                                                                                                                        |
| [`Delete`](#NodeMove.Delete)                                       | Run the Delete action.                                                                                                                                                                                   |
| [`Duplicate`](#NodeMove.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                                                                                                           |
| [`Equals`](#NodeMove.Equals)                                       | Equals method.                                                                                                                                                                                           |
| [`GetAPIName`](#NodeMove.GetAPIName)                               | Property name bound to dispId.                                                                                                                                                                           |
| [`GetAllProperties`](#NodeMove.GetAllProperties)                   | GetAllProperties method.                                                                                                                                                                                 |
| [`GetChildren`](#NodeMove.GetChildren)                             | Gets the list of children, filtered by type.                                                                                                                                                             |
| [`GetDetailsView`](#NodeMove.GetDetailsView)                       | GetDetailsView method.                                                                                                                                                                                   |
| [`GetEnumName`](#NodeMove.GetEnumName)                             | Enum name bound to value                                                                                                                                                                                 |
| [`GetEnumerator`](#NodeMove.GetEnumerator)                         | GetEnumerator method.                                                                                                                                                                                    |
| [`GetHashCode`](#NodeMove.GetHashCode)                             | GetHashCode method.                                                                                                                                                                                      |
| [`GetIconFile`](#NodeMove.GetIconFile)                             | GetIconFile method.                                                                                                                                                                                      |
| [`GetLifetimeService`](#NodeMove.GetLifetimeService)               | GetLifetimeService method.                                                                                                                                                                               |
| [`GetObjectData`](#NodeMove.GetObjectData)                         | GetObjectData method.                                                                                                                                                                                    |
| [`GetParameter`](#NodeMove.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                                                                                                  |
| [`GetPath`](#NodeMove.GetPath)                                     | GetPath method.                                                                                                                                                                                          |
| [`GetPropertyName`](#NodeMove.GetPropertyName)                     | GetPropertyName method.                                                                                                                                                                                  |
| [`GetPropertyValue`](#NodeMove.GetPropertyValue)                   | GetPropertyValue method.                                                                                                                                                                                 |
| [`GetVisibleProperties`](#NodeMove.GetVisibleProperties)           | GetVisibleProperties method.                                                                                                                                                                             |
| [`GetVisiblePropertyNames`](#NodeMove.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                                                                                                          |
| [`GroupAllSimilarChildren`](#NodeMove.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                                                                                                  |
| [`GroupSimilarObjects`](#NodeMove.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                                                                                                      |
| [`InitializeLifetimeService`](#NodeMove.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                                                                                                        |
| [`IsPropertyEditable`](#NodeMove.IsPropertyEditable)               | IsPropertyEditable method.                                                                                                                                                                               |
| [`IsPropertyVisible`](#NodeMove.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                                                                                                                |
| [`MorphNodes`](#NodeMove.MorphNodes)                               | Morph all the nodes.                                                                                                                                                                                     |
| [`MoveNode`](#NodeMove.MoveNode)                                   | Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location. |
| [`Paste`](#NodeMove.Paste)                                         | Pastes to the current DataModelObject context.                                                                                                                                                           |
| [`PropertyByAPIName`](#NodeMove.PropertyByAPIName)                 | Get a property by its API name.                                                                                                                                                                          |
| [`PropertyById`](#NodeMove.PropertyById)                           | PropertyById method.                                                                                                                                                                                     |
| [`PropertyByName`](#NodeMove.PropertyByName)                       | Get a property by its unique name.                                                                                                                                                                       |
| [`RemoveFromGroup`](#NodeMove.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                                                              |
| [`RemoveParameter`](#NodeMove.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                        |
| [`UndoAllNodeMoves`](#NodeMove.UndoAllNodeMoves)                   | Undos all moves done to a node.                                                                                                                                                                          |
| [`UndoLastNodeMove`](#NodeMove.UndoLastNodeMove)                   | Undos the last move done to a node.                                                                                                                                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NodeMove.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#NodeMove.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#NodeMove.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#NodeMove.Comments)                                 | Gets the list of associated comments.                         |
| [`Count`](#NodeMove.Count)                                       | Gets the number of nodes moved.                               |
| [`DataModelObjectCategory`](#NodeMove.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#NodeMove.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#NodeMove.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#NodeMove.IconName)                                 | IconName property.                                            |
| [`Images`](#NodeMove.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#NodeMove.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`Information`](#NodeMove.Information)                           | Gets the Information.                                         |
| [`InternalObject`](#NodeMove.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Item`](#NodeMove.Item)                                         | Item property.                                                |
| [`Name`](#NodeMove.Name)                                         | Name property.                                                |
| [`NumberOfMoves`](#NodeMove.NumberOfMoves)                       | Gets the NumberOfMoves.                                       |
| [`NumberOfNodes`](#NodeMove.NumberOfNodes)                       | Gets the NumberOfNodes.                                       |
| [`ObjectId`](#NodeMove.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#NodeMove.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#NodeMove.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#NodeMove.Parent)                                     | Parent property.                                              |
| [`Properties`](#NodeMove.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#NodeMove.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#NodeMove.State)                                       | State property.                                               |
| [`TransferableObjectId`](#NodeMove.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#NodeMove.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMove.AttachedRefs"></a>

### *property* NodeMove.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Children"></a>

### *property* NodeMove.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ClsId"></a>

### *property* NodeMove.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Comments"></a>

### *property* NodeMove.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Count"></a>

### *property* NodeMove.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of nodes moved.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.DataModelObjectCategory"></a>

### *property* NodeMove.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Figures"></a>

### *property* NodeMove.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupingFolder"></a>

### *property* NodeMove.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.IconName"></a>

### *property* NodeMove.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Images"></a>

### *property* NodeMove.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ImportableObjectSourceId"></a>

### *property* NodeMove.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Information"></a>

### *property* NodeMove.Information *: [Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType](../../../Mechanical/DataModel/Enums/NodeMoveInformationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NodeMoveInformationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Information.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.InternalObject"></a>

### *property* NodeMove.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodeMoveAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Item"></a>

### *property* NodeMove.Item *: Ansys.ACT.Automation.Mechanical.NodeMoveEntry | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Name"></a>

### *property* NodeMove.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfMoves"></a>

### *property* NodeMove.NumberOfMoves *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfMoves.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.NumberOfNodes"></a>

### *property* NodeMove.NumberOfNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfNodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ObjectId"></a>

### *property* NodeMove.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ObjectState"></a>

### *property* NodeMove.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ObjectTags"></a>

### *property* NodeMove.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Parent"></a>

### *property* NodeMove.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Properties"></a>

### *property* NodeMove.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.ReadOnly"></a>

### *property* NodeMove.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.State"></a>

### *property* NodeMove.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.TransferableObjectId"></a>

### *property* NodeMove.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.VisibleProperties"></a>

### *property* NodeMove.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMove.Activate"></a>

### NodeMove.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddComment"></a>

### NodeMove.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddFigure"></a>

### NodeMove.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.AddImage"></a>

### NodeMove.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Copy"></a>

### NodeMove.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CopyTo"></a>

### NodeMove.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CreateObjRef"></a>

### NodeMove.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.CreateParameter"></a>

### NodeMove.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Cut"></a>

### NodeMove.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Delete"></a>

### NodeMove.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Duplicate"></a>

### NodeMove.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Equals"></a>

### NodeMove.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetAPIName"></a>

### NodeMove.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetAllProperties"></a>

### NodeMove.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetChildren"></a>

### NodeMove.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodeMove.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetDetailsView"></a>

### NodeMove.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetEnumName"></a>

### NodeMove.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetEnumerator"></a>

### NodeMove.GetEnumerator() → Ansys.ACT.Automation.Mechanical.NodeMoveEnumerator

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetHashCode"></a>

### NodeMove.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetIconFile"></a>

### NodeMove.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetLifetimeService"></a>

### NodeMove.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetObjectData"></a>

### NodeMove.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetParameter"></a>

### NodeMove.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetPath"></a>

### NodeMove.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetPropertyName"></a>

### NodeMove.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetPropertyValue"></a>

### NodeMove.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetVisibleProperties"></a>

### NodeMove.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GetVisiblePropertyNames"></a>

### NodeMove.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupAllSimilarChildren"></a>

### NodeMove.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.GroupSimilarObjects"></a>

### NodeMove.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.InitializeLifetimeService"></a>

### NodeMove.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.IsPropertyEditable"></a>

### NodeMove.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMove.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.IsPropertyVisible"></a>

### NodeMove.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMove.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.MorphNodes"></a>

### NodeMove.MorphNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Morph all the nodes.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.MoveNode"></a>

### NodeMove.MoveNode(nodeId: [int](https://docs.python.org/3/builtins/functions.html#int), locX: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), locY: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), locZ: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Moves a node to a new specified location.  The given locX, locY, and locZ values will be converted to the unit system the mesh is stored in, and the given node will be moved to that absolute location.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.Paste"></a>

### NodeMove.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByAPIName"></a>

### NodeMove.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyById"></a>

### NodeMove.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.PropertyByName"></a>

### NodeMove.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.RemoveFromGroup"></a>

### NodeMove.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.RemoveParameter"></a>

### NodeMove.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoAllNodeMoves"></a>

### NodeMove.UndoAllNodeMoves() → [None](https://docs.python.org/3/builtins/constants.html#None)

Undos all moves done to a node.

<!-- !! processed by numpydoc !! -->

<a id="NodeMove.UndoLastNodeMove"></a>

### NodeMove.UndoLastNodeMove() → [None](https://docs.python.org/3/builtins/constants.html#None)

Undos the last move done to a node.

<!-- !! processed by numpydoc !! -->


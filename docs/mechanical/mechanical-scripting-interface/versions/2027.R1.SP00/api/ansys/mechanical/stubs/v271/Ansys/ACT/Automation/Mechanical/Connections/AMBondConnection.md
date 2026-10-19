# `AMBondConnection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.AMBondConnection(internalObject: Any)

<a id="AMBondConnection"></a>

### *class* AMBondConnection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMBondConnection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMBondConnection.Activate)                                                     | Activate the current object.                                                                |
| [`AddCommandSnippet`](#AMBondConnection.AddCommandSnippet)                                   | Creates a new CommandSnippet                                                                |
| [`AddComment`](#AMBondConnection.AddComment)                                                 | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMBondConnection.AddFigure)                                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#AMBondConnection.AddImage)                                                     | Creates a new child Image.                                                                  |
| [`Copy`](#AMBondConnection.Copy)                                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMBondConnection.CopyTo)                                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMBondConnection.CreateObjRef)                                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMBondConnection.CreateParameter)                                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMBondConnection.Cut)                                                               | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMBondConnection.Delete)                                                         | Run the Delete action.                                                                      |
| [`Duplicate`](#AMBondConnection.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMBondConnection.Equals)                                                         | Equals method.                                                                              |
| [`FlipContactTarget`](#AMBondConnection.FlipContactTarget)                                   | Run the FlipContactTarget action.                                                           |
| [`GetAPIName`](#AMBondConnection.GetAPIName)                                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMBondConnection.GetAllProperties)                                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMBondConnection.GetChildren)                                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMBondConnection.GetDetailsView)                                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMBondConnection.GetEnumName)                                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMBondConnection.GetHashCode)                                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMBondConnection.GetIconFile)                                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMBondConnection.GetLifetimeService)                                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMBondConnection.GetObjectData)                                           | GetObjectData method.                                                                       |
| [`GetParameter`](#AMBondConnection.GetParameter)                                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMBondConnection.GetPath)                                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#AMBondConnection.GetPropertyName)                                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMBondConnection.GetPropertyValue)                                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMBondConnection.GetVisibleProperties)                             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMBondConnection.GetVisiblePropertyNames)                       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMBondConnection.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMBondConnection.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMBondConnection.InitializeLifetimeService)                   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMBondConnection.IsPropertyEditable)                                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMBondConnection.IsPropertyVisible)                                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMBondConnection.Paste)                                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMBondConnection.PropertyByAPIName)                                   | Get a property by its API name.                                                             |
| [`PropertyById`](#AMBondConnection.PropertyById)                                             | PropertyById method.                                                                        |
| [`PropertyByName`](#AMBondConnection.PropertyByName)                                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMBondConnection.RemoveFromGroup)                                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMBondConnection.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AMBondConnection.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                                     |
| [`SearchConnectionsForDuplicatePairs`](#AMBondConnection.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                          |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AMBondConnection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AMBondConnection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AMBondConnection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AMBondConnection.Comments)                                 | Gets the list of associated comments.                         |
| [`ContactBodies`](#AMBondConnection.ContactBodies)                       | Gets the ContactBodies.                                       |
| [`ContactType`](#AMBondConnection.ContactType)                           | Gets or sets the ContactType.                                 |
| [`DataModelObjectCategory`](#AMBondConnection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AMBondConnection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AMBondConnection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AMBondConnection.IconName)                                 | IconName property.                                            |
| [`Images`](#AMBondConnection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AMBondConnection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AMBondConnection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#AMBondConnection.Name)                                         | Name property.                                                |
| [`ObjectId`](#AMBondConnection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AMBondConnection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AMBondConnection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AMBondConnection.Parent)                                     | Parent property.                                              |
| [`Properties`](#AMBondConnection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AMBondConnection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SourceLocation`](#AMBondConnection.SourceLocation)                     | Gets or sets the SourceLocation.                              |
| [`State`](#AMBondConnection.State)                                       | State property.                                               |
| [`Suppressed`](#AMBondConnection.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TargetBodies`](#AMBondConnection.TargetBodies)                         | Gets the TargetBodies.                                        |
| [`TargetLocation`](#AMBondConnection.TargetLocation)                     | Gets or sets the TargetLocation.                              |
| [`TransferableObjectId`](#AMBondConnection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AMBondConnection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMBondConnection.AttachedRefs"></a>

### *property* AMBondConnection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Children"></a>

### *property* AMBondConnection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ClsId"></a>

### *property* AMBondConnection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Comments"></a>

### *property* AMBondConnection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactBodies"></a>

### *property* AMBondConnection.ContactBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ContactBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ContactType"></a>

### *property* AMBondConnection.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.DataModelObjectCategory"></a>

### *property* AMBondConnection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Figures"></a>

### *property* AMBondConnection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupingFolder"></a>

### *property* AMBondConnection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.IconName"></a>

### *property* AMBondConnection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Images"></a>

### *property* AMBondConnection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ImportableObjectSourceId"></a>

### *property* AMBondConnection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.InternalObject"></a>

### *property* AMBondConnection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMBondConnectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Name"></a>

### *property* AMBondConnection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ObjectId"></a>

### *property* AMBondConnection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ObjectState"></a>

### *property* AMBondConnection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ObjectTags"></a>

### *property* AMBondConnection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Parent"></a>

### *property* AMBondConnection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Properties"></a>

### *property* AMBondConnection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.ReadOnly"></a>

### *property* AMBondConnection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.SourceLocation"></a>

### *property* AMBondConnection.SourceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.State"></a>

### *property* AMBondConnection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Suppressed"></a>

### *property* AMBondConnection.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetBodies"></a>

### *property* AMBondConnection.TargetBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TargetBodies.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TargetLocation"></a>

### *property* AMBondConnection.TargetLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.TransferableObjectId"></a>

### *property* AMBondConnection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.VisibleProperties"></a>

### *property* AMBondConnection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBondConnection.Activate"></a>

### AMBondConnection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddCommandSnippet"></a>

### AMBondConnection.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](../CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddComment"></a>

### AMBondConnection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddFigure"></a>

### AMBondConnection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.AddImage"></a>

### AMBondConnection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Copy"></a>

### AMBondConnection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CopyTo"></a>

### AMBondConnection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CreateObjRef"></a>

### AMBondConnection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.CreateParameter"></a>

### AMBondConnection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Cut"></a>

### AMBondConnection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Delete"></a>

### AMBondConnection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Duplicate"></a>

### AMBondConnection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Equals"></a>

### AMBondConnection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.FlipContactTarget"></a>

### AMBondConnection.FlipContactTarget() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FlipContactTarget action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetAPIName"></a>

### AMBondConnection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetAllProperties"></a>

### AMBondConnection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetChildren"></a>

### AMBondConnection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMBondConnection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetDetailsView"></a>

### AMBondConnection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetEnumName"></a>

### AMBondConnection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetHashCode"></a>

### AMBondConnection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetIconFile"></a>

### AMBondConnection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetLifetimeService"></a>

### AMBondConnection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetObjectData"></a>

### AMBondConnection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetParameter"></a>

### AMBondConnection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetPath"></a>

### AMBondConnection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetPropertyName"></a>

### AMBondConnection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetPropertyValue"></a>

### AMBondConnection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetVisibleProperties"></a>

### AMBondConnection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GetVisiblePropertyNames"></a>

### AMBondConnection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupAllSimilarChildren"></a>

### AMBondConnection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.GroupSimilarObjects"></a>

### AMBondConnection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.InitializeLifetimeService"></a>

### AMBondConnection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.IsPropertyEditable"></a>

### AMBondConnection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMBondConnection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.IsPropertyVisible"></a>

### AMBondConnection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMBondConnection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.Paste"></a>

### AMBondConnection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByAPIName"></a>

### AMBondConnection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyById"></a>

### AMBondConnection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.PropertyByName"></a>

### AMBondConnection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RemoveFromGroup"></a>

### AMBondConnection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RemoveParameter"></a>

### AMBondConnection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.RenameBasedOnDefinition"></a>

### AMBondConnection.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AMBondConnection.SearchConnectionsForDuplicatePairs"></a>

### AMBondConnection.SearchConnectionsForDuplicatePairs() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->


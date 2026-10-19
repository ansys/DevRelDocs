# `GenericPointMass`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericPointMass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericPointMass(internalObject: Any)

<a id="GenericPointMass"></a>

### *class* GenericPointMass(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GenericPointMass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GenericPointMass.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#GenericPointMass.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#GenericPointMass.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GenericPointMass.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GenericPointMass.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GenericPointMass.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GenericPointMass.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GenericPointMass.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GenericPointMass.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GenericPointMass.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GenericPointMass.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GenericPointMass.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GenericPointMass.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GenericPointMass.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GenericPointMass.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GenericPointMass.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GenericPointMass.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GenericPointMass.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GenericPointMass.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GenericPointMass.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GenericPointMass.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GenericPointMass.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GenericPointMass.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GenericPointMass.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GenericPointMass.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GenericPointMass.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GenericPointMass.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GenericPointMass.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GenericPointMass.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GenericPointMass.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GenericPointMass.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GenericPointMass.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GenericPointMass.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GenericPointMass.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GenericPointMass.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GenericPointMass.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GenericPointMass.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GenericPointMass.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GenericPointMass.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GenericPointMass.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#GenericPointMass.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GenericPointMass.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GenericPointMass.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericPointMass.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#GenericPointMass.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GenericPointMass.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GenericPointMass.IconName)                                 | IconName property.                                            |
| [`Images`](#GenericPointMass.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GenericPointMass.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GenericPointMass.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`IsDistributedMass`](#GenericPointMass.IsDistributedMass)               | Gets the IsDistributedMass.                                   |
| [`Location`](#GenericPointMass.Location)                                 | Gets or sets the Geometry.                                    |
| [`Name`](#GenericPointMass.Name)                                         | Name property.                                                |
| [`ObjectId`](#GenericPointMass.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GenericPointMass.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GenericPointMass.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GenericPointMass.Parent)                                     | Parent property.                                              |
| [`Properties`](#GenericPointMass.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericPointMass.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                              | Gets the remote point associated to the point mass.           |
| [`State`](#GenericPointMass.State)                                       | State property.                                               |
| [`TransferableObjectId`](#GenericPointMass.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GenericPointMass.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericPointMass.AttachedRefs"></a>

### *property* GenericPointMass.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Children"></a>

### *property* GenericPointMass.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ClsId"></a>

### *property* GenericPointMass.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Comments"></a>

### *property* GenericPointMass.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.DataModelObjectCategory"></a>

### *property* GenericPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Figures"></a>

### *property* GenericPointMass.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupingFolder"></a>

### *property* GenericPointMass.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IconName"></a>

### *property* GenericPointMass.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Images"></a>

### *property* GenericPointMass.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ImportableObjectSourceId"></a>

### *property* GenericPointMass.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.InternalObject"></a>

### *property* GenericPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IsDistributedMass"></a>

### *property* GenericPointMass.IsDistributedMass *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Location"></a>

### *property* GenericPointMass.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Name"></a>

### *property* GenericPointMass.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ObjectId"></a>

### *property* GenericPointMass.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ObjectState"></a>

### *property* GenericPointMass.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ObjectTags"></a>

### *property* GenericPointMass.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Parent"></a>

### *property* GenericPointMass.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Properties"></a>

### *property* GenericPointMass.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ReadOnly"></a>

### *property* GenericPointMass.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemotePoint"></a>

### *property* GenericPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.State"></a>

### *property* GenericPointMass.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.TransferableObjectId"></a>

### *property* GenericPointMass.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.VisibleProperties"></a>

### *property* GenericPointMass.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericPointMass.Activate"></a>

### GenericPointMass.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddCommandSnippet"></a>

### GenericPointMass.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddComment"></a>

### GenericPointMass.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddFigure"></a>

### GenericPointMass.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddImage"></a>

### GenericPointMass.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Copy"></a>

### GenericPointMass.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CopyTo"></a>

### GenericPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CreateObjRef"></a>

### GenericPointMass.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CreateParameter"></a>

### GenericPointMass.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Cut"></a>

### GenericPointMass.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Delete"></a>

### GenericPointMass.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Duplicate"></a>

### GenericPointMass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Equals"></a>

### GenericPointMass.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetAPIName"></a>

### GenericPointMass.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetAllProperties"></a>

### GenericPointMass.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetChildren"></a>

### GenericPointMass.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GenericPointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetDetailsView"></a>

### GenericPointMass.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetEnumName"></a>

### GenericPointMass.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetHashCode"></a>

### GenericPointMass.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetIconFile"></a>

### GenericPointMass.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetLifetimeService"></a>

### GenericPointMass.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetObjectData"></a>

### GenericPointMass.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetParameter"></a>

### GenericPointMass.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetPath"></a>

### GenericPointMass.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetPropertyName"></a>

### GenericPointMass.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetPropertyValue"></a>

### GenericPointMass.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetVisibleProperties"></a>

### GenericPointMass.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetVisiblePropertyNames"></a>

### GenericPointMass.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupAllSimilarChildren"></a>

### GenericPointMass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupSimilarObjects"></a>

### GenericPointMass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.InitializeLifetimeService"></a>

### GenericPointMass.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IsPropertyEditable"></a>

### GenericPointMass.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericPointMass.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IsPropertyVisible"></a>

### GenericPointMass.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericPointMass.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Paste"></a>

### GenericPointMass.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByAPIName"></a>

### GenericPointMass.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyById"></a>

### GenericPointMass.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByName"></a>

### GenericPointMass.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemoveFromGroup"></a>

### GenericPointMass.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemoveParameter"></a>

### GenericPointMass.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


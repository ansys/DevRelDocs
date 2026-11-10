# `SimplySupported`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported(internalObject: Any)

<a id="SimplySupported"></a>

### *class* SimplySupported(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SimplySupported.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SimplySupported.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#SimplySupported.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SimplySupported.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SimplySupported.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SimplySupported.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SimplySupported.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SimplySupported.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SimplySupported.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SimplySupported.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SimplySupported.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SimplySupported.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SimplySupported.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SimplySupported.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SimplySupported.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SimplySupported.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SimplySupported.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SimplySupported.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SimplySupported.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SimplySupported.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SimplySupported.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SimplySupported.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SimplySupported.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SimplySupported.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SimplySupported.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SimplySupported.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SimplySupported.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SimplySupported.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SimplySupported.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SimplySupported.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SimplySupported.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SimplySupported.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SimplySupported.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SimplySupported.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#SimplySupported.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#SimplySupported.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SimplySupported.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SimplySupported.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SimplySupported.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SimplySupported.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#SimplySupported.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#SimplySupported.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#SimplySupported.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SimplySupported.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#SimplySupported.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#SimplySupported.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#SimplySupported.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#SimplySupported.IconName)                                 | IconName property.                                            |
| [`Images`](#SimplySupported.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SimplySupported.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SimplySupported.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#SimplySupported.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#SimplySupported.Name)                                         | Name property.                                                |
| [`ObjectId`](#SimplySupported.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SimplySupported.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SimplySupported.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SimplySupported.Parent)                                     | Parent property.                                              |
| [`Properties`](#SimplySupported.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SimplySupported.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#SimplySupported.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#SimplySupported.State)                                       | State property.                                               |
| [`Suppressed`](#SimplySupported.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#SimplySupported.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#SimplySupported.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SimplySupported.AttachedRefs"></a>

### *property* SimplySupported.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Children"></a>

### *property* SimplySupported.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ClsId"></a>

### *property* SimplySupported.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Comments"></a>

### *property* SimplySupported.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.DataModelObjectCategory"></a>

### *property* SimplySupported.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Figures"></a>

### *property* SimplySupported.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupingFolder"></a>

### *property* SimplySupported.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.IconName"></a>

### *property* SimplySupported.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Images"></a>

### *property* SimplySupported.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ImportableObjectSourceId"></a>

### *property* SimplySupported.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.InternalObject"></a>

### *property* SimplySupported.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Location"></a>

### *property* SimplySupported.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Name"></a>

### *property* SimplySupported.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ObjectId"></a>

### *property* SimplySupported.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ObjectState"></a>

### *property* SimplySupported.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ObjectTags"></a>

### *property* SimplySupported.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Parent"></a>

### *property* SimplySupported.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Properties"></a>

### *property* SimplySupported.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.ReadOnly"></a>

### *property* SimplySupported.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.SharedRefBody"></a>

### *property* SimplySupported.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.State"></a>

### *property* SimplySupported.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Suppressed"></a>

### *property* SimplySupported.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.TransferableObjectId"></a>

### *property* SimplySupported.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.VisibleProperties"></a>

### *property* SimplySupported.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SimplySupported.Activate"></a>

### SimplySupported.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddComment"></a>

### SimplySupported.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddFigure"></a>

### SimplySupported.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.AddImage"></a>

### SimplySupported.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Copy"></a>

### SimplySupported.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CopyTo"></a>

### SimplySupported.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CreateObjRef"></a>

### SimplySupported.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.CreateParameter"></a>

### SimplySupported.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Cut"></a>

### SimplySupported.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Delete"></a>

### SimplySupported.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Duplicate"></a>

### SimplySupported.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Equals"></a>

### SimplySupported.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetAPIName"></a>

### SimplySupported.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetAllProperties"></a>

### SimplySupported.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetChildren"></a>

### SimplySupported.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SimplySupported.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetDetailsView"></a>

### SimplySupported.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetEnumName"></a>

### SimplySupported.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetHashCode"></a>

### SimplySupported.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetIconFile"></a>

### SimplySupported.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetLifetimeService"></a>

### SimplySupported.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetObjectData"></a>

### SimplySupported.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetParameter"></a>

### SimplySupported.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetPath"></a>

### SimplySupported.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetPropertyName"></a>

### SimplySupported.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetPropertyValue"></a>

### SimplySupported.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetVisibleProperties"></a>

### SimplySupported.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GetVisiblePropertyNames"></a>

### SimplySupported.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupAllSimilarChildren"></a>

### SimplySupported.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.GroupSimilarObjects"></a>

### SimplySupported.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.InitializeLifetimeService"></a>

### SimplySupported.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.IsPropertyEditable"></a>

### SimplySupported.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SimplySupported.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.IsPropertyVisible"></a>

### SimplySupported.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SimplySupported.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.Paste"></a>

### SimplySupported.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PromoteToNamedSelection"></a>

### SimplySupported.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByAPIName"></a>

### SimplySupported.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyById"></a>

### SimplySupported.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.PropertyByName"></a>

### SimplySupported.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.RemoveFromGroup"></a>

### SimplySupported.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SimplySupported.RemoveParameter"></a>

### SimplySupported.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


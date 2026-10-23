# `GenericBoundaryCondition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition(internalObject: Any)

<a id="GenericBoundaryCondition"></a>

### *class* GenericBoundaryCondition(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GenericBoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GenericBoundaryCondition.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#GenericBoundaryCondition.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GenericBoundaryCondition.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GenericBoundaryCondition.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GenericBoundaryCondition.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GenericBoundaryCondition.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GenericBoundaryCondition.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GenericBoundaryCondition.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GenericBoundaryCondition.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GenericBoundaryCondition.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GenericBoundaryCondition.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GenericBoundaryCondition.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GenericBoundaryCondition.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GenericBoundaryCondition.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GenericBoundaryCondition.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GenericBoundaryCondition.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GenericBoundaryCondition.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GenericBoundaryCondition.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GenericBoundaryCondition.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GenericBoundaryCondition.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GenericBoundaryCondition.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GenericBoundaryCondition.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GenericBoundaryCondition.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GenericBoundaryCondition.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GenericBoundaryCondition.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GenericBoundaryCondition.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GenericBoundaryCondition.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GenericBoundaryCondition.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GenericBoundaryCondition.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GenericBoundaryCondition.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GenericBoundaryCondition.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GenericBoundaryCondition.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GenericBoundaryCondition.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#GenericBoundaryCondition.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#GenericBoundaryCondition.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GenericBoundaryCondition.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GenericBoundaryCondition.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GenericBoundaryCondition.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GenericBoundaryCondition.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GenericBoundaryCondition.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#GenericBoundaryCondition.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GenericBoundaryCondition.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GenericBoundaryCondition.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericBoundaryCondition.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#GenericBoundaryCondition.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GenericBoundaryCondition.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GenericBoundaryCondition.IconName)                                 | IconName property.                                            |
| [`Images`](#GenericBoundaryCondition.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GenericBoundaryCondition.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GenericBoundaryCondition.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#GenericBoundaryCondition.Name)                                         | Name property.                                                |
| [`ObjectId`](#GenericBoundaryCondition.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GenericBoundaryCondition.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GenericBoundaryCondition.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GenericBoundaryCondition.Parent)                                     | Parent property.                                              |
| [`Properties`](#GenericBoundaryCondition.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericBoundaryCondition.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#GenericBoundaryCondition.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#GenericBoundaryCondition.State)                                       | State property.                                               |
| [`Suppressed`](#GenericBoundaryCondition.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#GenericBoundaryCondition.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GenericBoundaryCondition.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericBoundaryCondition.AttachedRefs"></a>

### *property* GenericBoundaryCondition.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Children"></a>

### *property* GenericBoundaryCondition.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ClsId"></a>

### *property* GenericBoundaryCondition.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Comments"></a>

### *property* GenericBoundaryCondition.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.DataModelObjectCategory"></a>

### *property* GenericBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Figures"></a>

### *property* GenericBoundaryCondition.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupingFolder"></a>

### *property* GenericBoundaryCondition.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.IconName"></a>

### *property* GenericBoundaryCondition.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Images"></a>

### *property* GenericBoundaryCondition.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ImportableObjectSourceId"></a>

### *property* GenericBoundaryCondition.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.InternalObject"></a>

### *property* GenericBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Name"></a>

### *property* GenericBoundaryCondition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ObjectId"></a>

### *property* GenericBoundaryCondition.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ObjectState"></a>

### *property* GenericBoundaryCondition.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ObjectTags"></a>

### *property* GenericBoundaryCondition.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Parent"></a>

### *property* GenericBoundaryCondition.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Properties"></a>

### *property* GenericBoundaryCondition.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ReadOnly"></a>

### *property* GenericBoundaryCondition.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.SharedRefBody"></a>

### *property* GenericBoundaryCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.State"></a>

### *property* GenericBoundaryCondition.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Suppressed"></a>

### *property* GenericBoundaryCondition.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.TransferableObjectId"></a>

### *property* GenericBoundaryCondition.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.VisibleProperties"></a>

### *property* GenericBoundaryCondition.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericBoundaryCondition.Activate"></a>

### GenericBoundaryCondition.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddComment"></a>

### GenericBoundaryCondition.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddFigure"></a>

### GenericBoundaryCondition.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddImage"></a>

### GenericBoundaryCondition.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Copy"></a>

### GenericBoundaryCondition.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CopyTo"></a>

### GenericBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CreateObjRef"></a>

### GenericBoundaryCondition.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CreateParameter"></a>

### GenericBoundaryCondition.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Cut"></a>

### GenericBoundaryCondition.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Delete"></a>

### GenericBoundaryCondition.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Duplicate"></a>

### GenericBoundaryCondition.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Equals"></a>

### GenericBoundaryCondition.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetAPIName"></a>

### GenericBoundaryCondition.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetAllProperties"></a>

### GenericBoundaryCondition.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetChildren"></a>

### GenericBoundaryCondition.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GenericBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetDetailsView"></a>

### GenericBoundaryCondition.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetEnumName"></a>

### GenericBoundaryCondition.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetHashCode"></a>

### GenericBoundaryCondition.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetIconFile"></a>

### GenericBoundaryCondition.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetLifetimeService"></a>

### GenericBoundaryCondition.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetObjectData"></a>

### GenericBoundaryCondition.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetParameter"></a>

### GenericBoundaryCondition.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetPath"></a>

### GenericBoundaryCondition.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetPropertyName"></a>

### GenericBoundaryCondition.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetPropertyValue"></a>

### GenericBoundaryCondition.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetVisibleProperties"></a>

### GenericBoundaryCondition.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetVisiblePropertyNames"></a>

### GenericBoundaryCondition.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupAllSimilarChildren"></a>

### GenericBoundaryCondition.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupSimilarObjects"></a>

### GenericBoundaryCondition.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.InitializeLifetimeService"></a>

### GenericBoundaryCondition.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.IsPropertyEditable"></a>

### GenericBoundaryCondition.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericBoundaryCondition.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.IsPropertyVisible"></a>

### GenericBoundaryCondition.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericBoundaryCondition.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Paste"></a>

### GenericBoundaryCondition.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PromoteToNamedSelection"></a>

### GenericBoundaryCondition.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByAPIName"></a>

### GenericBoundaryCondition.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyById"></a>

### GenericBoundaryCondition.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByName"></a>

### GenericBoundaryCondition.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.RemoveFromGroup"></a>

### GenericBoundaryCondition.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.RemoveParameter"></a>

### GenericBoundaryCondition.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


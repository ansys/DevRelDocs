# `NumberingControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NumberingControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NumberingControl(internalObject: Any)

<a id="NumberingControl"></a>

### *class* NumberingControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NumberingControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NumberingControl.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NumberingControl.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#NumberingControl.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NumberingControl.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#NumberingControl.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NumberingControl.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NumberingControl.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NumberingControl.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NumberingControl.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NumberingControl.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NumberingControl.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NumberingControl.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#NumberingControl.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NumberingControl.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NumberingControl.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NumberingControl.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NumberingControl.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NumberingControl.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NumberingControl.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NumberingControl.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NumberingControl.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NumberingControl.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NumberingControl.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NumberingControl.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NumberingControl.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NumberingControl.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NumberingControl.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NumberingControl.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NumberingControl.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NumberingControl.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NumberingControl.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NumberingControl.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NumberingControl.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NumberingControl.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NumberingControl.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NumberingControl.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NumberingControl.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NumberingControl.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NumberingControl.AttachedRefs)                       | AttachedRefs property.                                        |
| [`BeginElementNumber`](#NumberingControl.BeginElementNumber)           | Gets or sets the BeginElementNumber.                          |
| [`BeginNodeNumber`](#NumberingControl.BeginNodeNumber)                 | Gets or sets the BeginNodeNumber.                             |
| [`Children`](#NumberingControl.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#NumberingControl.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#NumberingControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NumberingControl.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`EndElementNumber`](#NumberingControl.EndElementNumber)               | Gets or sets the EndElementNumber.                            |
| [`EndNodeNumber`](#NumberingControl.EndNodeNumber)                     | Gets or sets the EndNodeNumber.                               |
| [`Figures`](#NumberingControl.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#NumberingControl.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#NumberingControl.IconName)                               | IconName property.                                            |
| [`Images`](#NumberingControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NumberingControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NumberingControl.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#NumberingControl.Name)                                       | Name property.                                                |
| [`NodeNumber`](#NumberingControl.NodeNumber)                           | Gets or sets the NodeNumber.                                  |
| [`ObjectId`](#NumberingControl.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#NumberingControl.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#NumberingControl.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#NumberingControl.Parent)                                   | Parent property.                                              |
| [`Properties`](#NumberingControl.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#NumberingControl.State)                                     | State property.                                               |
| [`Suppressed`](#NumberingControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NumberingControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NumberingControl.AttachedRefs"></a>

### *property* NumberingControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.BeginElementNumber"></a>

### *property* NumberingControl.BeginElementNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeginElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.BeginNodeNumber"></a>

### *property* NumberingControl.BeginNodeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeginNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Children"></a>

### *property* NumberingControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.ClsId"></a>

### *property* NumberingControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Comments"></a>

### *property* NumberingControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.DataModelObjectCategory"></a>

### *property* NumberingControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndElementNumber"></a>

### *property* NumberingControl.EndElementNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndElementNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.EndNodeNumber"></a>

### *property* NumberingControl.EndNodeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndNodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Figures"></a>

### *property* NumberingControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupingFolder"></a>

### *property* NumberingControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.IconName"></a>

### *property* NumberingControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Images"></a>

### *property* NumberingControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.InternalObject"></a>

### *property* NumberingControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshRenumberingControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Location"></a>

### *property* NumberingControl.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Name"></a>

### *property* NumberingControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.NodeNumber"></a>

### *property* NumberingControl.NodeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.ObjectId"></a>

### *property* NumberingControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.ObjectState"></a>

### *property* NumberingControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.ObjectTags"></a>

### *property* NumberingControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Parent"></a>

### *property* NumberingControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Properties"></a>

### *property* NumberingControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.State"></a>

### *property* NumberingControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Suppressed"></a>

### *property* NumberingControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.VisibleProperties"></a>

### *property* NumberingControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NumberingControl.Activate"></a>

### NumberingControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddComment"></a>

### NumberingControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddFigure"></a>

### NumberingControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.AddImage"></a>

### NumberingControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Copy"></a>

### NumberingControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CopyTo"></a>

### NumberingControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CreateObjRef"></a>

### NumberingControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.CreateParameter"></a>

### NumberingControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Cut"></a>

### NumberingControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Delete"></a>

### NumberingControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Duplicate"></a>

### NumberingControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Equals"></a>

### NumberingControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetAPIName"></a>

### NumberingControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetAllProperties"></a>

### NumberingControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetChildren"></a>

### NumberingControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NumberingControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetDetailsView"></a>

### NumberingControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetEnumName"></a>

### NumberingControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetHashCode"></a>

### NumberingControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetIconFile"></a>

### NumberingControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetLifetimeService"></a>

### NumberingControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetObjectData"></a>

### NumberingControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetParameter"></a>

### NumberingControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetPath"></a>

### NumberingControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetPropertyName"></a>

### NumberingControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetPropertyValue"></a>

### NumberingControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetVisibleProperties"></a>

### NumberingControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GetVisiblePropertyNames"></a>

### NumberingControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupAllSimilarChildren"></a>

### NumberingControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.GroupSimilarObjects"></a>

### NumberingControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.InitializeLifetimeService"></a>

### NumberingControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.IsPropertyEditable"></a>

### NumberingControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NumberingControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.IsPropertyVisible"></a>

### NumberingControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NumberingControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.Paste"></a>

### NumberingControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByAPIName"></a>

### NumberingControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyById"></a>

### NumberingControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.PropertyByName"></a>

### NumberingControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.RemoveFromGroup"></a>

### NumberingControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NumberingControl.RemoveParameter"></a>

### NumberingControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


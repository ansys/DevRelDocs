# `RotationBoundaryCondition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationBoundaryCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationBoundaryCondition(internalObject: Any)

<a id="RotationBoundaryCondition"></a>

### *class* RotationBoundaryCondition(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RotationBoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RotationBoundaryCondition.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RotationBoundaryCondition.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RotationBoundaryCondition.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RotationBoundaryCondition.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RotationBoundaryCondition.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RotationBoundaryCondition.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RotationBoundaryCondition.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RotationBoundaryCondition.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RotationBoundaryCondition.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RotationBoundaryCondition.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RotationBoundaryCondition.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RotationBoundaryCondition.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RotationBoundaryCondition.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RotationBoundaryCondition.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RotationBoundaryCondition.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RotationBoundaryCondition.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RotationBoundaryCondition.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RotationBoundaryCondition.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RotationBoundaryCondition.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RotationBoundaryCondition.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RotationBoundaryCondition.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RotationBoundaryCondition.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RotationBoundaryCondition.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RotationBoundaryCondition.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RotationBoundaryCondition.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RotationBoundaryCondition.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RotationBoundaryCondition.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RotationBoundaryCondition.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RotationBoundaryCondition.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RotationBoundaryCondition.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RotationBoundaryCondition.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RotationBoundaryCondition.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RotationBoundaryCondition.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RotationBoundaryCondition.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RotationBoundaryCondition.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RotationBoundaryCondition.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RotationBoundaryCondition.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RotationBoundaryCondition.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RotationBoundaryCondition.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Axis`](#RotationBoundaryCondition.Axis)                                         | Gets or sets the Axis.                                        |
| [`Children`](#RotationBoundaryCondition.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#RotationBoundaryCondition.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#RotationBoundaryCondition.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RotationBoundaryCondition.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#RotationBoundaryCondition.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RotationBoundaryCondition.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#RotationBoundaryCondition.IconName)                                 | IconName property.                                            |
| [`Images`](#RotationBoundaryCondition.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#RotationBoundaryCondition.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#RotationBoundaryCondition.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#RotationBoundaryCondition.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#RotationBoundaryCondition.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#RotationBoundaryCondition.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#RotationBoundaryCondition.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#RotationBoundaryCondition.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#RotationBoundaryCondition.Parent)                                     | Parent property.                                              |
| [`Properties`](#RotationBoundaryCondition.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RotationBoundaryCondition.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#RotationBoundaryCondition.State)                                       | State property.                                               |
| [`Suppressed`](#RotationBoundaryCondition.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#RotationBoundaryCondition.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#RotationBoundaryCondition.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RotationBoundaryCondition.AttachedRefs"></a>

### *property* RotationBoundaryCondition.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Axis"></a>

### *property* RotationBoundaryCondition.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Children"></a>

### *property* RotationBoundaryCondition.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ClsId"></a>

### *property* RotationBoundaryCondition.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Comments"></a>

### *property* RotationBoundaryCondition.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.DataModelObjectCategory"></a>

### *property* RotationBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Figures"></a>

### *property* RotationBoundaryCondition.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GroupingFolder"></a>

### *property* RotationBoundaryCondition.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.IconName"></a>

### *property* RotationBoundaryCondition.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Images"></a>

### *property* RotationBoundaryCondition.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ImportableObjectSourceId"></a>

### *property* RotationBoundaryCondition.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.InternalObject"></a>

### *property* RotationBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Name"></a>

### *property* RotationBoundaryCondition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.NumberOfSegments"></a>

### *property* RotationBoundaryCondition.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ObjectId"></a>

### *property* RotationBoundaryCondition.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ObjectState"></a>

### *property* RotationBoundaryCondition.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ObjectTags"></a>

### *property* RotationBoundaryCondition.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Parent"></a>

### *property* RotationBoundaryCondition.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Properties"></a>

### *property* RotationBoundaryCondition.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.ReadOnly"></a>

### *property* RotationBoundaryCondition.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.State"></a>

### *property* RotationBoundaryCondition.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Suppressed"></a>

### *property* RotationBoundaryCondition.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.TransferableObjectId"></a>

### *property* RotationBoundaryCondition.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.VisibleProperties"></a>

### *property* RotationBoundaryCondition.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationBoundaryCondition.Activate"></a>

### RotationBoundaryCondition.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddComment"></a>

### RotationBoundaryCondition.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddFigure"></a>

### RotationBoundaryCondition.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.AddImage"></a>

### RotationBoundaryCondition.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Copy"></a>

### RotationBoundaryCondition.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.CopyTo"></a>

### RotationBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.CreateObjRef"></a>

### RotationBoundaryCondition.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.CreateParameter"></a>

### RotationBoundaryCondition.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Cut"></a>

### RotationBoundaryCondition.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Delete"></a>

### RotationBoundaryCondition.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Duplicate"></a>

### RotationBoundaryCondition.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Equals"></a>

### RotationBoundaryCondition.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetAPIName"></a>

### RotationBoundaryCondition.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetAllProperties"></a>

### RotationBoundaryCondition.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetChildren"></a>

### RotationBoundaryCondition.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RotationBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetDetailsView"></a>

### RotationBoundaryCondition.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetEnumName"></a>

### RotationBoundaryCondition.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetHashCode"></a>

### RotationBoundaryCondition.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetIconFile"></a>

### RotationBoundaryCondition.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetLifetimeService"></a>

### RotationBoundaryCondition.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetObjectData"></a>

### RotationBoundaryCondition.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetParameter"></a>

### RotationBoundaryCondition.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetPath"></a>

### RotationBoundaryCondition.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetPropertyName"></a>

### RotationBoundaryCondition.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetPropertyValue"></a>

### RotationBoundaryCondition.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetVisibleProperties"></a>

### RotationBoundaryCondition.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GetVisiblePropertyNames"></a>

### RotationBoundaryCondition.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GroupAllSimilarChildren"></a>

### RotationBoundaryCondition.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.GroupSimilarObjects"></a>

### RotationBoundaryCondition.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.InitializeLifetimeService"></a>

### RotationBoundaryCondition.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.IsPropertyEditable"></a>

### RotationBoundaryCondition.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationBoundaryCondition.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.IsPropertyVisible"></a>

### RotationBoundaryCondition.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationBoundaryCondition.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.Paste"></a>

### RotationBoundaryCondition.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.PropertyByAPIName"></a>

### RotationBoundaryCondition.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.PropertyById"></a>

### RotationBoundaryCondition.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.PropertyByName"></a>

### RotationBoundaryCondition.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.RemoveFromGroup"></a>

### RotationBoundaryCondition.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RotationBoundaryCondition.RemoveParameter"></a>

### RotationBoundaryCondition.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


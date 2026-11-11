# `PSDAcceleration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration(internalObject: Any)

<a id="PSDAcceleration"></a>

### *class* PSDAcceleration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PSDAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PSDAcceleration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PSDAcceleration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PSDAcceleration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PSDAcceleration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PSDAcceleration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PSDAcceleration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PSDAcceleration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PSDAcceleration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PSDAcceleration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PSDAcceleration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PSDAcceleration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PSDAcceleration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PSDAcceleration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PSDAcceleration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PSDAcceleration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PSDAcceleration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PSDAcceleration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PSDAcceleration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PSDAcceleration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PSDAcceleration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PSDAcceleration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PSDAcceleration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PSDAcceleration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PSDAcceleration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PSDAcceleration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PSDAcceleration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PSDAcceleration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PSDAcceleration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PSDAcceleration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PSDAcceleration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PSDAcceleration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PSDAcceleration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PSDAcceleration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PSDAcceleration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PSDAcceleration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PSDAcceleration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PSDAcceleration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PSDAcceleration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PSDAcceleration.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BoundaryCondition`](#PSDAcceleration.BoundaryCondition)               | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDAcceleration.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PSDAcceleration.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PSDAcceleration.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDAcceleration.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Direction`](#PSDAcceleration.Direction)                               | Gets or sets the Direction.                                   |
| [`Figures`](#PSDAcceleration.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PSDAcceleration.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PSDAcceleration.IconName)                                 | IconName property.                                            |
| [`Images`](#PSDAcceleration.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PSDAcceleration.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PSDAcceleration.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDAcceleration.LoadData)                                 | Gets or sets the LoadData.                                    |
| [`Name`](#PSDAcceleration.Name)                                         | Name property.                                                |
| [`ObjectId`](#PSDAcceleration.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PSDAcceleration.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PSDAcceleration.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PSDAcceleration.Parent)                                     | Parent property.                                              |
| [`Properties`](#PSDAcceleration.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDAcceleration.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#PSDAcceleration.State)                                       | State property.                                               |
| [`Suppressed`](#PSDAcceleration.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PSDAcceleration.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PSDAcceleration.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDAcceleration.AttachedRefs"></a>

### *property* PSDAcceleration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.BoundaryCondition"></a>

### *property* PSDAcceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Children"></a>

### *property* PSDAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ClsId"></a>

### *property* PSDAcceleration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Comments"></a>

### *property* PSDAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.DataModelObjectCategory"></a>

### *property* PSDAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Direction"></a>

### *property* PSDAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Figures"></a>

### *property* PSDAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GroupingFolder"></a>

### *property* PSDAcceleration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.IconName"></a>

### *property* PSDAcceleration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Images"></a>

### *property* PSDAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ImportableObjectSourceId"></a>

### *property* PSDAcceleration.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.InternalObject"></a>

### *property* PSDAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.LoadData"></a>

### *property* PSDAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Name"></a>

### *property* PSDAcceleration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ObjectId"></a>

### *property* PSDAcceleration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ObjectState"></a>

### *property* PSDAcceleration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ObjectTags"></a>

### *property* PSDAcceleration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Parent"></a>

### *property* PSDAcceleration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Properties"></a>

### *property* PSDAcceleration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ReadOnly"></a>

### *property* PSDAcceleration.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.State"></a>

### *property* PSDAcceleration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Suppressed"></a>

### *property* PSDAcceleration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.TransferableObjectId"></a>

### *property* PSDAcceleration.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.VisibleProperties"></a>

### *property* PSDAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDAcceleration.Activate"></a>

### PSDAcceleration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddComment"></a>

### PSDAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddFigure"></a>

### PSDAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddImage"></a>

### PSDAcceleration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Copy"></a>

### PSDAcceleration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.CopyTo"></a>

### PSDAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.CreateObjRef"></a>

### PSDAcceleration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.CreateParameter"></a>

### PSDAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Cut"></a>

### PSDAcceleration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Delete"></a>

### PSDAcceleration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Duplicate"></a>

### PSDAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Equals"></a>

### PSDAcceleration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetAPIName"></a>

### PSDAcceleration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetAllProperties"></a>

### PSDAcceleration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetChildren"></a>

### PSDAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PSDAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetDetailsView"></a>

### PSDAcceleration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetEnumName"></a>

### PSDAcceleration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetHashCode"></a>

### PSDAcceleration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetIconFile"></a>

### PSDAcceleration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetLifetimeService"></a>

### PSDAcceleration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetObjectData"></a>

### PSDAcceleration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetParameter"></a>

### PSDAcceleration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetPath"></a>

### PSDAcceleration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetPropertyName"></a>

### PSDAcceleration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetPropertyValue"></a>

### PSDAcceleration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetVisibleProperties"></a>

### PSDAcceleration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetVisiblePropertyNames"></a>

### PSDAcceleration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GroupAllSimilarChildren"></a>

### PSDAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GroupSimilarObjects"></a>

### PSDAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.InitializeLifetimeService"></a>

### PSDAcceleration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.IsPropertyEditable"></a>

### PSDAcceleration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDAcceleration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.IsPropertyVisible"></a>

### PSDAcceleration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDAcceleration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Paste"></a>

### PSDAcceleration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.PropertyByAPIName"></a>

### PSDAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.PropertyById"></a>

### PSDAcceleration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.PropertyByName"></a>

### PSDAcceleration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.RemoveFromGroup"></a>

### PSDAcceleration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.RemoveParameter"></a>

### PSDAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


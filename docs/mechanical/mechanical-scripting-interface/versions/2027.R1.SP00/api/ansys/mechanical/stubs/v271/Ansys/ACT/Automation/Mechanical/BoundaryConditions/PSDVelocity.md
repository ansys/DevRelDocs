# `PSDVelocity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity(internalObject: Any)

<a id="PSDVelocity"></a>

### *class* PSDVelocity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PSDVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PSDVelocity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PSDVelocity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PSDVelocity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PSDVelocity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PSDVelocity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PSDVelocity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PSDVelocity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PSDVelocity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PSDVelocity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PSDVelocity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PSDVelocity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PSDVelocity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PSDVelocity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PSDVelocity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PSDVelocity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PSDVelocity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PSDVelocity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PSDVelocity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PSDVelocity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PSDVelocity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PSDVelocity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PSDVelocity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PSDVelocity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PSDVelocity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PSDVelocity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PSDVelocity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PSDVelocity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PSDVelocity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PSDVelocity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PSDVelocity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PSDVelocity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PSDVelocity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PSDVelocity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PSDVelocity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PSDVelocity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PSDVelocity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PSDVelocity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PSDVelocity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PSDVelocity.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BoundaryCondition`](#PSDVelocity.BoundaryCondition)               | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDVelocity.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PSDVelocity.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PSDVelocity.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDVelocity.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Direction`](#PSDVelocity.Direction)                               | Gets or sets the Direction.                                   |
| [`Figures`](#PSDVelocity.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PSDVelocity.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PSDVelocity.IconName)                                 | IconName property.                                            |
| [`Images`](#PSDVelocity.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PSDVelocity.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PSDVelocity.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDVelocity.LoadData)                                 | Gets or sets the LoadData.                                    |
| [`Name`](#PSDVelocity.Name)                                         | Name property.                                                |
| [`ObjectId`](#PSDVelocity.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PSDVelocity.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PSDVelocity.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PSDVelocity.Parent)                                     | Parent property.                                              |
| [`Properties`](#PSDVelocity.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDVelocity.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#PSDVelocity.State)                                       | State property.                                               |
| [`Suppressed`](#PSDVelocity.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PSDVelocity.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PSDVelocity.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDVelocity.AttachedRefs"></a>

### *property* PSDVelocity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.BoundaryCondition"></a>

### *property* PSDVelocity.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Children"></a>

### *property* PSDVelocity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ClsId"></a>

### *property* PSDVelocity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Comments"></a>

### *property* PSDVelocity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.DataModelObjectCategory"></a>

### *property* PSDVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Direction"></a>

### *property* PSDVelocity.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Figures"></a>

### *property* PSDVelocity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GroupingFolder"></a>

### *property* PSDVelocity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.IconName"></a>

### *property* PSDVelocity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Images"></a>

### *property* PSDVelocity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ImportableObjectSourceId"></a>

### *property* PSDVelocity.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.InternalObject"></a>

### *property* PSDVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.LoadData"></a>

### *property* PSDVelocity.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Name"></a>

### *property* PSDVelocity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ObjectId"></a>

### *property* PSDVelocity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ObjectState"></a>

### *property* PSDVelocity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ObjectTags"></a>

### *property* PSDVelocity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Parent"></a>

### *property* PSDVelocity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Properties"></a>

### *property* PSDVelocity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.ReadOnly"></a>

### *property* PSDVelocity.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.State"></a>

### *property* PSDVelocity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Suppressed"></a>

### *property* PSDVelocity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.TransferableObjectId"></a>

### *property* PSDVelocity.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.VisibleProperties"></a>

### *property* PSDVelocity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDVelocity.Activate"></a>

### PSDVelocity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddComment"></a>

### PSDVelocity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddFigure"></a>

### PSDVelocity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddImage"></a>

### PSDVelocity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Copy"></a>

### PSDVelocity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.CopyTo"></a>

### PSDVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.CreateObjRef"></a>

### PSDVelocity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.CreateParameter"></a>

### PSDVelocity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Cut"></a>

### PSDVelocity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Delete"></a>

### PSDVelocity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Duplicate"></a>

### PSDVelocity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Equals"></a>

### PSDVelocity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetAPIName"></a>

### PSDVelocity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetAllProperties"></a>

### PSDVelocity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetChildren"></a>

### PSDVelocity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PSDVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetDetailsView"></a>

### PSDVelocity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetEnumName"></a>

### PSDVelocity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetHashCode"></a>

### PSDVelocity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetIconFile"></a>

### PSDVelocity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetLifetimeService"></a>

### PSDVelocity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetObjectData"></a>

### PSDVelocity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetParameter"></a>

### PSDVelocity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetPath"></a>

### PSDVelocity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetPropertyName"></a>

### PSDVelocity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetPropertyValue"></a>

### PSDVelocity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetVisibleProperties"></a>

### PSDVelocity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetVisiblePropertyNames"></a>

### PSDVelocity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GroupAllSimilarChildren"></a>

### PSDVelocity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GroupSimilarObjects"></a>

### PSDVelocity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.InitializeLifetimeService"></a>

### PSDVelocity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.IsPropertyEditable"></a>

### PSDVelocity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDVelocity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.IsPropertyVisible"></a>

### PSDVelocity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDVelocity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Paste"></a>

### PSDVelocity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.PropertyByAPIName"></a>

### PSDVelocity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.PropertyById"></a>

### PSDVelocity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.PropertyByName"></a>

### PSDVelocity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.RemoveFromGroup"></a>

### PSDVelocity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.RemoveParameter"></a>

### PSDVelocity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


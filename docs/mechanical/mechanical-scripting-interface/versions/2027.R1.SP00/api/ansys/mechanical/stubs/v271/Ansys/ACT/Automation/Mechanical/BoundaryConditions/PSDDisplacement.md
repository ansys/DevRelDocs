# `PSDDisplacement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement(internalObject: Any)

<a id="PSDDisplacement"></a>

### *class* PSDDisplacement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PSDDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PSDDisplacement.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PSDDisplacement.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PSDDisplacement.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PSDDisplacement.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PSDDisplacement.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PSDDisplacement.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PSDDisplacement.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PSDDisplacement.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PSDDisplacement.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PSDDisplacement.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PSDDisplacement.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PSDDisplacement.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PSDDisplacement.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PSDDisplacement.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PSDDisplacement.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PSDDisplacement.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PSDDisplacement.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PSDDisplacement.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PSDDisplacement.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PSDDisplacement.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PSDDisplacement.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PSDDisplacement.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PSDDisplacement.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PSDDisplacement.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PSDDisplacement.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PSDDisplacement.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PSDDisplacement.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PSDDisplacement.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PSDDisplacement.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PSDDisplacement.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PSDDisplacement.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PSDDisplacement.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PSDDisplacement.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PSDDisplacement.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PSDDisplacement.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PSDDisplacement.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PSDDisplacement.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PSDDisplacement.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PSDDisplacement.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BoundaryCondition`](#PSDDisplacement.BoundaryCondition)               | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDDisplacement.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PSDDisplacement.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PSDDisplacement.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDDisplacement.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Direction`](#PSDDisplacement.Direction)                               | Gets or sets the Direction.                                   |
| [`Figures`](#PSDDisplacement.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PSDDisplacement.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PSDDisplacement.IconName)                                 | IconName property.                                            |
| [`Images`](#PSDDisplacement.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PSDDisplacement.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PSDDisplacement.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDDisplacement.LoadData)                                 | Gets or sets the LoadData.                                    |
| [`Name`](#PSDDisplacement.Name)                                         | Name property.                                                |
| [`ObjectId`](#PSDDisplacement.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PSDDisplacement.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PSDDisplacement.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PSDDisplacement.Parent)                                     | Parent property.                                              |
| [`Properties`](#PSDDisplacement.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDDisplacement.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#PSDDisplacement.State)                                       | State property.                                               |
| [`Suppressed`](#PSDDisplacement.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PSDDisplacement.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PSDDisplacement.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDDisplacement.AttachedRefs"></a>

### *property* PSDDisplacement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.BoundaryCondition"></a>

### *property* PSDDisplacement.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Children"></a>

### *property* PSDDisplacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ClsId"></a>

### *property* PSDDisplacement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Comments"></a>

### *property* PSDDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.DataModelObjectCategory"></a>

### *property* PSDDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Direction"></a>

### *property* PSDDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Figures"></a>

### *property* PSDDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupingFolder"></a>

### *property* PSDDisplacement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.IconName"></a>

### *property* PSDDisplacement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Images"></a>

### *property* PSDDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ImportableObjectSourceId"></a>

### *property* PSDDisplacement.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.InternalObject"></a>

### *property* PSDDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.LoadData"></a>

### *property* PSDDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Name"></a>

### *property* PSDDisplacement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ObjectId"></a>

### *property* PSDDisplacement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ObjectState"></a>

### *property* PSDDisplacement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ObjectTags"></a>

### *property* PSDDisplacement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Parent"></a>

### *property* PSDDisplacement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Properties"></a>

### *property* PSDDisplacement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.ReadOnly"></a>

### *property* PSDDisplacement.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.State"></a>

### *property* PSDDisplacement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Suppressed"></a>

### *property* PSDDisplacement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.TransferableObjectId"></a>

### *property* PSDDisplacement.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.VisibleProperties"></a>

### *property* PSDDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDDisplacement.Activate"></a>

### PSDDisplacement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddComment"></a>

### PSDDisplacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddFigure"></a>

### PSDDisplacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddImage"></a>

### PSDDisplacement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Copy"></a>

### PSDDisplacement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CopyTo"></a>

### PSDDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CreateObjRef"></a>

### PSDDisplacement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CreateParameter"></a>

### PSDDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Cut"></a>

### PSDDisplacement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Delete"></a>

### PSDDisplacement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Duplicate"></a>

### PSDDisplacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Equals"></a>

### PSDDisplacement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetAPIName"></a>

### PSDDisplacement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetAllProperties"></a>

### PSDDisplacement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetChildren"></a>

### PSDDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PSDDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetDetailsView"></a>

### PSDDisplacement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetEnumName"></a>

### PSDDisplacement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetHashCode"></a>

### PSDDisplacement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetIconFile"></a>

### PSDDisplacement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetLifetimeService"></a>

### PSDDisplacement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetObjectData"></a>

### PSDDisplacement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetParameter"></a>

### PSDDisplacement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetPath"></a>

### PSDDisplacement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetPropertyName"></a>

### PSDDisplacement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetPropertyValue"></a>

### PSDDisplacement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetVisibleProperties"></a>

### PSDDisplacement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetVisiblePropertyNames"></a>

### PSDDisplacement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupAllSimilarChildren"></a>

### PSDDisplacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupSimilarObjects"></a>

### PSDDisplacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.InitializeLifetimeService"></a>

### PSDDisplacement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.IsPropertyEditable"></a>

### PSDDisplacement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDDisplacement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.IsPropertyVisible"></a>

### PSDDisplacement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDDisplacement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Paste"></a>

### PSDDisplacement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByAPIName"></a>

### PSDDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyById"></a>

### PSDDisplacement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByName"></a>

### PSDDisplacement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.RemoveFromGroup"></a>

### PSDDisplacement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.RemoveParameter"></a>

### PSDDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


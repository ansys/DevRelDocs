# `LegacyThermalCondition`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LegacyThermalCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LegacyThermalCondition(internalObject: Any)

<a id="LegacyThermalCondition"></a>

### *class* LegacyThermalCondition(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LegacyThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LegacyThermalCondition.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LegacyThermalCondition.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#LegacyThermalCondition.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LegacyThermalCondition.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#LegacyThermalCondition.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LegacyThermalCondition.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LegacyThermalCondition.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LegacyThermalCondition.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LegacyThermalCondition.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LegacyThermalCondition.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LegacyThermalCondition.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LegacyThermalCondition.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#LegacyThermalCondition.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LegacyThermalCondition.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LegacyThermalCondition.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LegacyThermalCondition.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LegacyThermalCondition.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LegacyThermalCondition.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LegacyThermalCondition.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LegacyThermalCondition.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LegacyThermalCondition.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LegacyThermalCondition.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LegacyThermalCondition.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LegacyThermalCondition.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LegacyThermalCondition.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#LegacyThermalCondition.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LegacyThermalCondition.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LegacyThermalCondition.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LegacyThermalCondition.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LegacyThermalCondition.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LegacyThermalCondition.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LegacyThermalCondition.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LegacyThermalCondition.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LegacyThermalCondition.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LegacyThermalCondition.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LegacyThermalCondition.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LegacyThermalCondition.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LegacyThermalCondition.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#LegacyThermalCondition.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#LegacyThermalCondition.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#LegacyThermalCondition.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#LegacyThermalCondition.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LegacyThermalCondition.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#LegacyThermalCondition.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#LegacyThermalCondition.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#LegacyThermalCondition.IconName)                               | IconName property.                                            |
| [`Images`](#LegacyThermalCondition.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#LegacyThermalCondition.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#LegacyThermalCondition.Name)                                       | Name property.                                                |
| [`ObjectId`](#LegacyThermalCondition.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#LegacyThermalCondition.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#LegacyThermalCondition.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#LegacyThermalCondition.Parent)                                   | Parent property.                                              |
| [`Properties`](#LegacyThermalCondition.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#LegacyThermalCondition.State)                                     | State property.                                               |
| [`VisibleProperties`](#LegacyThermalCondition.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LegacyThermalCondition.AttachedRefs"></a>

### *property* LegacyThermalCondition.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Children"></a>

### *property* LegacyThermalCondition.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.ClsId"></a>

### *property* LegacyThermalCondition.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Comments"></a>

### *property* LegacyThermalCondition.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.DataModelObjectCategory"></a>

### *property* LegacyThermalCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Figures"></a>

### *property* LegacyThermalCondition.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GroupingFolder"></a>

### *property* LegacyThermalCondition.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.IconName"></a>

### *property* LegacyThermalCondition.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Images"></a>

### *property* LegacyThermalCondition.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.InternalObject"></a>

### *property* LegacyThermalCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSThermalConditionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Name"></a>

### *property* LegacyThermalCondition.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.ObjectId"></a>

### *property* LegacyThermalCondition.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.ObjectState"></a>

### *property* LegacyThermalCondition.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.ObjectTags"></a>

### *property* LegacyThermalCondition.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Parent"></a>

### *property* LegacyThermalCondition.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Properties"></a>

### *property* LegacyThermalCondition.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.State"></a>

### *property* LegacyThermalCondition.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.VisibleProperties"></a>

### *property* LegacyThermalCondition.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LegacyThermalCondition.Activate"></a>

### LegacyThermalCondition.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddComment"></a>

### LegacyThermalCondition.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddFigure"></a>

### LegacyThermalCondition.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.AddImage"></a>

### LegacyThermalCondition.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Copy"></a>

### LegacyThermalCondition.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.CopyTo"></a>

### LegacyThermalCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.CreateObjRef"></a>

### LegacyThermalCondition.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.CreateParameter"></a>

### LegacyThermalCondition.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Cut"></a>

### LegacyThermalCondition.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Delete"></a>

### LegacyThermalCondition.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Duplicate"></a>

### LegacyThermalCondition.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Equals"></a>

### LegacyThermalCondition.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetAPIName"></a>

### LegacyThermalCondition.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetAllProperties"></a>

### LegacyThermalCondition.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetChildren"></a>

### LegacyThermalCondition.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LegacyThermalCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetDetailsView"></a>

### LegacyThermalCondition.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetEnumName"></a>

### LegacyThermalCondition.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetHashCode"></a>

### LegacyThermalCondition.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetIconFile"></a>

### LegacyThermalCondition.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetLifetimeService"></a>

### LegacyThermalCondition.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetObjectData"></a>

### LegacyThermalCondition.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetParameter"></a>

### LegacyThermalCondition.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetPath"></a>

### LegacyThermalCondition.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetPropertyName"></a>

### LegacyThermalCondition.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetPropertyValue"></a>

### LegacyThermalCondition.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetVisibleProperties"></a>

### LegacyThermalCondition.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GetVisiblePropertyNames"></a>

### LegacyThermalCondition.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GroupAllSimilarChildren"></a>

### LegacyThermalCondition.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.GroupSimilarObjects"></a>

### LegacyThermalCondition.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.InitializeLifetimeService"></a>

### LegacyThermalCondition.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.IsPropertyEditable"></a>

### LegacyThermalCondition.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LegacyThermalCondition.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.IsPropertyVisible"></a>

### LegacyThermalCondition.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LegacyThermalCondition.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.Paste"></a>

### LegacyThermalCondition.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.PropertyByAPIName"></a>

### LegacyThermalCondition.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.PropertyById"></a>

### LegacyThermalCondition.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.PropertyByName"></a>

### LegacyThermalCondition.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.RemoveFromGroup"></a>

### LegacyThermalCondition.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LegacyThermalCondition.RemoveParameter"></a>

### LegacyThermalCondition.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


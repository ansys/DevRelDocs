# `OptimizationRegionBaseClass`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass"></a>

#### *class* Ansys.ACT.Automation.Mechanical.OptimizationRegionBaseClass(internalObject: Any)

<a id="OptimizationRegionBaseClass"></a>

### *class* OptimizationRegionBaseClass(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a OptimizationRegionBaseClass.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#OptimizationRegionBaseClass.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#OptimizationRegionBaseClass.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#OptimizationRegionBaseClass.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#OptimizationRegionBaseClass.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#OptimizationRegionBaseClass.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#OptimizationRegionBaseClass.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#OptimizationRegionBaseClass.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#OptimizationRegionBaseClass.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#OptimizationRegionBaseClass.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#OptimizationRegionBaseClass.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#OptimizationRegionBaseClass.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#OptimizationRegionBaseClass.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#OptimizationRegionBaseClass.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#OptimizationRegionBaseClass.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#OptimizationRegionBaseClass.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#OptimizationRegionBaseClass.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#OptimizationRegionBaseClass.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#OptimizationRegionBaseClass.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#OptimizationRegionBaseClass.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#OptimizationRegionBaseClass.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#OptimizationRegionBaseClass.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#OptimizationRegionBaseClass.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#OptimizationRegionBaseClass.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#OptimizationRegionBaseClass.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#OptimizationRegionBaseClass.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#OptimizationRegionBaseClass.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#OptimizationRegionBaseClass.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#OptimizationRegionBaseClass.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#OptimizationRegionBaseClass.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#OptimizationRegionBaseClass.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#OptimizationRegionBaseClass.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#OptimizationRegionBaseClass.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#OptimizationRegionBaseClass.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#OptimizationRegionBaseClass.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#OptimizationRegionBaseClass.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#OptimizationRegionBaseClass.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`Children`](#OptimizationRegionBaseClass.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#OptimizationRegionBaseClass.ClsId)                                                     | ClsId property.                                               |
| [`DataModelObjectCategory`](#OptimizationRegionBaseClass.DataModelObjectCategory)                 | DataModelObjectCategory property.                             |
| [`ExclusionRegionLocation`](#OptimizationRegionBaseClass.ExclusionRegionLocation)                 | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegionBaseClass.ExclusionScopingMethod)                   | Gets or sets the ExclusionScopingMethod.                      |
| [`GroupingFolder`](#OptimizationRegionBaseClass.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#OptimizationRegionBaseClass.IconName)                                               | IconName property.                                            |
| [`InternalObject`](#OptimizationRegionBaseClass.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`MaxCumulatedDisplacementControl`](#OptimizationRegionBaseClass.MaxCumulatedDisplacementControl) | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MorphingTotalMoveLimit`](#OptimizationRegionBaseClass.MorphingTotalMoveLimit)                   | Gets or sets the MorphingTotalMoveLimit.                      |
| [`Name`](#OptimizationRegionBaseClass.Name)                                                       | Name property.                                                |
| [`ObjectId`](#OptimizationRegionBaseClass.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#OptimizationRegionBaseClass.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#OptimizationRegionBaseClass.ObjectTags)                                           | ObjectTags property.                                          |
| [`Parent`](#OptimizationRegionBaseClass.Parent)                                                   | Parent property.                                              |
| [`Properties`](#OptimizationRegionBaseClass.Properties)                                           | Gets the list of properties for this object.                  |
| [`State`](#OptimizationRegionBaseClass.State)                                                     | State property.                                               |
| [`VisibleProperties`](#OptimizationRegionBaseClass.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="OptimizationRegionBaseClass.AttachedRefs"></a>

### *property* OptimizationRegionBaseClass.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Children"></a>

### *property* OptimizationRegionBaseClass.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ClsId"></a>

### *property* OptimizationRegionBaseClass.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.DataModelObjectCategory"></a>

### *property* OptimizationRegionBaseClass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataModelObjectCategory property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionRegionLocation"></a>

### *property* OptimizationRegionBaseClass.ExclusionRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ExclusionScopingMethod"></a>

### *property* OptimizationRegionBaseClass.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupingFolder"></a>

### *property* OptimizationRegionBaseClass.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.IconName"></a>

### *property* OptimizationRegionBaseClass.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.InternalObject"></a>

### *property* OptimizationRegionBaseClass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.MaxCumulatedDisplacementControl"></a>

### *property* OptimizationRegionBaseClass.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.MorphingTotalMoveLimit"></a>

### *property* OptimizationRegionBaseClass.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Name"></a>

### *property* OptimizationRegionBaseClass.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ObjectId"></a>

### *property* OptimizationRegionBaseClass.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ObjectState"></a>

### *property* OptimizationRegionBaseClass.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.ObjectTags"></a>

### *property* OptimizationRegionBaseClass.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Parent"></a>

### *property* OptimizationRegionBaseClass.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Properties"></a>

### *property* OptimizationRegionBaseClass.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.State"></a>

### *property* OptimizationRegionBaseClass.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.VisibleProperties"></a>

### *property* OptimizationRegionBaseClass.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="OptimizationRegionBaseClass.Activate"></a>

### OptimizationRegionBaseClass.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Copy"></a>

### OptimizationRegionBaseClass.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CopyTo"></a>

### OptimizationRegionBaseClass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CreateObjRef"></a>

### OptimizationRegionBaseClass.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.CreateParameter"></a>

### OptimizationRegionBaseClass.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Cut"></a>

### OptimizationRegionBaseClass.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Delete"></a>

### OptimizationRegionBaseClass.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Duplicate"></a>

### OptimizationRegionBaseClass.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Equals"></a>

### OptimizationRegionBaseClass.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetAPIName"></a>

### OptimizationRegionBaseClass.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetAllProperties"></a>

### OptimizationRegionBaseClass.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetChildren"></a>

### OptimizationRegionBaseClass.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### OptimizationRegionBaseClass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetDetailsView"></a>

### OptimizationRegionBaseClass.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetEnumName"></a>

### OptimizationRegionBaseClass.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetHashCode"></a>

### OptimizationRegionBaseClass.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetIconFile"></a>

### OptimizationRegionBaseClass.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetLifetimeService"></a>

### OptimizationRegionBaseClass.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetObjectData"></a>

### OptimizationRegionBaseClass.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetParameter"></a>

### OptimizationRegionBaseClass.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetPath"></a>

### OptimizationRegionBaseClass.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetPropertyName"></a>

### OptimizationRegionBaseClass.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetPropertyValue"></a>

### OptimizationRegionBaseClass.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetVisibleProperties"></a>

### OptimizationRegionBaseClass.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GetVisiblePropertyNames"></a>

### OptimizationRegionBaseClass.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupAllSimilarChildren"></a>

### OptimizationRegionBaseClass.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.GroupSimilarObjects"></a>

### OptimizationRegionBaseClass.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.InitializeLifetimeService"></a>

### OptimizationRegionBaseClass.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.IsPropertyEditable"></a>

### OptimizationRegionBaseClass.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### OptimizationRegionBaseClass.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.IsPropertyVisible"></a>

### OptimizationRegionBaseClass.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### OptimizationRegionBaseClass.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.Paste"></a>

### OptimizationRegionBaseClass.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByAPIName"></a>

### OptimizationRegionBaseClass.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyById"></a>

### OptimizationRegionBaseClass.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.PropertyByName"></a>

### OptimizationRegionBaseClass.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.RemoveFromGroup"></a>

### OptimizationRegionBaseClass.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegionBaseClass.RemoveParameter"></a>

### OptimizationRegionBaseClass.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->


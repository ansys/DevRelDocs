# `AMOverhangConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AMOverhangConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AMOverhangConstraint(internalObject: Any)

<a id="AMOverhangConstraint"></a>

### *class* AMOverhangConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMOverhangConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMOverhangConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#AMOverhangConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMOverhangConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMOverhangConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMOverhangConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AMOverhangConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMOverhangConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AMOverhangConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMOverhangConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AMOverhangConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMOverhangConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMOverhangConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMOverhangConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMOverhangConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMOverhangConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMOverhangConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMOverhangConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMOverhangConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AMOverhangConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMOverhangConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AMOverhangConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMOverhangConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMOverhangConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMOverhangConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMOverhangConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMOverhangConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMOverhangConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMOverhangConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMOverhangConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AMOverhangConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMOverhangConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AMOverhangConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AMOverhangConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMOverhangConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMOverhangConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AMOverhangConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AMOverhangConstraint.AttachedRefs)                       | AttachedRefs property.                                                                |
| [`BuildDirection`](#AMOverhangConstraint.BuildDirection)                   | Gets or sets the axis used for the build direction. Only axis enums will be accepted. |
| [`Children`](#AMOverhangConstraint.Children)                               | Gets the list of children.                                                            |
| [`ClsId`](#AMOverhangConstraint.ClsId)                                     | ClsId property.                                                                       |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                 | Gets or sets the CoordinateSystem.                                                    |
| [`DataModelObjectCategory`](#AMOverhangConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                          |
| [`GroupingFolder`](#AMOverhangConstraint.GroupingFolder)                   | GroupingFolder property.                                                              |
| [`IconName`](#AMOverhangConstraint.IconName)                               | IconName property.                                                                    |
| [`InternalObject`](#AMOverhangConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                    |
| [`Name`](#AMOverhangConstraint.Name)                                       | Name property.                                                                        |
| [`ObjectId`](#AMOverhangConstraint.ObjectId)                               | ObjectId property.                                                                    |
| [`ObjectState`](#AMOverhangConstraint.ObjectState)                         | ObjectState property.                                                                 |
| [`ObjectTags`](#AMOverhangConstraint.ObjectTags)                           | ObjectTags property.                                                                  |
| [`OverhangAngle`](#AMOverhangConstraint.OverhangAngle)                     | Gets or sets the OverhangAngle.                                                       |
| [`Parent`](#AMOverhangConstraint.Parent)                                   | Parent property.                                                                      |
| [`Properties`](#AMOverhangConstraint.Properties)                           | Gets the list of properties for this object.                                          |
| [`ScopingMethod`](#AMOverhangConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                       |
| [`Selection`](#AMOverhangConstraint.Selection)                             | Gets or sets the Selection.                                                           |
| [`State`](#AMOverhangConstraint.State)                                     | State property.                                                                       |
| [`Suppressed`](#AMOverhangConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                          |
| [`VisibleProperties`](#AMOverhangConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                         |

<a id="property-detail"></a>

## Property detail

<a id="AMOverhangConstraint.AttachedRefs"></a>

### *property* AMOverhangConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.BuildDirection"></a>

### *property* AMOverhangConstraint.BuildDirection *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the axis used for the build direction. Only axis enums will be accepted.
: InvalidArgumentException: “Origin” enum value.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Children"></a>

### *property* AMOverhangConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ClsId"></a>

### *property* AMOverhangConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CoordinateSystem"></a>

### *property* AMOverhangConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.DataModelObjectCategory"></a>

### *property* AMOverhangConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GroupingFolder"></a>

### *property* AMOverhangConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.IconName"></a>

### *property* AMOverhangConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.InternalObject"></a>

### *property* AMOverhangConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Name"></a>

### *property* AMOverhangConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ObjectId"></a>

### *property* AMOverhangConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ObjectState"></a>

### *property* AMOverhangConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ObjectTags"></a>

### *property* AMOverhangConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.OverhangAngle"></a>

### *property* AMOverhangConstraint.OverhangAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OverhangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Parent"></a>

### *property* AMOverhangConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Properties"></a>

### *property* AMOverhangConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.ScopingMethod"></a>

### *property* AMOverhangConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Selection"></a>

### *property* AMOverhangConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.State"></a>

### *property* AMOverhangConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Suppressed"></a>

### *property* AMOverhangConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.VisibleProperties"></a>

### *property* AMOverhangConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMOverhangConstraint.Activate"></a>

### AMOverhangConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Copy"></a>

### AMOverhangConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CopyTo"></a>

### AMOverhangConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CreateObjRef"></a>

### AMOverhangConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.CreateParameter"></a>

### AMOverhangConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Cut"></a>

### AMOverhangConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Delete"></a>

### AMOverhangConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Duplicate"></a>

### AMOverhangConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Equals"></a>

### AMOverhangConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetAPIName"></a>

### AMOverhangConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetAllProperties"></a>

### AMOverhangConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetChildren"></a>

### AMOverhangConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMOverhangConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetDetailsView"></a>

### AMOverhangConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetEnumName"></a>

### AMOverhangConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetHashCode"></a>

### AMOverhangConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetIconFile"></a>

### AMOverhangConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetLifetimeService"></a>

### AMOverhangConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetObjectData"></a>

### AMOverhangConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetParameter"></a>

### AMOverhangConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetPath"></a>

### AMOverhangConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetPropertyName"></a>

### AMOverhangConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetPropertyValue"></a>

### AMOverhangConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetVisibleProperties"></a>

### AMOverhangConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GetVisiblePropertyNames"></a>

### AMOverhangConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GroupAllSimilarChildren"></a>

### AMOverhangConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.GroupSimilarObjects"></a>

### AMOverhangConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.InitializeLifetimeService"></a>

### AMOverhangConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.IsPropertyEditable"></a>

### AMOverhangConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMOverhangConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.IsPropertyVisible"></a>

### AMOverhangConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMOverhangConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.Paste"></a>

### AMOverhangConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.PropertyByAPIName"></a>

### AMOverhangConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.PropertyById"></a>

### AMOverhangConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.PropertyByName"></a>

### AMOverhangConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.RemoveFromGroup"></a>

### AMOverhangConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.RemoveParameter"></a>

### AMOverhangConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMOverhangConstraint.RenameBasedOnDefinition"></a>

### AMOverhangConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->


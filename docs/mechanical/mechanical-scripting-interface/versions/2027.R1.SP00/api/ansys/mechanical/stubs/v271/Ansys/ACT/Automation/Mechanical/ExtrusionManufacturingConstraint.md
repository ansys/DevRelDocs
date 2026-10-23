# `ExtrusionManufacturingConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExtrusionManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExtrusionManufacturingConstraint(internalObject: Any)

<a id="ExtrusionManufacturingConstraint"></a>

### *class* ExtrusionManufacturingConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ExtrusionManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ExtrusionManufacturingConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#ExtrusionManufacturingConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ExtrusionManufacturingConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ExtrusionManufacturingConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ExtrusionManufacturingConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ExtrusionManufacturingConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ExtrusionManufacturingConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ExtrusionManufacturingConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ExtrusionManufacturingConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ExtrusionManufacturingConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ExtrusionManufacturingConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ExtrusionManufacturingConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ExtrusionManufacturingConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ExtrusionManufacturingConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ExtrusionManufacturingConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ExtrusionManufacturingConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ExtrusionManufacturingConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ExtrusionManufacturingConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ExtrusionManufacturingConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ExtrusionManufacturingConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ExtrusionManufacturingConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ExtrusionManufacturingConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ExtrusionManufacturingConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ExtrusionManufacturingConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ExtrusionManufacturingConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ExtrusionManufacturingConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ExtrusionManufacturingConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ExtrusionManufacturingConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ExtrusionManufacturingConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ExtrusionManufacturingConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ExtrusionManufacturingConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ExtrusionManufacturingConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ExtrusionManufacturingConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ExtrusionManufacturingConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ExtrusionManufacturingConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ExtrusionManufacturingConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ExtrusionManufacturingConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                               |
| [`Axis`](#ExtrusionManufacturingConstraint.Axis)                                       | Gets or sets the Extrusion Axis. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Children`](#ExtrusionManufacturingConstraint.Children)                               | Gets the list of children.                                                                                                           |
| [`ClsId`](#ExtrusionManufacturingConstraint.ClsId)                                     | ClsId property.                                                                                                                      |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                             | Gets or sets the CoordinateSystem.                                                                                                   |
| [`DataModelObjectCategory`](#ExtrusionManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                         |
| [`GroupingFolder`](#ExtrusionManufacturingConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                             |
| [`IconName`](#ExtrusionManufacturingConstraint.IconName)                               | IconName property.                                                                                                                   |
| [`InternalObject`](#ExtrusionManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                   |
| [`Location`](#ExtrusionManufacturingConstraint.Location)                               | Gets or sets the Location.                                                                                                           |
| [`Name`](#ExtrusionManufacturingConstraint.Name)                                       | Name property.                                                                                                                       |
| [`ObjectId`](#ExtrusionManufacturingConstraint.ObjectId)                               | ObjectId property.                                                                                                                   |
| [`ObjectState`](#ExtrusionManufacturingConstraint.ObjectState)                         | ObjectState property.                                                                                                                |
| [`ObjectTags`](#ExtrusionManufacturingConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                 |
| [`Parent`](#ExtrusionManufacturingConstraint.Parent)                                   | Parent property.                                                                                                                     |
| [`Properties`](#ExtrusionManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                                                                                         |
| [`ScopingMethod`](#ExtrusionManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                      |
| [`Selection`](#ExtrusionManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                                                                                          |
| [`State`](#ExtrusionManufacturingConstraint.State)                                     | State property.                                                                                                                      |
| [`Suppressed`](#ExtrusionManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                         |
| [`VisibleProperties`](#ExtrusionManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                        |

<a id="property-detail"></a>

## Property detail

<a id="ExtrusionManufacturingConstraint.AttachedRefs"></a>

### *property* ExtrusionManufacturingConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Axis"></a>

### *property* ExtrusionManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Extrusion Axis. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Children"></a>

### *property* ExtrusionManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.ClsId"></a>

### *property* ExtrusionManufacturingConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.CoordinateSystem"></a>

### *property* ExtrusionManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.DataModelObjectCategory"></a>

### *property* ExtrusionManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GroupingFolder"></a>

### *property* ExtrusionManufacturingConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.IconName"></a>

### *property* ExtrusionManufacturingConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.InternalObject"></a>

### *property* ExtrusionManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Location"></a>

### *property* ExtrusionManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Name"></a>

### *property* ExtrusionManufacturingConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.ObjectId"></a>

### *property* ExtrusionManufacturingConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.ObjectState"></a>

### *property* ExtrusionManufacturingConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.ObjectTags"></a>

### *property* ExtrusionManufacturingConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Parent"></a>

### *property* ExtrusionManufacturingConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Properties"></a>

### *property* ExtrusionManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.ScopingMethod"></a>

### *property* ExtrusionManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Selection"></a>

### *property* ExtrusionManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.State"></a>

### *property* ExtrusionManufacturingConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Suppressed"></a>

### *property* ExtrusionManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.VisibleProperties"></a>

### *property* ExtrusionManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExtrusionManufacturingConstraint.Activate"></a>

### ExtrusionManufacturingConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Copy"></a>

### ExtrusionManufacturingConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.CopyTo"></a>

### ExtrusionManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.CreateObjRef"></a>

### ExtrusionManufacturingConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.CreateParameter"></a>

### ExtrusionManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Cut"></a>

### ExtrusionManufacturingConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Delete"></a>

### ExtrusionManufacturingConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Duplicate"></a>

### ExtrusionManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Equals"></a>

### ExtrusionManufacturingConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetAPIName"></a>

### ExtrusionManufacturingConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetAllProperties"></a>

### ExtrusionManufacturingConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetChildren"></a>

### ExtrusionManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ExtrusionManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetDetailsView"></a>

### ExtrusionManufacturingConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetEnumName"></a>

### ExtrusionManufacturingConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetHashCode"></a>

### ExtrusionManufacturingConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetIconFile"></a>

### ExtrusionManufacturingConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetLifetimeService"></a>

### ExtrusionManufacturingConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetObjectData"></a>

### ExtrusionManufacturingConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetParameter"></a>

### ExtrusionManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetPath"></a>

### ExtrusionManufacturingConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetPropertyName"></a>

### ExtrusionManufacturingConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetPropertyValue"></a>

### ExtrusionManufacturingConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetVisibleProperties"></a>

### ExtrusionManufacturingConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GetVisiblePropertyNames"></a>

### ExtrusionManufacturingConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GroupAllSimilarChildren"></a>

### ExtrusionManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.GroupSimilarObjects"></a>

### ExtrusionManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.InitializeLifetimeService"></a>

### ExtrusionManufacturingConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.IsPropertyEditable"></a>

### ExtrusionManufacturingConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExtrusionManufacturingConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.IsPropertyVisible"></a>

### ExtrusionManufacturingConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ExtrusionManufacturingConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.Paste"></a>

### ExtrusionManufacturingConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.PropertyByAPIName"></a>

### ExtrusionManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.PropertyById"></a>

### ExtrusionManufacturingConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.PropertyByName"></a>

### ExtrusionManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.RemoveFromGroup"></a>

### ExtrusionManufacturingConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.RemoveParameter"></a>

### ExtrusionManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExtrusionManufacturingConstraint.RenameBasedOnDefinition"></a>

### ExtrusionManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->


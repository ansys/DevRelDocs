# `PatternRepetitionConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint(internalObject: Any)

<a id="PatternRepetitionConstraint"></a>

### *class* PatternRepetitionConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PatternRepetitionConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PatternRepetitionConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#PatternRepetitionConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PatternRepetitionConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PatternRepetitionConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PatternRepetitionConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PatternRepetitionConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PatternRepetitionConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PatternRepetitionConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PatternRepetitionConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PatternRepetitionConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PatternRepetitionConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PatternRepetitionConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PatternRepetitionConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PatternRepetitionConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PatternRepetitionConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PatternRepetitionConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PatternRepetitionConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PatternRepetitionConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PatternRepetitionConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PatternRepetitionConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PatternRepetitionConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PatternRepetitionConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PatternRepetitionConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PatternRepetitionConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PatternRepetitionConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PatternRepetitionConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PatternRepetitionConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PatternRepetitionConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PatternRepetitionConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PatternRepetitionConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PatternRepetitionConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PatternRepetitionConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PatternRepetitionConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PatternRepetitionConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PatternRepetitionConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#PatternRepetitionConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#PatternRepetitionConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                         |
| [`Axis`](#PatternRepetitionConstraint.Axis)                                       | Gets or sets the Axis used for repetition. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Children`](#PatternRepetitionConstraint.Children)                               | Gets the list of children.                                                                                                                     |
| [`ClsId`](#PatternRepetitionConstraint.ClsId)                                     | ClsId property.                                                                                                                                |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                        | Gets or sets the CoordinateSystem.                                                                                                             |
| [`DataModelObjectCategory`](#PatternRepetitionConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                   |
| [`GroupingFolder`](#PatternRepetitionConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                       |
| [`IconName`](#PatternRepetitionConstraint.IconName)                               | IconName property.                                                                                                                             |
| [`InternalObject`](#PatternRepetitionConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                             |
| [`Location`](#PatternRepetitionConstraint.Location)                               | Gets or sets the Location.                                                                                                                     |
| [`Name`](#PatternRepetitionConstraint.Name)                                       | Name property.                                                                                                                                 |
| [`ObjectId`](#PatternRepetitionConstraint.ObjectId)                               | ObjectId property.                                                                                                                             |
| [`ObjectState`](#PatternRepetitionConstraint.ObjectState)                         | ObjectState property.                                                                                                                          |
| [`ObjectTags`](#PatternRepetitionConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                           |
| [`Offset`](#PatternRepetitionConstraint.Offset)                                   | Gets or sets the Offset.                                                                                                                       |
| [`Parent`](#PatternRepetitionConstraint.Parent)                                   | Parent property.                                                                                                                               |
| [`Properties`](#PatternRepetitionConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                   |
| [`ScopingMethod`](#PatternRepetitionConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                |
| [`Selection`](#PatternRepetitionConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                    |
| [`State`](#PatternRepetitionConstraint.State)                                     | State property.                                                                                                                                |
| [`Suppressed`](#PatternRepetitionConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                   |
| [`VisibleProperties`](#PatternRepetitionConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="PatternRepetitionConstraint.AttachedRefs"></a>

### *property* PatternRepetitionConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Axis"></a>

### *property* PatternRepetitionConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis used for repetition. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Children"></a>

### *property* PatternRepetitionConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ClsId"></a>

### *property* PatternRepetitionConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CoordinateSystem"></a>

### *property* PatternRepetitionConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.DataModelObjectCategory"></a>

### *property* PatternRepetitionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupingFolder"></a>

### *property* PatternRepetitionConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.IconName"></a>

### *property* PatternRepetitionConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.InternalObject"></a>

### *property* PatternRepetitionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Location"></a>

### *property* PatternRepetitionConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Name"></a>

### *property* PatternRepetitionConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ObjectId"></a>

### *property* PatternRepetitionConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ObjectState"></a>

### *property* PatternRepetitionConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ObjectTags"></a>

### *property* PatternRepetitionConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Offset"></a>

### *property* PatternRepetitionConstraint.Offset *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Offset.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Parent"></a>

### *property* PatternRepetitionConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Properties"></a>

### *property* PatternRepetitionConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.ScopingMethod"></a>

### *property* PatternRepetitionConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Selection"></a>

### *property* PatternRepetitionConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.State"></a>

### *property* PatternRepetitionConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Suppressed"></a>

### *property* PatternRepetitionConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.VisibleProperties"></a>

### *property* PatternRepetitionConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PatternRepetitionConstraint.Activate"></a>

### PatternRepetitionConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Copy"></a>

### PatternRepetitionConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CopyTo"></a>

### PatternRepetitionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CreateObjRef"></a>

### PatternRepetitionConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.CreateParameter"></a>

### PatternRepetitionConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Cut"></a>

### PatternRepetitionConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Delete"></a>

### PatternRepetitionConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Duplicate"></a>

### PatternRepetitionConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Equals"></a>

### PatternRepetitionConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetAPIName"></a>

### PatternRepetitionConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetAllProperties"></a>

### PatternRepetitionConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetChildren"></a>

### PatternRepetitionConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PatternRepetitionConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetDetailsView"></a>

### PatternRepetitionConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetEnumName"></a>

### PatternRepetitionConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetHashCode"></a>

### PatternRepetitionConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetIconFile"></a>

### PatternRepetitionConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetLifetimeService"></a>

### PatternRepetitionConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetObjectData"></a>

### PatternRepetitionConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetParameter"></a>

### PatternRepetitionConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetPath"></a>

### PatternRepetitionConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetPropertyName"></a>

### PatternRepetitionConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetPropertyValue"></a>

### PatternRepetitionConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetVisibleProperties"></a>

### PatternRepetitionConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GetVisiblePropertyNames"></a>

### PatternRepetitionConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupAllSimilarChildren"></a>

### PatternRepetitionConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.GroupSimilarObjects"></a>

### PatternRepetitionConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.InitializeLifetimeService"></a>

### PatternRepetitionConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.IsPropertyEditable"></a>

### PatternRepetitionConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PatternRepetitionConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.IsPropertyVisible"></a>

### PatternRepetitionConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PatternRepetitionConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.Paste"></a>

### PatternRepetitionConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByAPIName"></a>

### PatternRepetitionConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyById"></a>

### PatternRepetitionConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.PropertyByName"></a>

### PatternRepetitionConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RemoveFromGroup"></a>

### PatternRepetitionConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RemoveParameter"></a>

### PatternRepetitionConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PatternRepetitionConstraint.RenameBasedOnDefinition"></a>

### PatternRepetitionConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->


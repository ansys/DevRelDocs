# `CyclicManufacturingConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint(internalObject: Any)

<a id="CyclicManufacturingConstraint"></a>

### *class* CyclicManufacturingConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CyclicManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CyclicManufacturingConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#CyclicManufacturingConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CyclicManufacturingConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CyclicManufacturingConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CyclicManufacturingConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CyclicManufacturingConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CyclicManufacturingConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CyclicManufacturingConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CyclicManufacturingConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CyclicManufacturingConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CyclicManufacturingConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CyclicManufacturingConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CyclicManufacturingConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CyclicManufacturingConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CyclicManufacturingConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CyclicManufacturingConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CyclicManufacturingConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CyclicManufacturingConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CyclicManufacturingConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CyclicManufacturingConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CyclicManufacturingConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CyclicManufacturingConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CyclicManufacturingConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CyclicManufacturingConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CyclicManufacturingConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CyclicManufacturingConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CyclicManufacturingConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CyclicManufacturingConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CyclicManufacturingConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CyclicManufacturingConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CyclicManufacturingConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CyclicManufacturingConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CyclicManufacturingConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CyclicManufacturingConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CyclicManufacturingConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#CyclicManufacturingConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#CyclicManufacturingConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                              |
| [`Axis`](#CyclicManufacturingConstraint.Axis)                                       | Gets or sets the Symmetry Axis. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Children`](#CyclicManufacturingConstraint.Children)                               | Gets the list of children.                                                                                                          |
| [`ClsId`](#CyclicManufacturingConstraint.ClsId)                                     | ClsId property.                                                                                                                     |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                          | Gets or sets the CoordinateSystem.                                                                                                  |
| [`DataModelObjectCategory`](#CyclicManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                        |
| [`GroupingFolder`](#CyclicManufacturingConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                            |
| [`IconName`](#CyclicManufacturingConstraint.IconName)                               | IconName property.                                                                                                                  |
| [`InternalObject`](#CyclicManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                  |
| [`Location`](#CyclicManufacturingConstraint.Location)                               | Gets or sets the Location.                                                                                                          |
| [`Name`](#CyclicManufacturingConstraint.Name)                                       | Name property.                                                                                                                      |
| [`NumberofSectors`](#CyclicManufacturingConstraint.NumberofSectors)                 | Gets or sets the NumberofSectors.                                                                                                   |
| [`ObjectId`](#CyclicManufacturingConstraint.ObjectId)                               | ObjectId property.                                                                                                                  |
| [`ObjectState`](#CyclicManufacturingConstraint.ObjectState)                         | ObjectState property.                                                                                                               |
| [`ObjectTags`](#CyclicManufacturingConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                |
| [`Parent`](#CyclicManufacturingConstraint.Parent)                                   | Parent property.                                                                                                                    |
| [`Properties`](#CyclicManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                                                                                        |
| [`ScopingMethod`](#CyclicManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                     |
| [`Selection`](#CyclicManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                                                                                         |
| [`State`](#CyclicManufacturingConstraint.State)                                     | State property.                                                                                                                     |
| [`Suppressed`](#CyclicManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                        |
| [`VisibleProperties`](#CyclicManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="CyclicManufacturingConstraint.AttachedRefs"></a>

### *property* CyclicManufacturingConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Axis"></a>

### *property* CyclicManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Symmetry Axis. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Children"></a>

### *property* CyclicManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ClsId"></a>

### *property* CyclicManufacturingConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CoordinateSystem"></a>

### *property* CyclicManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.DataModelObjectCategory"></a>

### *property* CyclicManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GroupingFolder"></a>

### *property* CyclicManufacturingConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.IconName"></a>

### *property* CyclicManufacturingConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.InternalObject"></a>

### *property* CyclicManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Location"></a>

### *property* CyclicManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Name"></a>

### *property* CyclicManufacturingConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.NumberofSectors"></a>

### *property* CyclicManufacturingConstraint.NumberofSectors *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ObjectId"></a>

### *property* CyclicManufacturingConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ObjectState"></a>

### *property* CyclicManufacturingConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ObjectTags"></a>

### *property* CyclicManufacturingConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Parent"></a>

### *property* CyclicManufacturingConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Properties"></a>

### *property* CyclicManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.ScopingMethod"></a>

### *property* CyclicManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Selection"></a>

### *property* CyclicManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.State"></a>

### *property* CyclicManufacturingConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Suppressed"></a>

### *property* CyclicManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.VisibleProperties"></a>

### *property* CyclicManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CyclicManufacturingConstraint.Activate"></a>

### CyclicManufacturingConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Copy"></a>

### CyclicManufacturingConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CopyTo"></a>

### CyclicManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CreateObjRef"></a>

### CyclicManufacturingConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.CreateParameter"></a>

### CyclicManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Cut"></a>

### CyclicManufacturingConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Delete"></a>

### CyclicManufacturingConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Duplicate"></a>

### CyclicManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Equals"></a>

### CyclicManufacturingConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetAPIName"></a>

### CyclicManufacturingConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetAllProperties"></a>

### CyclicManufacturingConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetChildren"></a>

### CyclicManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CyclicManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetDetailsView"></a>

### CyclicManufacturingConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetEnumName"></a>

### CyclicManufacturingConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetHashCode"></a>

### CyclicManufacturingConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetIconFile"></a>

### CyclicManufacturingConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetLifetimeService"></a>

### CyclicManufacturingConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetObjectData"></a>

### CyclicManufacturingConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetParameter"></a>

### CyclicManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetPath"></a>

### CyclicManufacturingConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetPropertyName"></a>

### CyclicManufacturingConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetPropertyValue"></a>

### CyclicManufacturingConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetVisibleProperties"></a>

### CyclicManufacturingConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GetVisiblePropertyNames"></a>

### CyclicManufacturingConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GroupAllSimilarChildren"></a>

### CyclicManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.GroupSimilarObjects"></a>

### CyclicManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.InitializeLifetimeService"></a>

### CyclicManufacturingConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.IsPropertyEditable"></a>

### CyclicManufacturingConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CyclicManufacturingConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.IsPropertyVisible"></a>

### CyclicManufacturingConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CyclicManufacturingConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.Paste"></a>

### CyclicManufacturingConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.PropertyByAPIName"></a>

### CyclicManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.PropertyById"></a>

### CyclicManufacturingConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.PropertyByName"></a>

### CyclicManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.RemoveFromGroup"></a>

### CyclicManufacturingConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.RemoveParameter"></a>

### CyclicManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CyclicManufacturingConstraint.RenameBasedOnDefinition"></a>

### CyclicManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->


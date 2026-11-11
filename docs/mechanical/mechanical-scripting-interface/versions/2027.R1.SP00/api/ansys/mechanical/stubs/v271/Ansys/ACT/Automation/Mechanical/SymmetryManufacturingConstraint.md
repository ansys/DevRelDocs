# `SymmetryManufacturingConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryManufacturingConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SymmetryManufacturingConstraint(internalObject: Any)

<a id="SymmetryManufacturingConstraint"></a>

### *class* SymmetryManufacturingConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SymmetryManufacturingConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SymmetryManufacturingConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#SymmetryManufacturingConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SymmetryManufacturingConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SymmetryManufacturingConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SymmetryManufacturingConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SymmetryManufacturingConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SymmetryManufacturingConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SymmetryManufacturingConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SymmetryManufacturingConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SymmetryManufacturingConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SymmetryManufacturingConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SymmetryManufacturingConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SymmetryManufacturingConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SymmetryManufacturingConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SymmetryManufacturingConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SymmetryManufacturingConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SymmetryManufacturingConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SymmetryManufacturingConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SymmetryManufacturingConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SymmetryManufacturingConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SymmetryManufacturingConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SymmetryManufacturingConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SymmetryManufacturingConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SymmetryManufacturingConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SymmetryManufacturingConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SymmetryManufacturingConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SymmetryManufacturingConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SymmetryManufacturingConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SymmetryManufacturingConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SymmetryManufacturingConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SymmetryManufacturingConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SymmetryManufacturingConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SymmetryManufacturingConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SymmetryManufacturingConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SymmetryManufacturingConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#SymmetryManufacturingConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#SymmetryManufacturingConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                  |
| [`Axis`](#SymmetryManufacturingConstraint.Axis)                                       | Gets or sets the normal axis to the Symmetry plane. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”). |
| [`Children`](#SymmetryManufacturingConstraint.Children)                               | Gets the list of children.                                                                                                                              |
| [`ClsId`](#SymmetryManufacturingConstraint.ClsId)                                     | ClsId property.                                                                                                                                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                            | Gets or sets the CoordinateSystem.                                                                                                                      |
| [`DataModelObjectCategory`](#SymmetryManufacturingConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                            |
| [`GroupingFolder`](#SymmetryManufacturingConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                |
| [`IconName`](#SymmetryManufacturingConstraint.IconName)                               | IconName property.                                                                                                                                      |
| [`InternalObject`](#SymmetryManufacturingConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                      |
| [`Location`](#SymmetryManufacturingConstraint.Location)                               | Gets or sets the Location.                                                                                                                              |
| [`Name`](#SymmetryManufacturingConstraint.Name)                                       | Name property.                                                                                                                                          |
| [`ObjectId`](#SymmetryManufacturingConstraint.ObjectId)                               | ObjectId property.                                                                                                                                      |
| [`ObjectState`](#SymmetryManufacturingConstraint.ObjectState)                         | ObjectState property.                                                                                                                                   |
| [`ObjectTags`](#SymmetryManufacturingConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                    |
| [`Parent`](#SymmetryManufacturingConstraint.Parent)                                   | Parent property.                                                                                                                                        |
| [`Properties`](#SymmetryManufacturingConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                            |
| [`ScopingMethod`](#SymmetryManufacturingConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                         |
| [`Selection`](#SymmetryManufacturingConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                             |
| [`State`](#SymmetryManufacturingConstraint.State)                                     | State property.                                                                                                                                         |
| [`Suppressed`](#SymmetryManufacturingConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                            |
| [`VisibleProperties`](#SymmetryManufacturingConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                           |

<a id="property-detail"></a>

## Property detail

<a id="SymmetryManufacturingConstraint.AttachedRefs"></a>

### *property* SymmetryManufacturingConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Axis"></a>

### *property* SymmetryManufacturingConstraint.Axis *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the normal axis to the Symmetry plane. Only positive direction enums will be accepted (“PositiveXAxis”, “PositiveYAxis”, “PositiveXAxis”).
: InvalidArgumentException: Any unsupported enum value.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Children"></a>

### *property* SymmetryManufacturingConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.ClsId"></a>

### *property* SymmetryManufacturingConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.CoordinateSystem"></a>

### *property* SymmetryManufacturingConstraint.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.DataModelObjectCategory"></a>

### *property* SymmetryManufacturingConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GroupingFolder"></a>

### *property* SymmetryManufacturingConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.IconName"></a>

### *property* SymmetryManufacturingConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.InternalObject"></a>

### *property* SymmetryManufacturingConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Location"></a>

### *property* SymmetryManufacturingConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Name"></a>

### *property* SymmetryManufacturingConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.ObjectId"></a>

### *property* SymmetryManufacturingConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.ObjectState"></a>

### *property* SymmetryManufacturingConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.ObjectTags"></a>

### *property* SymmetryManufacturingConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Parent"></a>

### *property* SymmetryManufacturingConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Properties"></a>

### *property* SymmetryManufacturingConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.ScopingMethod"></a>

### *property* SymmetryManufacturingConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Selection"></a>

### *property* SymmetryManufacturingConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.State"></a>

### *property* SymmetryManufacturingConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Suppressed"></a>

### *property* SymmetryManufacturingConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.VisibleProperties"></a>

### *property* SymmetryManufacturingConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SymmetryManufacturingConstraint.Activate"></a>

### SymmetryManufacturingConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Copy"></a>

### SymmetryManufacturingConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.CopyTo"></a>

### SymmetryManufacturingConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.CreateObjRef"></a>

### SymmetryManufacturingConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.CreateParameter"></a>

### SymmetryManufacturingConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Cut"></a>

### SymmetryManufacturingConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Delete"></a>

### SymmetryManufacturingConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Duplicate"></a>

### SymmetryManufacturingConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Equals"></a>

### SymmetryManufacturingConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetAPIName"></a>

### SymmetryManufacturingConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetAllProperties"></a>

### SymmetryManufacturingConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetChildren"></a>

### SymmetryManufacturingConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SymmetryManufacturingConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetDetailsView"></a>

### SymmetryManufacturingConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetEnumName"></a>

### SymmetryManufacturingConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetHashCode"></a>

### SymmetryManufacturingConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetIconFile"></a>

### SymmetryManufacturingConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetLifetimeService"></a>

### SymmetryManufacturingConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetObjectData"></a>

### SymmetryManufacturingConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetParameter"></a>

### SymmetryManufacturingConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetPath"></a>

### SymmetryManufacturingConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetPropertyName"></a>

### SymmetryManufacturingConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetPropertyValue"></a>

### SymmetryManufacturingConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetVisibleProperties"></a>

### SymmetryManufacturingConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GetVisiblePropertyNames"></a>

### SymmetryManufacturingConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GroupAllSimilarChildren"></a>

### SymmetryManufacturingConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.GroupSimilarObjects"></a>

### SymmetryManufacturingConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.InitializeLifetimeService"></a>

### SymmetryManufacturingConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.IsPropertyEditable"></a>

### SymmetryManufacturingConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryManufacturingConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.IsPropertyVisible"></a>

### SymmetryManufacturingConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SymmetryManufacturingConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.Paste"></a>

### SymmetryManufacturingConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.PropertyByAPIName"></a>

### SymmetryManufacturingConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.PropertyById"></a>

### SymmetryManufacturingConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.PropertyByName"></a>

### SymmetryManufacturingConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.RemoveFromGroup"></a>

### SymmetryManufacturingConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.RemoveParameter"></a>

### SymmetryManufacturingConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SymmetryManufacturingConstraint.RenameBasedOnDefinition"></a>

### SymmetryManufacturingConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->


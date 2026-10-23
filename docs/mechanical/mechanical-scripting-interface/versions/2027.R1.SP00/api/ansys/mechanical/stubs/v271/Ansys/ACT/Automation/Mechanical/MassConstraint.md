# `MassConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MassConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MassConstraint(internalObject: Any)

<a id="MassConstraint"></a>

### *class* MassConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MassConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MassConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#MassConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MassConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MassConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MassConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MassConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MassConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MassConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MassConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MassConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MassConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MassConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MassConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MassConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MassConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MassConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MassConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MassConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MassConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MassConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MassConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MassConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MassConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MassConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MassConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MassConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MassConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MassConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MassConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MassConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MassConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MassConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MassConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MassConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MassConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MassConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MassConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#MassConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#MassConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`DataModelObjectCategory`](#MassConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`DefineBy`](#MassConstraint.DefineBy)                               | Gets or sets the DefineBy.                                                                                                                                                                                                                                                                                                                    |
| [`EnvironmentSelection`](#MassConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#MassConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#MassConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#MassConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`Location`](#MassConstraint.Location)                               | Gets or sets the Location.                                                                                                                                                                                                                                                                                                                    |
| [`MaximumAbsoluteValue`](#MassConstraint.MaximumAbsoluteValue)       | Gets or sets the MaximumAbsoluteValue.                                                                                                                                                                                                                                                                                                        |
| [`MinimumAbsoluteValue`](#MassConstraint.MinimumAbsoluteValue)       | Gets or sets the MinimumAbsoluteValue.                                                                                                                                                                                                                                                                                                        |
| [`Name`](#MassConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#MassConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#MassConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#MassConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#MassConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`PercentageToRetain`](#MassConstraint.PercentageToRetain)           | Gets or sets the PercentageToRetain.                                                                                                                                                                                                                                                                                                          |
| [`PercentageToRetainMax`](#MassConstraint.PercentageToRetainMax)     | Gets or sets the PercentageToRetainMax.                                                                                                                                                                                                                                                                                                       |
| [`PercentageToRetainMin`](#MassConstraint.PercentageToRetainMin)     | Gets or sets the PercentageToRetainMin.                                                                                                                                                                                                                                                                                                       |
| [`Properties`](#MassConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`ScopingMethod`](#MassConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                                                               |
| [`Selection`](#MassConstraint.Selection)                             | Gets or sets the Selection.                                                                                                                                                                                                                                                                                                                   |
| [`State`](#MassConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#MassConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#MassConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="MassConstraint.AttachedRefs"></a>

### *property* MassConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Children"></a>

### *property* MassConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ClsId"></a>

### *property* MassConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.DataModelObjectCategory"></a>

### *property* MassConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.DefineBy"></a>

### *property* MassConstraint.DefineBy *: [Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy](../../../Mechanical/DataModel/Enums/ResponseConstraintDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResponseConstraintDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.EnvironmentSelection"></a>

### *property* MassConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GroupingFolder"></a>

### *property* MassConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.IconName"></a>

### *property* MassConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.InternalObject"></a>

### *property* MassConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Location"></a>

### *property* MassConstraint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.MaximumAbsoluteValue"></a>

### *property* MassConstraint.MaximumAbsoluteValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.MinimumAbsoluteValue"></a>

### *property* MassConstraint.MinimumAbsoluteValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumAbsoluteValue.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Name"></a>

### *property* MassConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ObjectId"></a>

### *property* MassConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ObjectState"></a>

### *property* MassConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ObjectTags"></a>

### *property* MassConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Parent"></a>

### *property* MassConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetain"></a>

### *property* MassConstraint.PercentageToRetain *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetain.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetainMax"></a>

### *property* MassConstraint.PercentageToRetainMax *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMax.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PercentageToRetainMin"></a>

### *property* MassConstraint.PercentageToRetainMin *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageToRetainMin.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Properties"></a>

### *property* MassConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.ScopingMethod"></a>

### *property* MassConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Selection"></a>

### *property* MassConstraint.Selection *: [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Selection.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.State"></a>

### *property* MassConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Suppressed"></a>

### *property* MassConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.VisibleProperties"></a>

### *property* MassConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MassConstraint.Activate"></a>

### MassConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Copy"></a>

### MassConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.CopyTo"></a>

### MassConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.CreateObjRef"></a>

### MassConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.CreateParameter"></a>

### MassConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Cut"></a>

### MassConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Delete"></a>

### MassConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Duplicate"></a>

### MassConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Equals"></a>

### MassConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetAPIName"></a>

### MassConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetAllProperties"></a>

### MassConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetChildren"></a>

### MassConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MassConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetDetailsView"></a>

### MassConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetEnumName"></a>

### MassConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetHashCode"></a>

### MassConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetIconFile"></a>

### MassConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetLifetimeService"></a>

### MassConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetObjectData"></a>

### MassConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetParameter"></a>

### MassConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetPath"></a>

### MassConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetPropertyName"></a>

### MassConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetPropertyValue"></a>

### MassConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetVisibleProperties"></a>

### MassConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GetVisiblePropertyNames"></a>

### MassConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GroupAllSimilarChildren"></a>

### MassConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.GroupSimilarObjects"></a>

### MassConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.InitializeLifetimeService"></a>

### MassConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.IsPropertyEditable"></a>

### MassConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MassConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.IsPropertyVisible"></a>

### MassConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MassConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.Paste"></a>

### MassConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PropertyByAPIName"></a>

### MassConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PropertyById"></a>

### MassConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.PropertyByName"></a>

### MassConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.RemoveFromGroup"></a>

### MassConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.RemoveParameter"></a>

### MassConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassConstraint.RenameBasedOnDefinition"></a>

### MassConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

